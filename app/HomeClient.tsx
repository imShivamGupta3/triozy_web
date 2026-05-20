"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Home, Users, ShoppingBag, 
  ChevronDown, MessageSquareText, CheckCircle, ArrowRight,
  Mail, ShieldCheck, Utensils, Search, CheckCircle2, HeartHandshake, Zap, Sparkles, MapPin
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TriozyLandingPagePro() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const playStoreLink = "https://play.google.com/store/apps/details?id=com.triozy.triozy_app";
  const webAppLink = "https://app.triozy.com/";
  
  // Local Image Paths 
  const logoUrl = "/triozy_logo.png";
  const heroImage = "/Main_SS.webp";
  const bannerImage = "/Banner.webp";
  const galleryImages = [
    "/SS_2.webp",
    "/SS_3.webp",
    "/SS_4.webp",
    "/SS_5.webp",
    "/SS_6.webp",
    "/SS_7.webp",
  ];

  const faqs = [
    {
      question: "What exactly can I find on Triozy?",
      answer: "Triozy is your all-in-one moving companion. You can find verified PGs, rooms for rent, broker-free flats, compatible flatmates, and a marketplace for daily essentials like used furniture, appliances, maids, and tiffin services."
    },
    {
      question: "How do you ensure the housing listings are genuine?",
      answer: "Safety is our priority. Sellers and owners on Triozy are verified, and you can view their profiles and community history before making any rental commitments."
    },
    {
      question: "Can I sell my old furniture when I move out?",
      answer: "Absolutely. Our marketplace feature lets you list your move-out essentials so incoming renters in your neighborhood can buy used furniture locally and affordably."
    },
    {
      question: "How does the flatmate finder work?",
      answer: "We help you find your vibe. You can browse detailed profiles of people looking for flatmates near you, matching based on lifestyle, habits, and housing preferences."
    },
    {
      question: "Do I have to share my personal phone number?",
      answer: "No. You have full privacy. Use our secure in-app chat to talk directly with verified owners, sellers, or future roommates without sharing your number."
    },
    {
      question: "Is there a fee to use the Triozy app?",
      answer: "Downloading the Triozy app and browsing listings is completely free. We designed it to reduce the friction and broker hassle usually associated with moving."
    },
    {
      question: "Can I find daily services like Maids and Tiffins?",
      answer: "Yes! Settling in isn't just about the room. You can discover and book trusted local services like tiffins, home cleaning, and maids directly within the app."
    },
    {
      question: "Is Triozy available in my city?",
      answer: "We are rapidly expanding across major urban hubs to help students and professionals relocate effortlessly. Download the app to see the active broker-free flats and rooms in your area."
    }
  ];

  // SEO Schema Markup Generation
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Triozy",
        "url": "https://triozy.com",
        "logo": "https://triozy.com/triozy_logo.png",
        "description": "Find broker-free flats, flatmates and local services",
        "sameAs": [
          "https://www.instagram.com/triozy.app/",
          "https://www.linkedin.com/company/triozy/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Triozy",
        "url": "https://triozy.com",
        "areaServed": "Indore",
        "serviceType": [
          "Flats",
          "PG",
          "Flatmates",
          "Maids",
          "Tiffin Services",
          "Marketplace"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Triozy",
        "url": "https://triozy.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://triozy.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Triozy App",
        "operatingSystem": "ANDROID",
        "applicationCategory": "LifestyleApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#E5E0FF] selection:text-[#635BFF]">
      {/* INJECT SCHEMA FOR GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
      
      {/* 2. DYNAMIC HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#F0EEFF]">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#635BFF]/15 blur-[100px] -z-10 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#635BFF] font-bold text-sm mb-6 shadow-sm border border-[#635BFF]/20"
            >
              <ShieldCheck size={16} />
              <span>Broker Free Flats & PGs</span>
            </motion.div>
            
            {/* SEO Optimized H1 Header */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
              <span className="block text-xl text-[#635BFF] font-bold mb-4 tracking-normal">Verified Housing & Flatmate Finder</span>
              Find Broker-Free Flats, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#8A78FF]">
                Flatmates & Local Services
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Find verified rooms, PGs, roommates, maids, tiffin services and local marketplace listings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={playStoreLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image 
                  src="/playstore_icon.png" 
                  alt="Download Triozy App on Google Play" 
                  width={150}
                  height={45}
                  className="h-20 sm:h-24 w-auto hover:scale-[1.02] transition-transform drop-shadow-md"
                />
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
              <div className="flex -space-x-3">
                <Image src={galleryImages[0]} alt="Triozy user profile" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-200" />
                <Image src={galleryImages[1]} alt="Triozy verified user" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-300" />
                <Image src={galleryImages[2]} alt="Triozy community member" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-400" />
              </div>
              <p>Join thousands streamlining their next move</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative mx-auto w-full max-w-[320px] lg:max-w-none perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#635BFF]/20 blur-3xl rounded-full animate-pulse"></div>
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-[320px] lg:ml-auto relative z-10"
            >
              <Image 
                src={heroImage} 
                alt="Triozy App interface for finding rooms for rent and flatmates" 
                width={320}
                height={700}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 80vw, 320px"
                quality={80}
                className="w-full h-auto rounded-[2.5rem] border-[8px] border-white shadow-[0_30px_60px_rgba(99,91,255,0.2)] ring-1 ring-slate-100"
                decoding="async" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFINITE TICKER */}
      <div className="border-y border-[#635BFF]/10 bg-white py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-12 items-center text-[#635BFF]/40 font-bold text-xl uppercase tracking-widest"
        >
          <span>Rooms for Rent</span> • <span>Find Flatmates Near Me</span> • <span>Buy Used Furniture</span> • <span>Home Appliances</span> • <span>Tiffin Services</span> • <span>PG Near Me</span> • <span>Broker Free Flats</span> • <span>Find Flatmates</span>
        </motion.div>
      </div>

      {/* 3. BANNER SECTION - With 6 Floating Badges */}
      <section className="bg-[#f8fafc] py-24 relative overflow-hidden z-10">
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 bg-rose-400/10 blur-[100px] rounded-full" />
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative">
          
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="hidden lg:flex absolute -left-16 top-[15%] bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2 z-20">
            <CheckCircle2 size={20} className="text-green-500" />
            <span className="font-bold text-slate-700 text-sm">100% Verified</span>
          </motion.div>

          <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="hidden lg:flex absolute -left-4 top-[50%] bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2 z-20">
            <HeartHandshake size={20} className="text-rose-500" />
            <span className="font-bold text-slate-700 text-sm">Connect with Ease</span>
          </motion.div>

          <motion.div animate={{ y: [-5, 15, -5] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }} className="hidden lg:flex absolute -left-12 bottom-[15%] bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2 z-20">
            <Sparkles size={20} className="text-amber-500" />
            <span className="font-bold text-slate-700 text-sm">Best Deals</span>
          </motion.div>

          <motion.div animate={{ y: [15, -5, 15] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }} className="hidden lg:flex absolute -right-16 top-[15%] bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2 z-20">
            <Zap size={20} className="text-sky-500" />
            <span className="font-bold text-slate-700 text-sm">Zero Hassle</span>
          </motion.div>

          <motion.div animate={{ y: [-15, 5, -15] }} transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }} className="hidden lg:flex absolute -right-6 top-[50%] bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2 z-20">
            <ShieldCheck size={20} className="text-[#635BFF]" />
            <span className="font-bold text-slate-700 text-sm">Secure Chat</span>
          </motion.div>

          <motion.div animate={{ y: [5, -15, 5] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }} className="hidden lg:flex absolute -right-12 bottom-[15%] bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2 z-20">
            <Users size={20} className="text-emerald-500" />
            <span className="font-bold text-slate-700 text-sm">Trusted Community</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(99,91,255,0.15)] bg-white border-[10px] border-white ring-1 ring-slate-100 mx-auto max-w-5xl relative z-10"
          >
            <Image 
              src={bannerImage} 
              alt="Triozy ecosystem showing housing, flatmates and marketplace features" 
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. 2x2 FEATURES GRID */}
      <section id="features" className="pb-24 pt-10 max-w-7xl mx-auto px-6 bg-[#f8fafc]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#635BFF] mb-6">Everything you need for your place.</h2>
          <p className="text-lg text-slate-600">Why juggle five different apps to move? Triozy brings your entire housing and settling-in journey into one perfectly organized flow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a href={webAppLink} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-xl hover:border-rose-100 transition-all duration-300 group cursor-pointer block">
            <div className="w-16 h-16 bg-rose-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Home size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Find Rooms & PGs</h3>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Browse verified listings for PGs, flats, and rooms for rent. Skip the endless searching and connect directly with trusted owners for broker free flats.</p>
            <span className="text-rose-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Explore Housing <ArrowRight size={18}/></span>
          </a>

          <a href={webAppLink} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-xl hover:border-sky-100 transition-all duration-300 group cursor-pointer block">
            <div className="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Find Flatmates Near You</h3>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Looking for a vibe check? Find compatible flatmates based on your lifestyle, habits, and preferences effortlessly.</p>
            <span className="text-sky-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Find Flatmates <ArrowRight size={18}/></span>
          </a>

          <a href={webAppLink} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group cursor-pointer block">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <ShoppingBag size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Buy Used Furniture</h3>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Buy and sell move-in essentials locally—from used furniture to appliances. Perfect for getting your new place set up affordably.</p>
            <span className="text-emerald-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Shop Essentials <ArrowRight size={18}/></span>
          </a>

          <a href={webAppLink} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-xl hover:border-amber-100 transition-all duration-300 group cursor-pointer block">
            <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Utensils size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Daily Services</h3>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">Settling in means eating well and keeping it clean. Discover and connect with trusted local maids, tiffins, and home services.</p>
            <span className="text-amber-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Find Services <ArrowRight size={18}/></span>
          </a>
        </div>
      </section>

      {/* NEIGHBORHOOD GUIDES & SEARCHES - SEO Boost */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="text-rose-500" /> Neighborhood Guides
            </h2>
            <div className="flex flex-col gap-4 text-lg text-[#635BFF] font-semibold">
              <Link href="/indore/vijay-nagar" className="hover:underline transition-all">Vijay Nagar Guide</Link>
              <Link href="/indore/bhawarkuan" className="hover:underline transition-all">Bhawarkuan Guide</Link>
              <Link href="/indore/super-corridor" className="hover:underline transition-all">Super Corridor Guide</Link>
              <Link href="/indore/scheme-54" className="hover:underline transition-all">Scheme 54 Guide</Link>
              <Link href="/blog/best-areas-to-live-in-indore" className="hover:underline transition-all">Best Areas in Indore</Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
              <Search className="text-sky-500" /> Popular Searches
            </h2>
            <div className="flex flex-col gap-4 text-lg text-slate-700 font-semibold">
              <Link href="/blog/how-to-find-maids-in-indore" className="hover:text-[#635BFF] transition-all">How to Find Maids</Link>
              <Link href="/blog/best-tiffin-services-in-indore" className="hover:text-[#635BFF] transition-all">Best Tiffin Services</Link>
              <Link href="/blog/buy-and-sell-used-furniture-in-indore" className="hover:text-[#635BFF] transition-all">Used Furniture Guide</Link>
              <Link href="/blog/how-to-find-flatmates-in-indore" className="hover:text-[#635BFF] transition-all">Flatmates in Indore</Link>
              <Link href="/blog/safe-areas-for-girls-in-indore" className="hover:text-[#635BFF] transition-all">Safe Areas for Girls</Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#635BFF] to-[#4039A3] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">From searching to <br/><span className="text-[#E5E0FF]">settling in 3 steps.</span></h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 group cursor-default">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white text-[#635BFF] flex items-center justify-center font-bold text-2xl shadow-lg transition-colors duration-300 group-hover:bg-rose-500 group-hover:text-white">1</div>
                  <div className="w-0.5 h-full bg-white/20 mt-4"></div>
                </div>
                <div className="pb-4">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">Explore & Filter <Search size={20} className="text-rose-400" /></h3>
                  <p className="text-white/80 text-lg leading-relaxed">Browse verified rooms, find compatible flatmates, or discover daily essentials in your new city.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group cursor-default">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white text-[#635BFF] flex items-center justify-center font-bold text-2xl shadow-lg transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">2</div>
                  <div className="w-0.5 h-full bg-white/20 mt-4"></div>
                </div>
                <div className="pb-4">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">Connect & Chat <MessageSquareText size={20} className="text-sky-400" /></h3>
                  <p className="text-white/80 text-lg leading-relaxed">Use our secure in-app chat to talk directly with verified owners, sellers, or future roommates.</p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white text-[#635BFF] flex items-center justify-center font-bold text-2xl shadow-lg transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">3</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">Move In & Settle <CheckCircle size={20} className="text-emerald-400" /></h3>
                  <p className="text-white/80 text-lg leading-relaxed">Finalize your place, grab your essentials from the marketplace, and start living comfortably from day one.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[650px] hidden md:block perspective-1000">
            <div className="absolute top-0 right-0 w-[260px] z-10 rotate-6 transition-transform hover:scale-105">
              <Image src={galleryImages[0]} width={260} height={500} className="w-full h-auto rounded-[2.5rem] border-[8px] border-white ring-1 ring-slate-800 shadow-2xl" alt="Triozy room rental search interface" />
            </div>
            <div className="absolute top-20 left-0 w-[260px] z-20 -rotate-3 transition-transform hover:scale-105">
               <Image src={galleryImages[1]} width={260} height={500} className="w-full h-auto rounded-[2.5rem] border-[8px] border-white ring-1 ring-slate-800 shadow-2xl" alt="Triozy secure flatmate chat screen" />
            </div>
            <div className="absolute bottom-[-60px] right-30 w-[260px] z-30 rotate-2 transition-transform hover:scale-105">
               <Image src={galleryImages[2]} width={260} height={500} className="w-full h-auto rounded-[2.5rem] border-[8px] border-white ring-1 ring-slate-800 shadow-2xl" alt="Triozy local marketplace for buying essentials" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SMOOTH SCROLL GALLERY */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#635BFF]">A seamless experience.</h2>
          <p className="text-lg text-slate-600 mt-4">Designed cleanly to reduce friction during your relocation.</p>
        </div>
        
        <div className="flex overflow-x-auto gap-10 px-6 pb-12 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              className="snap-center shrink-0 w-[260px] md:w-[300px]"
            >
              <div className="rounded-[2.5rem] border-[12px] border-white shadow-2xl shadow-[#635BFF]/20 ring-1 ring-slate-200 overflow-hidden bg-white">
                <Image 
                  src={src} 
                  alt={`Triozy app screenshot highlighting app feature ${index + 1}`} 
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#f8fafc] border-t border-[#635BFF]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#635BFF] mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about housing, flatmates, and the marketplace. Can&apos;t find the answer? Reach out to our support team.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-[#635BFF]/10 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-6 flex items-start justify-between bg-white text-left"
                  >
                    <span className="font-bold text-lg text-[#635BFF] pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`text-slate-400 transition-transform duration-300 flex-shrink-0 mt-1 ${openFaq === index ? "rotate-180" : ""}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-slate-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.slice(4, 8).map((faq, idx) => {
                const globalIndex = idx + 4;
                return (
                  <div 
                    key={globalIndex} 
                    className="border border-[#635BFF]/10 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                      className="w-full px-6 py-6 flex items-start justify-between bg-white text-left"
                    >
                      <span className="font-bold text-lg text-[#635BFF] pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`text-slate-400 transition-transform duration-300 flex-shrink-0 mt-1 ${openFaq === globalIndex ? "rotate-180" : ""}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === globalIndex && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6 text-slate-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

            {/* 9. POPULAR AREAS & POPULAR SEARCHES (SEO SECTION) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Popular Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-4">Popular Areas in Indore</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link href="/indore/bhawarkuan" className="text-slate-600 hover:text-[#635BFF] transition-colors flex items-center gap-2">
                  <MapPin size={16} className="text-[#635BFF]/60"/> Bhawarkuan
                </Link>
              </li>
              <li>
                <Link href="/indore/vijay-nagar" className="text-slate-600 hover:text-[#635BFF] transition-colors flex items-center gap-2">
                  <MapPin size={16} className="text-[#635BFF]/60"/> Vijay Nagar
                </Link>
              </li>
              <li>
                <Link href="/indore/scheme-54" className="text-slate-600 hover:text-[#635BFF] transition-colors flex items-center gap-2">
                  <MapPin size={16} className="text-[#635BFF]/60"/> Scheme 54
                </Link>
              </li>
              <li>
                <Link href="/indore/super-corridor" className="text-slate-600 hover:text-[#635BFF] transition-colors flex items-center gap-2">
                  <MapPin size={16} className="text-[#635BFF]/60"/> Super Corridor
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-4">Popular Searches & Resources</h3>
            <ul className="grid grid-cols-1 gap-4">
              <li>
                <Link href="/blog/best-areas-to-live-in-indore" className="text-slate-600 hover:text-[#635BFF] transition-colors">
                  Top 10 Best Areas to Live in Indore for Students & Professionals
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-find-flatmates-in-indore" className="text-slate-600 hover:text-[#635BFF] transition-colors">
                  The Ultimate Guide to Finding Flatmates in Indore
                </Link>
              </li>
              <li>
                <Link href="/blog/cost-of-living-in-indore" className="text-slate-600 hover:text-[#635BFF] transition-colors">
                  Cost of Living in Indore: A Complete Breakdown (2024)
                </Link>
              </li>
              <li>
                <Link href="/blog/best-tiffin-services-in-indore" className="text-slate-600 hover:text-[#635BFF] transition-colors">
                  5 Best Tiffin Services in Indore for Home-Cooked Food
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#635BFF] font-semibold hover:underline inline-flex items-center gap-1 mt-2">
                  View All Resources <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FOOTER WITH INTERNAL CITY LINKS */}
      <footer className="bg-[#2A2675] text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="bg-slate-900/40 p-8 md:p-12 text-center rounded-[2.5rem] mb-24 border border-white/10">
            <h2 className="text-3xl font-bold mb-4 text-white">About Triozy</h2>
            <p className="text-[#E5E0FF] text-lg max-w-3xl mx-auto leading-relaxed">
              Triozy helps students and professionals find broker-free housing, verified rooms, compatible flatmates, and local services seamlessly. Moving to a new city is hard—we make it effortless.
            </p>
          </div>

          <div className="text-center mb-16">
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
                width={150}
                height={45}
                className="h-20 sm:h-24 w-auto hover:scale-[1.02] transition-transform drop-shadow-2xl"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pt-12 border-t border-white/10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image src={logoUrl} alt="Triozy" width={48} height={48} className="w-12 h-12 rounded-xl shadow-lg border-2 border-white/10 object-cover" />
                <span className="text-2xl font-extrabold tracking-tight text-white">Triozy</span>
              </div>
              <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                Your smart moving network. Find housing, connect with flatmates, and discover maids, tiffins, and essentials - all in one flow.
              </p>
              <div className="flex gap-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/triozy.app/" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#635BFF] transition-colors">
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
                <li><a href="#features" className="hover:text-white transition-colors">Find a PG/Room</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Find Flatmates</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Marketplace</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Maids & Tiffins</a></li>
              </ul>
            </div>

            {/* Popular Cities Links Added for SEO Routing */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Popular Cities</h4>
              <ul className="space-y-4 text-white/70 font-medium">
                <li><a href={webAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rooms in Bangalore</a></li>
                <li><a href={webAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PG in Pune</a></li>
                <li><a href={webAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Flats in Mumbai</a></li>
                <li><a href={webAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rooms in Delhi</a></li>
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
