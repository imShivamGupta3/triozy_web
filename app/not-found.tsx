import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 text-center mt-16">
      <div className="bg-white rounded-3xl border border-slate-200 p-12 max-w-md shadow-sm">
        <h1 className="text-6xl font-extrabold text-[#635BFF] mb-6">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          Oops! We couldn&apos;t find the page you were looking for. It might have been moved or removed.
        </p>
        <Link href="/" className="inline-flex rounded-full bg-[#635BFF] px-8 py-4 text-white font-semibold shadow-lg shadow-[#635BFF]/20 hover:bg-[#524be0] transition">
          Go Home
        </Link>
      </div>
    </main>
  );
}
