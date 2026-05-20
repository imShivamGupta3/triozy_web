import { LocalityData } from '../content/locality/types';
import { allLocalities } from '../content/locality';
import CTASection from './CTASection';
import Breadcrumb from './Breadcrumb';
import Schema from './Schema';
import Link from 'next/link';

function getWhoShouldLiveHere(locality: LocalityData) {
  const audiences: string[] = [];
  if (locality.nearbyOffices.length > 0) audiences.push('Working professionals who want a shorter daily commute.');
  if (locality.nearbyColleges.length > 0) audiences.push('Students who want convenient access to colleges and coaching.');
  audiences.push('People who prefer daily conveniences like groceries, food, and essential services nearby.');
  audiences.push('Anyone relocating to Indore who wants a stable, easy-to-navigate neighborhood to start with.');
  return audiences;
}

function getTransportationNotes(locality: LocalityData) {
  const cityLabel = locality.city.charAt(0).toUpperCase() + locality.city.slice(1);
  return [
    `Within ${cityLabel}, shared autos and e-rickshaws are common for short trips, and app cabs work best for late evenings.`,
    'For daily commuting, prioritize a lane with easy pickup points (main road access) and consistent street lighting.',
    'If you travel frequently, check how quickly you can reach major roads and whether peak-hour traffic affects your timing.'
  ];
}

export default function LocalityPage({ data }: { data: LocalityData }) {
  const cityLabel = data.city.charAt(0).toUpperCase() + data.city.slice(1);
  const aboutText =
    data.description ||
    `Discover broker-free flats, trusted flatmates, and local services in ${data.title}.`;

  const relatedAreas = (data.relatedAreas && data.relatedAreas.length > 0)
    ? data.relatedAreas
        .map((slug) => allLocalities.find((loc) => loc.city === data.city && loc.slug === slug))
        .filter((x): x is LocalityData => Boolean(x))
        .slice(0, 4)
    : allLocalities
        .filter((loc) => loc.city === data.city && loc.slug !== data.slug)
        .slice(0, 4);

  const whoShouldLive = (data.whoShouldLive && data.whoShouldLive.length > 0)
    ? data.whoShouldLive
    : getWhoShouldLiveHere(data);

  const transportationLines = (data.transportation && data.transportation.length > 0)
    ? data.transportation
    : getTransportationNotes(data);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {data.faq && data.faq.length > 0 && <Schema type="FAQPage" data={data.faq} />}

      <header className="bg-gradient-to-b from-[#635BFF] to-[#8A78FF] pb-20 pt-28 text-white">
          <div className="mx-auto max-w-5xl px-6">
          <div className="text-white/80 pb-4">
            <Breadcrumb variant="light" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#c1d4ff] mb-4">{cityLabel}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{data.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
            {aboutText}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        <section aria-labelledby="about" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm scroll-mt-24" id="about">
          <h2 id="about-title" className="text-2xl md:text-3xl font-bold text-slate-900">
            About {data.title}
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            <p>{aboutText}</p>
          </div>
        </section>

        <section aria-label="Key Details" className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-2 text-slate-900">Average Rent</h2>
            <div className="mt-3 space-y-2 text-slate-700">
              <p className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-slate-600">PG</span>
                <span className="font-extrabold text-[#635BFF]">{data.averageRent.pg}</span>
              </p>
              <p className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-slate-600">Room</span>
                <span className="font-extrabold text-[#635BFF]">{data.averageRent.room}</span>
              </p>
              <p className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-slate-600">Flat</span>
                <span className="font-extrabold text-[#635BFF]">{data.averageRent.flat}</span>
              </p>
            </div>
            <p className="text-slate-500 text-sm mt-3">Typical monthly ranges</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-2 text-slate-900">Nearby Offices</h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              {data.nearbyOffices.length > 0 ? data.nearbyOffices.map((o) => <li key={o}>{o}</li>) : <li>Residential focus</li>}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-2 text-slate-900">Nearby Colleges</h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              {data.nearbyColleges.length > 0 ? data.nearbyColleges.map((c) => <li key={c}>{c}</li>) : <li>Check app for PGs</li>}
            </ul>
          </article>
        </section>

        <section aria-labelledby="who" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm scroll-mt-24" id="who">
          <h2 id="who-title" className="text-2xl md:text-3xl font-bold text-slate-900">Who should live here?</h2>
          <ul className="mt-4 list-disc pl-5 text-slate-600 space-y-2">
            {whoShouldLive.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="transport" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm scroll-mt-24" id="transport">
          <h2 id="transport-title" className="text-2xl md:text-3xl font-bold text-slate-900">Transportation</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            {transportationLines.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {data.faq && data.faq.length > 0 && (
          <section aria-labelledby="faq" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm scroll-mt-24" id="faq">
            <h2 id="faq-title" className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <dl className="mt-6 space-y-6">
              {data.faq.map((entry) => (
                <div key={entry.question} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <dt className="text-lg font-semibold text-slate-900">{entry.question}</dt>
                  <dd className="mt-2 text-slate-600">{entry.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {relatedAreas.length > 0 && (
          <section aria-labelledby="related-areas" className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm scroll-mt-24" id="related-areas">
            <h2 id="related-areas-title" className="text-2xl font-bold text-slate-900">Related Areas</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedAreas.map((area, index) => {
                const isLast = index === relatedAreas.length - 1;
                const spanTwoCols = relatedAreas.length % 2 === 1 && isLast;
                return (
                <Link
                  key={area.slug}
                  href={`/${area.city}/${area.slug}`}
                  className={`group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#635BFF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2${spanTwoCols ? ' sm:col-span-2' : ''}`}
                >
                  <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Avg rent: PG {area.averageRent.pg} <span aria-hidden="true">&middot;</span> Room {area.averageRent.room} <span aria-hidden="true">&middot;</span> Flat {area.averageRent.flat}
                  </p>
                  {area.description && <p className="mt-3 text-sm text-slate-500">{area.description}</p>}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4039A3] group-hover:text-[#635BFF]">
                    View area <span aria-hidden="true">&rarr;</span>
                  </div>
                </Link>
                );
              })}
            </div>
          </section>
        )}

        <CTASection
          title="Explore Housing & Services on Triozy"
          link="https://app.triozy.com/"
          linkText="Explore Housing & Services on Triozy"
        />
      </div>
    </main>
  );
}
