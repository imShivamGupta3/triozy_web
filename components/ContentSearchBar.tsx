'use client';

import { useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export type ContentSearchItem = {
  type: 'blog' | 'locality';
  title: string;
  href: string;
  keywords?: string[];
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u2019']/g, "'")
    .replace(/[^a-z0-9\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildHaystack(item: ContentSearchItem): string {
  return normalize(`${item.title} ${(item.keywords ?? []).join(' ')}`);
}

export default function ContentSearchBar({ items }: { items: ContentSearchItem[] }) {
  const router = useRouter();
  const listboxId = useId();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const normalizedQuery = useMemo(() => normalize(query), [query]);

  const results = useMemo(() => {
    if (!normalizedQuery) return [];
    const out: ContentSearchItem[] = [];
    for (const item of items) {
      if (buildHaystack(item).includes(normalizedQuery)) out.push(item);
      if (out.length >= 8) break;
    }
    return out;
  }, [items, normalizedQuery]);

  const clampedActiveIndex =
    results.length === 0 ? -1 : Math.min(Math.max(activeIndex, 0), results.length - 1);

  function close() {
    setIsOpen(false);
    setActiveIndex(-1);
  }

  function open() {
    if (normalizedQuery) setIsOpen(true);
  }

  function goToActive() {
    const item = results[clampedActiveIndex];
    if (!item) return;
    close();
    router.push(item.href);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const start = prev < 0 ? 0 : prev;
        return Math.min(start + 1, results.length - 1);
      });
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const start = prev < 0 ? 0 : prev;
        return Math.max(start - 1, 0);
      });
      return;
    }
    if (e.key === 'Enter') {
      if (clampedActiveIndex >= 0) {
        e.preventDefault();
        goToActive();
      }
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-white/70" />
      </div>
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => {
          const next = e.target.value;
          setQuery(next);
          const nextNorm = normalize(next);
          if (!nextNorm) {
            close();
            return;
          }
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onFocus={open}
        onKeyDown={onKeyDown}
        onBlur={(e) => {
          const next = e.relatedTarget as Node | null;
          if (next && resultsRef.current?.contains(next)) return;
          close();
        }}
        placeholder="Search articles, neighborhoods, or FAQs"
        aria-label="Search Triozy content"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          clampedActiveIndex >= 0 ? `${listboxId}-opt-${clampedActiveIndex}` : undefined
        }
        className="w-full rounded-full border border-white/25 bg-white/10 pl-12 pr-6 py-4 text-white placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white/70"
      />

      {isOpen && normalizedQuery && (
        <div
          ref={resultsRef}
          className="absolute z-20 mt-3 w-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl"
        >
          <div role="listbox" id={listboxId} className="max-h-80 overflow-auto py-2">
            {results.length === 0 ? (
              <div className="px-4 py-3 text-sm text-slate-600">No results.</div>
            ) : (
              results.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  id={`${listboxId}-opt-${idx}`}
                  role="option"
                  aria-selected={idx === clampedActiveIndex}
                  tabIndex={-1}
                  onMouseDown={(e) => {
                    // Prevent the input blur from closing the popup before the click lands.
                    e.preventDefault();
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => close()}
                  className={[
                    'mx-2 flex items-start justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors outline-none',
                    idx === clampedActiveIndex ? 'bg-slate-100' : 'hover:bg-slate-50',
                    'focus-visible:ring-2 focus-visible:ring-[#635BFF]/60',
                  ].join(' ')}
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">{item.title}</div>
                    <div className="mt-0.5 text-xs text-slate-600 truncate">{item.href}</div>
                  </div>
                  <span
                    className={[
                      'shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold',
                      item.type === 'blog'
                        ? 'bg-[#635BFF]/10 text-[#3b37b6]'
                        : 'bg-emerald-500/10 text-emerald-800',
                    ].join(' ')}
                  >
                    {item.type === 'blog' ? 'Article' : 'Area'}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
