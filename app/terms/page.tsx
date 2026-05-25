"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Mail
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TermsOfService() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.triozy.triozy_app";
  const logoUrl = "/triozy_logo.png";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#E5E0FF] selection:text-[#635BFF]">
      
      {/* 1. STICKY NAVBAR (FIXED OVERLAP) */}
      <nav className="fixed w-full top-0 z-50 bg-[#EAE8FF]/90 backdrop-blur-xl border-b border-[#635BFF]/15 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 sm:gap-6 shrink-0">
            <Link href="/" className="group flex items-center gap-1 sm:gap-2 text-slate-600 hover:text-[#635BFF] transition-colors font-bold text-sm bg-white/50 px-2 sm:px-3 py-1.5 rounded-full border border-slate-200">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {/* Hide "Back" text on mobile to save space, show on sm screens and up */}
              <span className="hidden sm:inline">Back</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src={logoUrl} alt="Triozy Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl shadow-sm object-cover" />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#635BFF]">Triozy</span>
            </div>
          </div>
          
          <a 
            href="https://app.triozy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#635BFF] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#524be0] transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            Try on Web
          </a>
        </div>
      </nav>

      {/* 2. FULL TERMS CONTENT */}
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-slate-100">
          <header className="mb-12 border-b border-slate-100 pb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#635BFF] mb-4">Terms of Service</h1>
            <p className="text-lg text-slate-500 font-medium italic">Please read these terms carefully. Last updated: May 2026</p>
          </header>

          <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-100 text-[#635BFF] rounded-lg flex items-center justify-center text-sm">01</span>
                Acceptance of Terms
              </h2>
              <p>
                By downloading, accessing, or using the Triozy mobile application and website (collectively, the &quot;Platform&quot;), you explicitly agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions outlined here, you must immediately discontinue your use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-100 text-[#635BFF] rounded-lg flex items-center justify-center text-sm">02</span>
                Account Registration & Security
              </h2>
              <ul className="grid gap-4 mt-6">
                <li className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <strong className="text-slate-900 block mb-2">Accurate Information</strong>
                  <span className="text-slate-600 text-base">You agree to provide accurate, current, and complete information during registration and to keep your account profile updated to maintain your status on the Platform.</span>
                </li>
                <li className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <strong className="text-slate-900 block mb-2">Account Security</strong>
                  <span className="text-slate-600 text-base">You are solely responsible for safeguarding your login credentials and for all activities, messages, and actions that occur under your Triozy account.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-100 text-[#635BFF] rounded-lg flex items-center justify-center text-sm">03</span>
                Housing, Flatmates, and Listings
              </h2>
              <p className="mb-4">Triozy acts as a digital venue connecting people looking for housing, flatmates, and daily services. <strong>We do not own, manage, or operate any real estate.</strong></p>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li><strong>Accuracy of Listings:</strong> Users offering rooms, flats, or PGs are solely responsible for ensuring the accuracy, legality, and safety of their listings.</li>
                <li><strong>No Discrimination:</strong> Triozy strictly prohibits discrimination based on race, religion, gender, caste, sexual orientation, or disability. Violators will be permanently banned.</li>
                <li><strong>Transactions:</strong> Any agreements, leases, or financial transactions made between users (e.g., paying rent or a deposit) are strictly between the users. Triozy holds no liability for these transactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-100 text-[#635BFF] rounded-lg flex items-center justify-center text-sm">04</span>
                Marketplace and Services
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li><strong>Buying & Selling:</strong> Users may list second-hand furniture, appliances, or offer local services (like tiffins and maids). You agree not to list illegal, hazardous, or recalled items.</li>
                <li><strong>Disputes:</strong> Triozy provides the platform to connect buyers and sellers, but does not guarantee the quality, safety, or legality of the items or services offered. Users assume all risks associated with marketplace transactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-100 text-[#635BFF] rounded-lg flex items-center justify-center text-sm">05</span>
                User Content & Conduct
              </h2>
              <p className="mb-4">When you upload photos of your room, marketplace items, or profile pictures, you retain ownership of your content. However, you grant Triozy a non-exclusive license to display this content on the Platform.</p>
              <p className="mb-4 text-base font-bold text-slate-900">While using the Platform, you agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li>Harass, abuse, or harm another person, including sending spam through our in-app chat.</li>
                <li>Post false, misleading, or fraudulent listings.</li>
                <li>Attempt to scrape or extract data from the Platform without our explicit permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-100 text-[#635BFF] rounded-lg flex items-center justify-center text-sm">06</span>
                Limitation of Liability & Termination
              </h2>
              <p className="mb-4">
                Triozy is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. To the maximum extent permitted by law, Triozy shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the Platform or interactions with other users.
              </p>
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice, if you breach these Terms or engage in fraudulent activity.
              </p>
            </section>

            <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 mt-12">
              <h2 className="text-2xl font-bold text-[#635BFF] mb-4">Contact Us</h2>
              <p className="mb-4 text-base">If you have any questions about these Terms of Service or need to report a violation, please contact our legal and support team:</p>
              <a href="mailto:triozyapp@gmail.com" className="flex items-center gap-3 text-[#635BFF] hover:underline font-bold text-xl">
                <Mail size={24} /> triozyapp@gmail.com
              </a>
            </section>
          </div>
        </div>
      </main>

      {/* 3. THEMED FOOTER */}
      <footer className="bg-[#2A2675] text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to move smarter?</h2>
            <p className="text-[#E5E0FF] mb-10 text-xl max-w-xl mx-auto">
              Join thousands who are already finding rooms, matching with flatmates, and setting up their homes on Triozy.
            </p>
            <a 
              href={playStoreLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/playstore_icon.png"
                alt="Get it on Google Play"
                width={646}
                height={250}
                className="h-20 sm:h-24 w-auto hover:scale-[1.02] transition-transform shadow-2xl"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-12 border-t border-white/10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image src={logoUrl} alt="Triozy" width={48} height={48} className="w-12 h-12 rounded-xl shadow-lg border-2 border-white/10 object-cover" />
                <span className="text-2xl font-extrabold tracking-tight text-white">Triozy</span>
              </div>
              <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                Your smart moving network. Find housing, connect with flatmates, and discover maids, tiffins, and essentials—all in one flow.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#635BFF] transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/triozy/" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#635BFF] transition-colors">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Platform</h4>
              <ul className="space-y-4 text-white/70 font-medium">
                <li><Link href="/#features" className="hover:text-white transition-colors">Find a PG/Room</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Find Flatmates</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Maids & Tiffins</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support & Legal</h4>
              <ul className="space-y-4 text-white/70 font-medium">
                <li>
                  <a href="mailto:triozyapp@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} /> triozyapp@gmail.com
                  </a>
                </li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
             <p className="text-white/50 text-sm font-medium">© 2026 Triozy. Built for modern city moves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}