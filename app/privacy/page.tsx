"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Mail
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function PrivacyPolicy() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.triozy.triozy_app";
  const logoUrl = "/triozy_logo.png";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#E5E0FF] selection:text-[#635BFF]">
      
      {/* 1. STICKY NAVBAR (Responsive Fix Applied) */}
      <nav className="fixed w-full top-0 z-50 bg-[#EAE8FF]/90 backdrop-blur-xl border-b border-[#635BFF]/15 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-6 shrink-0">
              {/* Back to Home Button */}
            <Link href="/" className="group flex items-center gap-1 sm:gap-2 text-slate-600 hover:text-[#635BFF] transition-colors font-bold text-sm bg-white/50 px-2 sm:px-3 py-1.5 rounded-full border border-slate-200">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
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

      {/* 2. FULL PRIVACY CONTENT  */}
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
          <h1 className="text-4xl font-extrabold text-[#635BFF] mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-10 font-medium">Last updated: May 2026</p>

          <div className="space-y-10 text-slate-700 leading-relaxed">
            
            <section>
              <p>
                Welcome to Triozy. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &quot;Platform&quot;).
              </p>
              <p className="mt-4">
                By accessing or using Triozy, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect information to provide better services to all our users, ranging from basic account details to data that helps us match you with the right flatmates or housing.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and profile picture when you register.</li>
                <li><strong>Profile and Matching Data:</strong> Information you voluntarily provide to help us find flatmates or housing, such as lifestyle habits, dietary preferences, budget, and occupation.</li>
                <li><strong>Listings and Content:</strong> Details about the rooms, PGs, flats, or marketplace items you list, including photos and descriptions.</li>
                <li><strong>Communications:</strong> Messages sent via our secure in-app chat feature between users.</li>
                <li><strong>Location Information:</strong> We may collect your precise or approximate location to show you relevant local listings, services (like maids or tiffins), and potential flatmates near you.</li>
                <li><strong>Device and Usage Data:</strong> IP address, device type, operating system, and how you interact with our Platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Triozy uses the collected data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our Platform.</li>
                <li>To facilitate flatmate matching and display relevant housing or marketplace listings based on your preferences and location.</li>
                <li>To verify accounts and listings to maintain a secure and trusted community.</li>
                <li>To enable user-to-user communication through our secure in-app chat without exposing personal contact details unnecessarily.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To send administrative information, such as updates, security alerts, and support messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Share Your Information</h2>
              <p className="mb-4">We do not sell your personal information to third parties. We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Other Users:</strong> When you create a profile, post a listing, or interact in the marketplace, other users will see your public profile information (e.g., first name, profile picture, public preferences).</li>
                <li><strong>With Service Providers:</strong> We may share data with trusted third-party vendors who assist us in operating our Platform (e.g., cloud hosting, SMS verification, customer support tools).</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights and Choices</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request that we correct or update your personal data.</li>
                <li>Request that we delete your personal data or your account entirely.</li>
                <li>Opt-out of receiving promotional communications from us.</li>
              </ul>
              <p className="mt-4">You can manage your profile and listing details directly within the Triozy app. To request account deletion, please contact our support team.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                <a href="mailto:triozyapp@gmail.com" className="flex items-center gap-3 text-[#635BFF] hover:underline font-bold text-xl">
                  <Mail size={24} /> triozyapp@gmail.com
                </a>
                <p className="mt-3 text-slate-500 text-sm">Our support team generally responds within 24-48 hours.</p>
              </div>
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