import React from "react";
import { 
  ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp, 
  MapPin, Lightbulb, ShieldCheck, ListOrdered, Globe
} from "lucide-react";

// 1. DYNAMIC SEO METADATA
export const metadata = {
  title: "How to Find Broker-Free PGs & Flats in Indore in 2026",
  description: "A complete, step-by-step guide to finding affordable PGs and flats in Indore without paying heavy brokerage fees. Updated for 2026.",
  keywords: "Broker free PG in Indore, Flats in Indore without broker, How to find flats in Indore 2026, PG in Bhawarkua, Flats in Vijay Nagar, flatmates in Indore",
  openGraph: {
    title: "How to Find Broker-Free PGs & Flats in Indore in 2026",
    description: "Your simple, everyday guide to bypassing brokers and avoiding rental scams in Indore.",
    type: "article",
  }
};

export default function BlogPost() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.triozy.triozy_app";
  const webAppLink = "https://app.triozy.com/";
  const logoUrl = "/triozy_logo.png";
  
  // Free, high-quality images from Unsplash
  const heroImg = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80";
  const neighborhoodImg = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80";

  // Invisible code for Google Search
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Find Broker-Free PGs and Flats in Indore in 2026",
    "description": "A complete, step-by-step guide to finding affordable PGs and flats in Indore without paying heavy brokerage fees.",
    "publisher": {
      "@type": "Organization",
      "name": "Triozy App"
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#E5E0FF] selection:text-[#635BFF]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }} />

      {/* SHARED NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#EAE8FF]/90 backdrop-blur-xl border-b border-[#635BFF]/15">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src={logoUrl} alt="Triozy Logo" className="w-10 h-10 rounded-xl shadow-sm object-cover group-hover:shadow-md transition-all" />
            <span className="text-2xl font-extrabold tracking-tight text-[#635BFF]">Triozy</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#635BFF] transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </a>
            <a href={webAppLink} target="_blank" rel="noopener noreferrer" className="bg-[#635BFF] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#524be0] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Open App
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-b from-[#EAE8FF] to-[#f8fafc]">
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#635BFF]/10 blur-[120px] -z-10 rounded-full" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#635BFF] font-bold text-xs uppercase tracking-widest mb-6 shadow-sm border border-[#635BFF]/20">
            <span>Indore Relocation Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-none mb-8 tracking-tight">
            How to Find Broker-<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#8A78FF] block mt-2">
              Free PGs & Flats in Indore
            </span>
          </h1>
          <p className="text-xl font-bold text-slate-700 mb-8">Updated for 2026</p>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Moving to Indore is exciting, but handing over a full month's rent to a broker just to get the keys to your flat is frustrating. Here is exactly how to find a great place on your own.
          </p>

          <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
            <img src={heroImg} alt="A clean, simple student flat setup" className="w-full h-[300px] md:h-[400px] object-cover rounded-[1.7rem]" />
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        
        {/* TABLE OF CONTENTS */}
        <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ListOrdered size={18} className="text-[#635BFF]" /> What we will cover:
          </h2>
          <nav className="grid sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-600">
            <a href="#rent-trends" className="hover:text-[#635BFF] transition-colors flex items-center gap-2">• 1. Current Rent Prices in Indore</a>
            <a href="#bypassing-brokers" className="hover:text-[#635BFF] transition-colors flex items-center gap-2">• 2. How to Skip the Brokers</a>
            <a href="#scams-to-avoid" className="hover:text-[#635BFF] transition-colors flex items-center gap-2">• 3. Common Rental Scams</a>
            <a href="#negotiation-tips" className="hover:text-[#635BFF] transition-colors flex items-center gap-2">• 4. Tips for Talking to Owners</a>
          </nav>
        </section>

        <div className="prose prose-lg prose-slate max-w-none text-lg text-slate-600 leading-relaxed mb-12">
          <p>
            Whether you are a student shifting near campus areas like IIT or IIM Indore, or a working professional moving to tech zones near Vijay Nagar, finding a good place to live is your first big task. The main problem? Many online property listings are posted by brokers pretending to be owners. Once you like the flat, they suddenly ask for a massive commission fee. 
          </p>
          <p>
            This guide will show you the exact steps you can take to find safe, affordable, and completely broker-free housing in Indore this year.
          </p>
        </div>

        {/* 1. RENT TRENDS */}
        <h2 id="rent-trends" className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-slate-900 scroll-mt-24">
          <div className="p-3 bg-[#EAE8FF] rounded-xl text-[#635BFF]"><TrendingUp size={24}/></div>
          1. Current Rent Prices in Indore (2026)
        </h2>
        <p className="text-lg text-slate-600 mb-6">Before you start talking to landlords, you need to know the actual market prices. This stops people from overcharging you.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-bold text-xl text-slate-900 mb-1">Bhawarkua & Geeta Bhawan</h3>
            <p className="text-xs font-bold text-[#635BFF] bg-[#EAE8FF] inline-block px-2.5 py-0.5 rounded-md mb-4">Student Hub</p>
            <p className="text-slate-600 text-sm leading-relaxed">This area is packed with coaching institutes. A decent sharing PG here usually costs between <strong className="text-slate-800">₹5,000 to ₹8,000</strong> per month, and that often includes daily meals.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-bold text-xl text-slate-900 mb-1">Vijay Nagar & Nipania</h3>
            <p className="text-xs font-bold text-emerald-600 bg-emerald-50 inline-block px-2.5 py-0.5 rounded-md mb-4">IT & Professional Hub</p>
            <p className="text-slate-600 text-sm leading-relaxed">This is the more premium side of the city. A good single room in a PG will cost around <strong className="text-slate-800">₹8,000 to ₹12,000</strong>. Full 2BHK flats here go for ₹15,000 to ₹22,000.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-bold text-xl text-slate-900 mb-1">Palasia</h3>
            <p className="text-xs font-bold text-rose-600 bg-rose-50 inline-block px-2.5 py-0.5 rounded-md mb-4">The Central Vibe</p>
            <p className="text-slate-600 text-sm leading-relaxed">A great middle-ground area with lots of cafes. The rent here is slightly lower than Vijay Nagar, making it perfect for young working professionals.</p>
          </div>
        </div>

        {/* 2. BYPASSING BROKERS */}
        <h2 id="bypassing-brokers" className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-slate-900 scroll-mt-24">
          <div className="p-3 bg-[#EAE8FF] rounded-xl text-[#635BFF]"><Lightbulb size={24}/></div>
          2. How to Skip the Brokers
        </h2>
        <div className="space-y-6 mb-12">
          <div className="flex gap-4 p-6 bg-white rounded-2xl border-l-4 border-l-[#635BFF] shadow-sm">
            <ShieldCheck className="text-[#635BFF] shrink-0 mt-1" size={24}/>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Look for "Flatmate Replacements"</h3>
              <p className="text-slate-600 leading-relaxed">
                Go to Facebook and search for groups like <em>"Flat and Flatmates Indore"</em>. People who are moving out of their flats will post here looking for someone to take their room. Because you are talking directly to the tenant leaving, there is zero broker fee involved.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 p-6 bg-white rounded-2xl border-l-4 border-l-[#635BFF] shadow-sm">
            <MapPin className="text-[#635BFF] shrink-0 mt-1" size={24}/>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Classic "Walk and Search" Method</h3>
              <p className="text-slate-600 leading-relaxed">
                It sounds old-fashioned, but it works. Take an auto to the specific neighborhood you want to live in and walk down the residential streets. Look for handwritten "To-Let" signs hanging on gates. The phone numbers on these boards usually belong straight to the actual house owner.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden mb-12 border border-slate-200 p-2 bg-white">
          <img src={neighborhoodImg} alt="Quiet residential street suitable for renting" className="w-full h-[250px] object-cover rounded-[1.7rem]" />
        </div>

        {/* 3. SCAMS */}
        <h2 id="scams-to-avoid" className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-slate-900 scroll-mt-24">
          <div className="p-3 bg-rose-100 rounded-xl text-rose-500"><AlertTriangle size={24}/></div>
          3. Common Rental Scams to Watch For
        </h2>
        <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 mb-12">
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 text-sm">1</div>
              <div>
                <strong className="text-slate-900 block text-lg">The "Visiting Pass" Scam</strong>
                <span className="text-slate-600">If you call a number and the person asks you to send ₹500 on PhonePe or Google Pay just to "book a visit" to see the flat, cut the call. Real owners will never ask for money just to show you their property.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 text-sm">2</div>
              <div>
                <strong className="text-slate-900 block text-lg">The Hidden Bills Trick</strong>
                <span className="text-slate-600">A landlord might tell you the rent is only ₹6,000. But what they don't tell you is that electricity, water, Wi-Fi, and washing machine usage are billed separately. Always ask for the final, total price before agreeing to anything.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* 4. NEGOTIATION */}
        <h2 id="negotiation-tips" className="text-3xl font-extrabold mb-12 flex items-center gap-3 text-slate-900 scroll-mt-24">
          <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600"><CheckCircle2 size={24}/></div>
          4. Tips for Talking to Owners
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <strong className="text-slate-900 block mb-2">Talk About Your Routine</strong>
            <p className="text-slate-600 text-sm">Tell them if you have a busy job or study schedule. Owners often drop the rent slightly if they trust that you are a serious person who won't cause noise or trouble in the building.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <strong className="text-slate-900 block mb-2">Offer to Stay Longer</strong>
            <p className="text-slate-600 text-sm">If you know you are going to be in Indore for a full year or more, tell them! Offer to sign a 12-month agreement. Landlords hate empty rooms, so they will usually lower the rent for a long-term tenant.</p>
          </div>
        </div>

        {/* PREMIUM VISUAL CONVERSIVE CALL-TO-ACTION (Restored) */}
        <div className="bg-gradient-to-br from-[#635BFF] to-[#4039A3] rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl relative overflow-hidden mt-8">
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">
            Skip the manual hunt entirely.
          </h2>
          <p className="text-[#E5E0FF] text-lg mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            If you are actively organizing a move to Indore and prefer to bypass unverified chat groups, outdated lists, and heavy broker fees, explore our dedicated network.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all">
               <img src="/playstore_icon.png" alt="Download Triozy from Google Play" className="h-16 w-auto drop-shadow-md" />
            </a>
            <span className="text-[#E5E0FF] font-medium hidden sm:inline">or</span>
            <a href={webAppLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-[#635BFF] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-md hover:-translate-y-0.5">
              <Globe size={20} /> Try on Web
            </a>
          </div>
        </div>

      </main>

      {/* SHARED FULL FOOTER (Restored) */}
      <footer className="bg-[#2A2675] text-white pt-16 pb-10 mt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-t border-white/10 pt-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoUrl} alt="Triozy Logo" className="w-10 h-10 rounded-xl shadow-lg border-2 border-white/10 object-cover" />
                <span className="text-2xl font-extrabold tracking-tight text-white">Triozy</span>
              </div>
              <p className="text-white/70 max-w-sm text-sm leading-relaxed">
                Indore's smart moving network. Find housing, connect with flatmates, and discover local essentials - all in one flow.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Application</h4>
              <ul className="space-y-3 text-white/70 text-sm font-medium">
                <li><a href={webAppLink} className="hover:text-white transition-colors">Find a Flat</a></li>
                <li><a href={webAppLink} className="hover:text-white transition-colors">Find Flatmates</a></li>
                <li><a href={webAppLink} className="hover:text-white transition-colors">Buy Essentials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Contact & Legal</h4>
              <ul className="space-y-3 text-white/70 text-sm font-medium">
                <li><a href="mailto:triozyapp@gmail.com" className="hover:text-white transition-colors">Help Desk</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-white/10 text-white/40 text-xs font-medium">
             © 2026 Triozy. All rights reserved. Built for modern city moves.
          </div>
        </div>
      </footer>
    </div>
  );
}