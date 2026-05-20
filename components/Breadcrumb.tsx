'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Schema from './Schema';
import React from 'react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

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
      <nav aria-label="breadcrumb" className="py-4 text-sm text-slate-500">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="hover:text-[#635BFF] transition-colors">
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
                <span>&gt;</span>
                {isLast ? (
                  <span className="text-slate-800 font-medium" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-[#635BFF] transition-colors">
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