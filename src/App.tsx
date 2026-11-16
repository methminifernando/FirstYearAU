import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { Plan12MonthView } from './components/Plan12MonthView';
import { GuideView } from './components/GuideView';
import { MembershipPricingView } from './components/MembershipPricingView';
import { ContactView } from './components/ContactView';
import { RentalTemplateModal } from './components/RentalTemplateModal';
import { SubscribeModal } from './components/SubscribeModal';
import { AussieGlossaryModal } from './components/AussieGlossaryModal';
import { getGuideById } from './data/guidesData';
import { getSeoRouteByPath } from './data/seoRoutes';
import {
  getHref,
  getCanonicalUrl,
  resolveAppPathFromLocation,
  getStructuredDataForPath
} from './utils/routing';

interface AppProps {
  initialPath?: string;
}

export default function App({ initialPath }: AppProps) {
  // Navigation State (SSR-safe)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') {
      return resolveAppPathFromLocation(window.location.pathname, window.location.hash);
    }
    return 'home';
  });

  // Modals State
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isGlossaryModalOpen, setIsGlossaryModalOpen] = useState(false);

  // Sync state with browser Back/Forward navigation and legacy hashes
  useEffect(() => {
    const syncFromLocation = () => {
      const resolved = resolveAppPathFromLocation(window.location.pathname, window.location.hash);
      setCurrentPath(resolved);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  // Dynamically sync document <title>, meta tags, Open Graph, canonical URL, and JSON-LD
  useEffect(() => {
    const meta = getSeoRouteByPath(currentPath);
    const canonical = getCanonicalUrl(currentPath);

    document.title = meta.title;

    const setMetaTag = (selector: string, attrName: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.ogTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.ogDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.ogTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.ogDescription);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Update JSON-LD structured data scripts
    const existingScripts = document.querySelectorAll('script[data-fyau-jsonld="true"]');
    existingScripts.forEach((s) => s.remove());

    const schemas = getStructuredDataForPath(currentPath);
    schemas.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-fyau-jsonld', 'true');
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });
  }, [currentPath]);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      const nextUrl = getHref(path);
      if (window.location.pathname !== nextUrl || window.location.hash) {
        window.history.pushState({ path }, '', nextUrl);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(path);
  };

  // Helper to resolve guide by category and slug
  const resolveGuideSlug = (path: string): string | null => {
    if (path.includes('sim-internet')) return 'sim-internet';
    if (path.includes('bank-account')) return 'bank-account';
    if (path.includes('tax-file-number')) return 'tax-file-number';
    if (path.includes('superannuation')) return 'superannuation';
    if (path.includes('renting-inspections')) return 'renting-inspections';
    if (path.includes('bond-condition-report')) return 'bond-condition-report';
    if (path.includes('furniture')) return 'furniture';
    if (path.includes('public-transport')) return 'public-transport';
    if (path.includes('driver-licence')) return 'driver-licence';
    if (path.includes('buying-a-car')) return 'buying-a-car';
    if (path.includes('proof-of-age')) return 'proof-of-age';
    if (path.includes('police-check')) return 'police-check';
    if (path.includes('working-with-children')) return 'working-with-children';
    return null;
  };

  const activeGuideSlug = resolveGuideSlug(currentPath);
  const activeGuide = activeGuideSlug ? getGuideById(activeGuideSlug) : null;

  // Compute Breadcrumb trail
  const getBreadcrumbs = () => {
    if (currentPath === 'home') return [];

    // About
    if (currentPath.startsWith('about/')) {
      const isHow = currentPath.includes('how-we-work');
      return [
        { label: 'About', path: 'about/story' },
        { label: isHow ? 'How we work' : 'Our story' }
      ];
    }

    // 12-Month Plan
    if (currentPath.startsWith('plan/')) {
      const stageName = currentPath.replace('plan/', '');
      const stageLabels: Record<string, string> = {
        overview: 'Overview',
        'before-arrival': 'Before arrival',
        'week-1': 'Week 1',
        'month-1': 'Month 1',
        'months-2-3': 'Months 2 to 3',
        'months-4-12': 'Months 4 to 12'
      };
      return [
        { label: '12-Month Plan', path: 'plan/overview' },
        { label: stageLabels[stageName] || 'Timeline' }
      ];
    }

    // Guides
    if (activeGuide) {
      return [
        { label: activeGuide.category, path: `${activeGuide.categorySlug}/${activeGuide.slug}` },
        { label: activeGuide.title }
      ];
    }

    // Membership & Pricing
    if (currentPath.startsWith('pricing/')) {
      const sub = currentPath.replace('pricing/', '');
      const subLabels: Record<string, string> = {
        free: 'Free plan and checklist',
        plus: 'FirstYear Plus subscription',
        compare: 'Compare plans',
        partners: 'Partner offers'
      };
      return [
        { label: 'Membership and Pricing', path: 'pricing/compare' },
        { label: subLabels[sub] || 'Pricing' }
      ];
    }

    // Contact
    if (currentPath.startsWith('contact/')) {
      const sub = currentPath.replace('contact/', '');
      const subLabels: Record<string, string> = {
        form: 'Contact form',
        faq: 'Frequently Asked Questions',
        chatbot: 'Chat-Bot Assistant'
      };
      return [
        { label: 'Contact', path: 'contact/form' },
        { label: subLabels[sub] || 'Support' }
      ];
    }

    return [];
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6FAF7] text-[#1B3A34]">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenGlossary={() => setIsGlossaryModalOpen(true)}
      />

      {/* Breadcrumbs (rendered on every subpage) */}
      {currentPath !== 'home' && (
        <Breadcrumbs
          items={getBreadcrumbs()}
          onNavigate={navigateTo}
        />
      )}

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPath === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenTemplatePreview={() => setIsTemplateModalOpen(true)}
            onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
          />
        )}

        {/* About Pages */}
        {currentPath.startsWith('about/') && (
          <AboutView
            subPage={currentPath.includes('how-we-work') ? 'how-we-work' : 'story'}
            onNavigate={navigateTo}
            onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
          />
        )}

        {/* 12-Month Plan Pages */}
        {currentPath.startsWith('plan/') && (
          <Plan12MonthView
            currentStageId={currentPath.replace('plan/', '')}
            onNavigate={navigateTo}
            onSelectGuide={(slug) => {
              const targetGuide = getGuideById(slug);
              if (targetGuide) {
                navigateTo(`${targetGuide.categorySlug}/${targetGuide.slug}`);
              }
            }}
            onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
          />
        )}

        {/* Guides (Get Set-Up, Find a Home, Get Around, ID and Paperwork) */}
        {activeGuide && (
          <GuideView
            guide={activeGuide}
            onNavigate={navigateTo}
            onSelectGuide={(slug) => {
              const targetGuide = getGuideById(slug);
              if (targetGuide) {
                navigateTo(`${targetGuide.categorySlug}/${targetGuide.slug}`);
              } else {
                navigateTo('plan/overview');
              }
            }}
            onOpenTemplatePreview={() => setIsTemplateModalOpen(true)}
          />
        )}

        {/* Membership & Pricing */}
        {currentPath.startsWith('pricing/') && (
          <MembershipPricingView
            subPage={
              currentPath.includes('free')
                ? 'free'
                : currentPath.includes('plus')
                ? 'plus'
                : currentPath.includes('partners')
                ? 'partners'
                : 'compare'
            }
            onNavigate={navigateTo}
            onOpenTemplatePreview={() => setIsTemplateModalOpen(true)}
            onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
          />
        )}

        {/* Contact */}
        {currentPath.startsWith('contact/') && (
          <ContactView
            subPage={
              currentPath.includes('faq')
                ? 'faq'
                : currentPath.includes('chatbot')
                ? 'chatbot'
                : 'form'
            }
            onNavigate={navigateTo}
            onSelectGuide={(slug) => {
              const targetGuide = getGuideById(slug);
              if (targetGuide) {
                navigateTo(`${targetGuide.categorySlug}/${targetGuide.slug}`);
              }
            }}
          />
        )}
      </main>

      {/* Comprehensive Site Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenGlossary={() => setIsGlossaryModalOpen(true)}
      />

      {/* Global Modals */}
      <RentalTemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSubscribe={() => {
          setIsTemplateModalOpen(false);
          setIsSubscribeModalOpen(true);
        }}
      />

      <SubscribeModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
        onNavigateToPlan={() => navigateTo('plan/overview')}
      />

      <AussieGlossaryModal
        isOpen={isGlossaryModalOpen}
        onClose={() => setIsGlossaryModalOpen(false)}
        onNavigateToGuide={(slug) => {
          setIsGlossaryModalOpen(false);
          const targetGuide = getGuideById(slug);
          if (targetGuide) {
            navigateTo(`${targetGuide.categorySlug}/${targetGuide.slug}`);
          }
        }}
      />
    </div>
  );
}
