import Link from 'next/link';

export default function RelatedArticles({ articles }: { articles: { title: string, slug: string }[] }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mt-12">
      <h3 className="font-bold text-2xl mb-6 text-slate-900">Keep Reading</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article, i) => (
          <Link key={i} href={`/blog/${article.slug}`} className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#635BFF] hover:shadow-md transition">
            <h4 className="font-semibold text-slate-900 group-hover:text-[#635BFF]">{article.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}