import Image from "next/image";
import Link from "next/link";

const webAppLink = "https://app.triozy.com/";
const logoUrl = "/triozy_logo.png";

export default function GlobalHeader() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#EAE8FF]/80 backdrop-blur-2xl border-b border-[#635BFF]/15 transition-transform duration-300 translate-y-0"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <Image
            src={logoUrl}
            alt="Triozy App Logo"
            width={40}
            height={40}
            sizes="40px"
            className="w-10 h-10 rounded-xl shadow-sm object-cover group-hover:shadow-md transition-shadow"
          />
          <span className="text-2xl font-extrabold tracking-tight text-[#635BFF]">Triozy</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
          <Link href="/#features" className="hover:text-[#635BFF] transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="hover:text-[#635BFF] transition-colors">
            How it Works
          </Link>
          <Link href="/#faq" className="hover:text-[#635BFF] transition-colors">
            FAQ
          </Link>
        </div>

        <a
          href={webAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#635BFF] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#524be0] transition-all hover:shadow-[0_8px_20px_rgba(99,91,255,0.3)] hover:-translate-y-0.5"
        >
          Try on Web
        </a>
      </div>
    </nav>
  );
}
