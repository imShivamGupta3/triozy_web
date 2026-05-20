import { allLocalities } from '../../../content/locality';
import LocalityPageComponent from '../../../components/LocalityPage';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ city: string; locality: string }>;
};

export async function generateStaticParams() {
  return allLocalities.map((loc) => ({
    city: loc.city,
    locality: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  
  const locality = allLocalities.find(
    x => x.city === resolvedParams.city && x.slug === resolvedParams.locality
  );

  if (!locality) return { title: 'Locality Not Found' };

  return {
    title: `${locality.title} | Triozy`,
    description: locality.description || `Find broker-free apartments, comfortable PGs, trusted flatmates, used furniture and local tiffin services in ${locality.title}.`,
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const locality = allLocalities.find(
    x => x.city === resolvedParams.city && x.slug === resolvedParams.locality
  );

  if (!locality) {
    notFound();
  }

  return <LocalityPageComponent data={locality} />;
}