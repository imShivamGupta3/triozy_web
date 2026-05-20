import React from 'react';

type BlogPostingData = {
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  heroImage?: string;
};

type FAQEntry = {
  question: string;
  answer: string;
};

type BreadcrumbCrumb = {
  name: string;
  url: string;
};

type SchemaProps =
  | { type: 'BlogPosting'; data: BlogPostingData }
  | { type: 'FAQPage'; data: FAQEntry[] }
  | { type: 'Organization'; data?: never }
  | { type: 'BreadcrumbList'; data: BreadcrumbCrumb[] };

function safeJsonLdStringify(value: unknown) {
  // Prevent `</script>`-style injection and keep output valid inside an HTML script tag.
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export default function Schema(props: SchemaProps) {
  let schemaContent: Record<string, unknown> = {};

  if (props.type === 'BlogPosting') {
    const data = props.data;
    schemaContent = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title,
      "description": data.description,
      "datePublished": data.publishedAt,
      "dateModified": data.updatedAt ?? data.publishedAt,
      "image": data.heroImage
        ? [
            data.heroImage.startsWith('http')
              ? data.heroImage
              : `https://triozy.com${data.heroImage.startsWith('/') ? '' : '/'}${data.heroImage}`,
          ]
        : undefined,
      "author": {
        "@type": "Organization",
        "name": "Triozy",
      },
    };
  } else if (props.type === 'FAQPage') {
    schemaContent = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": props.data.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };
  } else if (props.type === 'Organization') {
    schemaContent = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Triozy",
      "url": "https://triozy.com",
      "logo": "https://triozy.com/triozy_logo.png",
    };
  } else if (props.type === 'BreadcrumbList') {
    schemaContent = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": props.data.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(schemaContent) }}
    />
  );
}
