import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import CTASection from './CTASection';
import Schema from './Schema';
import { CityLanding } from '../content/city/types';
import { LocalityData } from '../content/locality/types';

type Props = {
  city: CityLanding;
  localities: LocalityData[];
};

function titleCaseCity(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function CityPage({ city, localities }: Props) {
  const cityLabel = city.name || titleCaseCity(city.slug);
  const hasLocalities = localities.length > 0;

  const popularAreaCards = city.popularAreas.slice(0, 8).map((area) => {
    const linkedLocality = area.localitySlug
      ? localities.find((l) => l.slug === area.localitySlug)
      : undefined;
    return { area, linkedLocality };
  });

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {city.faq.length > 0 && <Schema type="FAQPage" data={city.faq} />}

      <header className="bg-gradient-to-b from-[#635BFF] to-[#8A78FF] pb-20 pt-28 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-white/80 pb-4">
            <Breadcrumb variant="light" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#c1d4ff] mb-4">{cityLabel}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Find Rooms, Flatmates, PGs &amp; Maids in {cityLabel}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
            {city.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://app.triozy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#4039A3] shadow-lg hover:bg-slate-100 transition"
            >
              Explore Listings
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              Read Local Guides
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <section aria-labelledby="popular-areas" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 id="popular-areas" className="text-2xl md:text-3xl font-bold text-slate-900">
                Popular Areas in {cityLabel}
              </h2>
              <p className="mt-2 text-slate-600">
                Start with a shortlist near your college or office. Compare rent, commute, and daily convenience.
              </p>
            </div>
            {hasLocalities && (
              <p className="text-sm text-slate-500">
                Tip: open 3 to 5 listings per area to compare quickly.
              </p>
            )}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularAreaCards.map(({ area, linkedLocality }) => {
              const card = (
                <>
                  <h3 className="text-lg font-semibold text-slate-900">{area.name}</h3>
                  {linkedLocality?.averageRent && (
                    <p className="mt-2 text-sm text-slate-600">
                      Avg rent: PG {linkedLocality.averageRent.pg} <span aria-hidden="true">&middot;</span> Room {linkedLocality.averageRent.room} <span aria-hidden="true">&middot;</span> Flat {linkedLocality.averageRent.flat}
                    </p>
                  )}
                  {area.blurb && <p className="mt-3 text-sm text-slate-500">{area.blurb}</p>}
                </>
              );

              if (linkedLocality) {
                return (
                  <Link
                    key={area.name}
                    href={`/${city.slug}/${linkedLocality.slug}`}
                    className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#635BFF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2"
                  >
                    {card}
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4039A3] group-hover:text-[#635BFF]">
                      View area <span aria-hidden="true">&rarr;</span>
                    </div>
                  </Link>
                );
              }

              return (
                <div
                  key={area.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  {card}
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="services" className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 id="services" className="text-2xl font-bold text-slate-900">Rooms for Rent</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Browse verified rooms for rent in {cityLabel} and filter by budget, furnishing, and distance to your
              daily commute. Prefer main-road access and good lighting if you come back late.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              If you are new to the city, start with areas that have predictable transit and frequent essentials like
              grocery stores, pharmacies, and food options nearby.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Find Flatmates</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Find compatible flatmates in {cityLabel} by aligning on budget, cleanliness, work hours, and visitors
              policy. A quick chat plus a written agreement on rent split and deposit avoids most conflicts.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Always verify the locality, confirm the total monthly cost (including utilities), and meet in a public
              place before you finalize.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">PGs</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              PGs are a solid starting point when you want a simpler move with food and services included. Compare
              room type, rules, and commute time, and avoid paying any token amount before a visit.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              If you plan to stay longer, also compare shared flats. Many people switch after 1 to 2 months once they
              understand their daily travel routine.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Maids &amp; Tiffin Services</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Settling in is more than finding a room. Discover local services like maids and tiffin in {cityLabel}
              based on locality availability, timing, and pricing.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Ask for a trial week, confirm holidays and payment schedule, and keep a simple checklist for tasks and
              expectations.
            </p>
          </article>
        </section>

        {city.faq.length > 0 && (
          <section aria-labelledby="faq" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <dl className="mt-6 space-y-6">
              {city.faq.map((entry) => (
                <div key={entry.question} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <dt className="text-lg font-semibold text-slate-900">{entry.question}</dt>
                  <dd className="mt-2 text-slate-600">{entry.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {hasLocalities && (
          <section aria-labelledby="localities" className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 id="localities" className="text-2xl font-bold text-slate-900">Explore Areas</h2>
            <p className="mt-2 text-slate-600">Open a locality page to see rent signals, nearby colleges/offices, and FAQs.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {localities.slice(0, 12).map((loc, index, arr) => {
                const isLast = index === arr.length - 1;
                const spanTwoCols = arr.length % 2 === 1 && isLast;
                return (
                <Link
                  key={loc.slug}
                  href={`/${city.slug}/${loc.slug}`}
                  className={`group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#635BFF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2${spanTwoCols ? ' sm:col-span-2' : ''}`}
                >
                  <h3 className="text-lg font-semibold text-slate-900">{loc.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Avg rent: PG {loc.averageRent.pg} <span aria-hidden="true">&middot;</span> Room {loc.averageRent.room} <span aria-hidden="true">&middot;</span> Flat {loc.averageRent.flat}
                  </p>
                  {loc.description && <p className="mt-3 text-sm text-slate-500">{loc.description}</p>}
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
          title={`Explore Housing & Services in ${cityLabel} on Triozy`}
          link="https://app.triozy.com/"
          linkText="Explore Housing & Services on Triozy"
        />
      </div>
    </main>
  );
}
