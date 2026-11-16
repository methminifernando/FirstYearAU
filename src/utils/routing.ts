import { SEO_ROUTES, SITE_BASE_URL, getSeoRouteByPath } from '../data/seoRoutes';
import { getGuideById } from '../data/guidesData';
import { GENERAL_FAQS } from '../data/faqData';
import { PLAN_FAQS, PRICING_FAQS, ABOUT_FAQS } from '../data/pageFaqs';
import { GuideFAQ } from '../types';

export function getBasePath(): string {
  const base =
    typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL
      ? import.meta.env.BASE_URL
      : '/FirstYearAU/';
  return base.endsWith('/') ? base : `${base}/`;
}

export function getHref(appPath: string, overrideBase?: string): string {
  const base = overrideBase ?? getBasePath();
  const route = getSeoRouteByPath(appPath);
  if (route.fileName === 'index.html') {
    return base;
  }
  return `${base}${route.fileName}`;
}

export function getCanonicalUrl(appPath: string): string {
  const route = getSeoRouteByPath(appPath);
  if (route.fileName === 'index.html') {
    return SITE_BASE_URL;
  }
  return `${SITE_BASE_URL}${route.fileName}`;
}

export function resolveAppPathFromLocation(pathname: string, hash?: string): string {
  // Check legacy hash routing first (e.g. #get-set-up/tax-file-number)
  if (hash) {
    const cleanedHash = hash.replace(/^#\/?/, '');
    if (cleanedHash) {
      const matchedByHash = SEO_ROUTES.find((r) => r.path === cleanedHash);
      if (matchedByHash) return matchedByHash.path;
      // Support partial matches like plan/week-1 or guide slugs
      if (cleanedHash.startsWith('plan/') || cleanedHash.startsWith('about/') || cleanedHash.startsWith('pricing/') || cleanedHash.startsWith('contact/')) {
        return cleanedHash;
      }
      const guideSlugMatch = SEO_ROUTES.find((r) => r.path.endsWith(`/${cleanedHash}`));
      if (guideSlugMatch) return guideSlugMatch.path;
    }
  }

  // Check static .html pathname (works for /FirstYearAU/tfn.html and /tfn.html)
  const cleanPath = pathname.split('?')[0].replace(/\/+$/, '');
  const lastSegment = cleanPath.split('/').pop() || '';

  if (!lastSegment || lastSegment === 'FirstYearAU' || lastSegment === 'index.html') {
    return 'home';
  }

  const matchedByFile = SEO_ROUTES.find(
    (r) => r.fileName === lastSegment || r.fileName === `${lastSegment}.html`
  );
  if (matchedByFile) {
    return matchedByFile.path;
  }

  return 'home';
}

export function getFaqsForPath(appPath: string): GuideFAQ[] {
  // Check if it is a guide page
  const slug = appPath.split('/').pop() || '';
  const guide = getGuideById(slug);
  if (guide) {
    return guide.faqs;
  }

  // Check if it is a 12-Month Plan page
  if (appPath.startsWith('plan/')) {
    const stageKey = appPath.replace('plan/', '');
    return PLAN_FAQS[stageKey] || PLAN_FAQS.overview;
  }

  // Check if it is a Membership & Pricing page
  if (appPath.startsWith('pricing/')) {
    return PRICING_FAQS;
  }

  // Check if it is an About page
  if (appPath.startsWith('about/')) {
    return ABOUT_FAQS;
  }

  // Contact FAQ page
  if (appPath === 'contact/faq') {
    return GENERAL_FAQS.map((f) => ({ question: f.question, answer: f.answer }));
  }

  return [];
}

export function getStructuredDataForPath(appPath: string): Record<string, unknown>[] {
  const route = getSeoRouteByPath(appPath);
  const canonicalUrl = getCanonicalUrl(appPath);
  const schemas: Record<string, unknown>[] = [];

  if (appPath === 'home') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'FirstYear AU',
      url: SITE_BASE_URL,
      description: route.description
    });
  } else {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: route.title,
      description: route.description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: 'FirstYear AU',
        url: SITE_BASE_URL
      }
    });
  }

  const faqs = getFaqsForPath(appPath);
  if (faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return schemas;
}
