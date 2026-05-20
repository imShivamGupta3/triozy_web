import Link from 'next/link';

export default function CTASection({ title, link, linkText }: { title: string, link: string, linkText: string }) {
  return (
    <div className="text-center bg-[#F0EEFF] p-12 rounded-3xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">{title}</h2>
      <Link href={link} className="inline-flex rounded-full bg-[#635BFF] px-8 py-4 text-white font-semibold shadow-lg shadow-[#635BFF]/20 hover:bg-[#524be0] transition">
        {linkText}
      </Link>
    </div>
  );
}