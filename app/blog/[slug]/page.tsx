import { getBlogPostBySlug, getAllBlogPosts } from '../../../content/blog';
import BlogLayout from '../../../components/BlogLayout';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const blog = getBlogPostBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://triozy.com/blog/${blog.slug}`
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.heroImage ? [blog.heroImage.startsWith('http') ? blog.heroImage : `https://triozy.com${blog.heroImage.startsWith('/') ? '' : '/'}${blog.heroImage}`] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = getBlogPostBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return <BlogLayout post={blog} />;
}