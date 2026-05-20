import { getAllBlogPosts } from '../../content/blog';
import { allLocalities } from '../../content/locality';
import Link from 'next/link';
import ContentSearchBar, { ContentSearchItem } from '../../components/ContentSearchBar';

export const metadata = {
  title: 'Blog | Triozy - Guides and Insights',
  description: 'Read the latest guides about city housing, local services, and marketplace insights from Triozy.',
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  const searchItems: ContentSearchItem[] = [
    ...posts.map((post) => {
      const keywordList = Array.isArray(post.keywords)
        ? post.keywords
        : typeof post.keywords === 'string'
          ? [post.keywords]
          : [];

      return {
        type: 'blog' as const,
        title: post.title,
        href: `/blog/${post.slug}`,
        keywords: [
          post.category,
          ...keywordList,
          ...(post.faq?.map((f) => f.question) ?? []),
        ],
      };
    }),
    ...allLocalities.map((locality) => ({
      type: 'locality' as const,
      title: locality.title,
      href: `/${locality.city}/${locality.slug}`,
      keywords: [
        locality.city,
        ...locality.nearbyColleges,
        ...locality.nearbyOffices,
        ...(locality.whoShouldLive ?? []),
        ...(locality.transportation ?? []),
        ...(locality.description ? [locality.description] : []),
        ...(locality.faq?.map((f) => f.question) ?? []),
      ],
    })),
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 pb-16">
      <section className="bg-gradient-to-b from-[#635BFF] to-[#8A78FF] text-white pb-24 pt-32 mb-16 rounded-b-[3rem]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c1d4ff] mb-4">Triozy Blog</p>
          <h1 className="text-5xl font-extrabold mb-6">Guides, insights, and tips to move smarter.</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed mb-12">
            Read our latest articles for students, young professionals, and families moving to a new city.
          </p>

          <div className="max-w-2xl mx-auto">
            <ContentSearchBar items={searchItems} />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <p className="text-sm font-semibold text-[#635BFF] mb-2">{post.category}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#635BFF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                  {post.description}
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently updated'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
