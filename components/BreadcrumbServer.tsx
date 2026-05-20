import Link from 'next/link';
import Schema from './Schema';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
  variant?: 'default' | 'light';
};

const BASE_URL = 'https://triozy.com';

export default function BreadcrumbServer({ items, variant = 'default' }: Props) {
  const navTextClass = variant === 'light' ? 'text-white/80' : 'text-slate-500';
  const linkClass =
    variant === 'light'
      ? 'hover:text-white transition-colors'
      : 'hover:text-[#635BFF] transition-colors';
  const dividerClass = variant === 'light' ? 'text-white/60' : 'text-slate-400';
  const currentClass = variant === 'light' ? 'text-white font-semibold' : 'text-slate-800 font-medium';

  const breadcrumbData = items.map((item) => ({
    name: item.label,
    url: `${BASE_URL}${item.href.startsWith('/') ? '' : '/'}${item.href}`,
  }));

  return (
    <>
      <Schema type="BreadcrumbList" data={breadcrumbData} />
      <nav aria-label="breadcrumb" className={`py-4 text-sm ${navTextClass}`}>
        <ol className="flex space-x-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex space-x-2">
                {index > 0 && <span className={dividerClass}>&gt;</span>}
                {isLast ? (
                  <span className={currentClass} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={linkClass}>
                    {item.label}
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

