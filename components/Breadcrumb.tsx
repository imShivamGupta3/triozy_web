'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Schema from './Schema';
import React from 'react';

type BreadcrumbProps = {
  variant?: 'default' | 'light';
};

export default function Breadcrumb({ variant = 'default' }: BreadcrumbProps) {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  const navTextClass = variant === 'light' ? 'text-white/80' : 'text-slate-500';
  const linkClass =
    variant === 'light'
      ? 'hover:text-white transition-colors'
      : 'hover:text-[#635BFF] transition-colors';
  const dividerClass = variant === 'light' ? 'text-white/60' : 'text-slate-400';
  const currentClass = variant === 'light' ? 'text-white font-semibold' : 'text-slate-800 font-medium';

  const breadcrumbData = [
    { name: 'Home', url: 'https://triozy.com/' },
    ...pathnames.map((segment, index) => {
      const url = `https://triozy.com/${pathnames.slice(0, index + 1).join('/')}`;
      const name = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { name, url };
    })
  ];

  return (
    <>
      <Schema type="BreadcrumbList" data={breadcrumbData} />
      <nav aria-label="breadcrumb" className={`py-4 text-sm ${navTextClass}`}>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className={linkClass}>
              Home
            </Link>
          </li>
          {pathnames.map((segment, index) => {
            const isLast = index === pathnames.length - 1;
            const href = `/${pathnames.slice(0, index + 1).join('/')}`;
            const label = segment
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <li key={href} className="flex space-x-2">
                <span className={dividerClass}>&gt;</span>
                {isLast ? (
                  <span className={currentClass} aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
