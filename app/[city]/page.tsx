import { notFound } from 'next/navigation';
import CityPage from '../../components/CityPage';
import { allLocalities } from '../../content/locality';
import { allCities, getCityBySlug } from '../../content/city';

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return allCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);

  if (!city) return { title: 'City Not Found' };

  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: `/${city.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);

  if (!city) notFound();

  const localities = allLocalities.filter((l) => l.city === city.slug);
  return <CityPage city={city} localities={localities} />;
}

