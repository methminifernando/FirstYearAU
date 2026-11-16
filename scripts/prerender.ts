import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

interface SeoRouteMeta {
  path: string;
  fileName: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
}

interface EntryServerModule {
  SEO_ROUTES: SeoRouteMeta[];
  getCanonicalUrl: (appPath: string) => string;
  getStructuredDataForPath: (appPath: string) => Record<string, unknown>[];
  renderPage: (appPath: string) => string;
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeJsonForScript(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

async function main() {
  const rootDir = process.cwd();
  const distDir = path.join(rootDir, 'dist');
  const publicDir = path.join(rootDir, 'public');
  const templatePath = path.join(distDir, 'index.html');
  const ssrEntryPath = path.join(rootDir, '.prerender-tmp', 'entry-server.js');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing built dist/index.html at ${templatePath}`);
  }
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`Missing SSR bundle at ${ssrEntryPath}`);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const entryServer = (await import(pathToFileURL(ssrEntryPath).href)) as EntryServerModule;
  const { SEO_ROUTES, getCanonicalUrl, getStructuredDataForPath, renderPage } = entryServer;

  // Validate character budgets before writing static files
  const lengthErrors: string[] = [];
  for (const route of SEO_ROUTES) {
    if (route.path !== 'home' && route.title.length >= 60) {
      lengthErrors.push(
        `Title too long (${route.title.length} chars >= 60) for ${route.fileName}: "${route.title}"`
      );
    }
    if (route.description.length >= 155) {
      lengthErrors.push(
        `Description too long (${route.description.length} chars >= 155) for ${route.fileName}: "${route.description}"`
      );
    }
  }
  if (lengthErrors.length > 0) {
    throw new Error(`SEO metadata budget errors:\n${lengthErrors.join('\n')}`);
  }

  const today = new Date().toISOString().split('T')[0];
  const sitemapEntries: string[] = [];

  for (const route of SEO_ROUTES) {
    const canonicalUrl = getCanonicalUrl(route.path);
    const schemas = getStructuredDataForPath(route.path);
    const appHtml = renderPage(route.path);

    let html = templateHtml;

    html = html.replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeHtmlText(route.title)}</title>`
    );

    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtmlAttr(route.description)}" />`
    );

    html = html.replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${escapeHtmlAttr(route.keywords)}" />`
    );

    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtmlAttr(route.ogTitle)}" />`
    );

    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtmlAttr(route.ogDescription)}" />`
    );

    html = html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />`
    );

    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtmlAttr(route.ogTitle)}" />`
    );

    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtmlAttr(route.ogDescription)}" />`
    );

    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`
    );

    const jsonLdScripts = schemas
      .map(
        (schemaObj) =>
          `    <script type="application/ld+json" data-fyau-jsonld="true">${escapeJsonForScript(schemaObj)}</script>`
      )
      .join('\n');

    html = html.replace('</head>', `${jsonLdScripts}\n  </head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outputPath = path.join(distDir, route.fileName);
    fs.writeFileSync(outputPath, html, 'utf-8');

    sitemapEntries.push(
      `  <url>\n    <loc>${escapeHtmlText(canonicalUrl)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
    );
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  }

  console.log(
    `Pre-rendered ${SEO_ROUTES.length} static HTML pages and wrote sitemap.xml to dist/ and public/.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
