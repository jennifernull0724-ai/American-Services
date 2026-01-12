import { useEffect } from 'react';

const DEFAULT_SITE_NAME = 'American Services';
const DEFAULT_DESCRIPTION = 'American Services provides rail, industrial, load adjustment, environmental, and emergency response services across Mississippi, Tennessee, Louisiana, Arkansas, and Alabama. Coordinated, compliant, and operations-focused field execution.';
const DEFAULT_KEYWORDS = [
  'rail services',
  'load adjustment and transfer',
  'railroad emergency response',
  'industrial services',
  'environmental services',
  'railcar storage',
  'Mississippi rail services',
  'Southern rail contractors'
];

/**
 * Custom hook to manage SEO metadata per page
 * @param {Object} config - SEO configuration
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.canonical - Canonical URL
 * @param {string} [config.ogType] - Open Graph type (default: website)
 */
export function useSEO({ title, description, canonical, ogType = 'website' }) {
  useEffect(() => {
    const resolvedTitle = title?.includes('| American Services') ? title : `${title} | ${DEFAULT_SITE_NAME}`;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;

    // Set document title
    document.title = resolvedTitle;

    // Helper to set or create meta tag
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Meta description
    setMeta('description', resolvedDescription);
    setMeta('keywords', DEFAULT_KEYWORDS.join(', '));

    // Canonical URL
    if (canonical) {
      setLink('canonical', canonical);
    }

    // Open Graph
    setMeta('og:title', resolvedTitle, true);
    setMeta('og:description', resolvedDescription, true);
    if (canonical) {
      setMeta('og:url', canonical, true);
    }
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', DEFAULT_SITE_NAME, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', resolvedTitle);
    setMeta('twitter:description', resolvedDescription);

  }, [title, description, canonical, ogType]);
}

export default useSEO;
