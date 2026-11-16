import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { SEO_ROUTES } from './data/seoRoutes';
import { getCanonicalUrl, getStructuredDataForPath } from './utils/routing';

export { SEO_ROUTES, getCanonicalUrl, getStructuredDataForPath };

export function renderPage(appPath: string): string {
  return renderToString(<App initialPath={appPath} />);
}
