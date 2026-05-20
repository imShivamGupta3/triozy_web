import React from 'react';
import Link from 'next/link';
import { BlogPost, BlogSection } from '../content/blog/types';
import Breadcrumb from './Breadcrumb';
import Schema from './Schema';
import GlobalHeader from './GlobalHeader';

function formatDateLabel(dateStr: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!match) return dateStr;
  const year = match[1];
  const month = Number(match[2]);
  const day = Number(match[3]);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthLabel = months[month - 1] ?? match[2];
  return `${monthLabel} ${day}, ${year}`;
}

function getSectionId(heading: string) {
  return heading.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

function SectionContent({ section }: { section: BlogSection }) {
  if (section.type === 'cost-table' && section.tableData) {
    return (
      <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Expense</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Budget Range</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Comfort Range</th>
            </tr>
          </thead>
          <tbody>
            {section.tableData.map((row) => (
              <tr key={row.category} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                <td className="px-6 py-4 text-slate-700">{row.category}</td>
                <td className="px-6 py-4 text-slate-600">{row.low}</td>
                <td className="px-6 py-4 text-slate-600">{row.high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (section.type === 'list' && section.items) {
    return (
      <ul className="mt-4 list-disc space-y-4 pl-5 text-slate-600">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
      {section.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function BlogLayout({ post }: { post: BlogPost }) {
  const readingTime = Math.max(
    1,
    Math.ceil(post.sections.flatMap((section) => [...section.content, ...(section.items ?? [])]).join(' ').split(/\s+/).length / 200)
  );

  const metaParts: string[] = [];
  if (post.publishedAt) metaParts.push(`Published: ${formatDateLabel(post.publishedAt)}`);
  if (post.updatedAt && post.updatedAt !== post.publishedAt) metaParts.push(`Updated: ${formatDateLabel(post.updatedAt)}`);
  metaParts.push(`${readingTime} min read`);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <GlobalHeader />
      <Schema type="BlogPosting" data={post} />
      {post.faq && post.faq.length > 0 && <Schema type="FAQPage" data={post.faq} />}

      <section className="bg-gradient-to-b from-[#635BFF] to-[#8A78FF] pb-24 pt-32 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="pb-4 text-white/80">
            <Breadcrumb />
          </div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c1d4ff]">{post.category || 'Blog'}</p>
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">{post.title}</h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-200">{post.description}</p>

          <div className="flex items-center space-x-4 text-sm font-medium">
            {metaParts.map((part, i) => (
              <React.Fragment key={part}>
                {i > 0 && <span>&bull;</span>}
                <span>{part}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-4">
        <aside className="hidden border-r border-slate-200 pr-6 md:col-span-1 md:block">
          <div className="sticky top-24">
            <h3 className="mb-4 text-lg font-bold text-slate-900">Table of Contents</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${getSectionId(section.heading)}`} className="transition-colors hover:text-[#635BFF]">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="col-span-1 space-y-10 md:col-span-3">
          {post.sections.map((section) => (
            <article
              id={getSectionId(section.heading)}
              key={section.heading}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>
              <SectionContent section={section} />
            </article>
          ))}

          {post.faq && post.faq.length > 0 && (
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faq.map((entry) => (
                  <div key={entry.question} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">{entry.question}</h3>
                    <p className="text-slate-600">{entry.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {post.relatedArticles && post.relatedArticles.length > 0 && (
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {post.relatedArticles.map((slug) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="block rounded-xl border border-slate-200 p-4 transition-all hover:border-[#635BFF] hover:shadow-md"
                  >
                    <span className="font-semibold text-[#635BFF]">Read Article &rarr;</span>
                    <h3 className="mt-2 font-bold text-slate-900">
                      {slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h3>
                  </Link>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
