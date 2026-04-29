"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, FileText, Users, Download, Star, 
  ChevronDown, PhoneCall, CheckCircle, ArrowRight,
  Mail
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TriozyLandingPagePro() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const playStoreLink = "https://play.google.com/store/apps/details?id=com.triozy.triozy_app";
  const logoUrl = "https://play-lh.googleusercontent.com/27IjKbcf4HjCuMgfIEPuybWBwyDJWWBIqMkfJJ6BPBXPdherj5nT5Hdr6frwQ7CP7VJ-u17DmgGESyFZ21XD8Q=w480-h960-rw";
  const heroImage = "https://play-lh.googleusercontent.com/nxiSNlkoRsIDG4RQhQQhtQr5FwOTAcj51JrLiybkilP0V9X_QTICkM3YlIXeM0k70N5h_cLRUaLWvPmHrcn4Cg=w5120-h2880-rw";
  const galleryImages = [
    "https://play-lh.googleusercontent.com/n7gGfTNJMqb6khyBc_mlJzQ6AvqtvmQFIDtg7f8xyk4wFS2S8LGQ_nxIQy3243fIv0L6Lp4-Az3Qu1AeWawntVQ=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/xSz0rqbAEwHqkADFY7Ej5aHZsUennagxKomeON3Y6Xju9u9uOHBMfBcGYfxgJcP-s7HpXpTz2xToKwPQCXEX=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/HI-a8rkPwS4Xc4gg1Hu_mpzLKWdJoR0d6A85J3-SduRS0FRRzDZl9quDluP4XeUpElP5mke9kTHCRKfI6euDHA=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/SEd0JoEbBdTjELlavbXiPVuy33B9zjWx9ceUAc9FXOiseVu0MhzGSumRjSuSgXMY8jP2kyAibdBpdBGS1wVEuKk=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/M8xN6Z3FxbsuvvjuREXWZ0-1Dn484V7vsEcHAg6qkFOxSVzMPHOtjinC9xhNwVKwTeLFndKaslHaN63zxQw=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/nOQ2Oz6kbrPoCwTD-0N33HL2k0fyS-guLfQSx83ZQgjbYuTeEAGSZTiIrwDz3epQ8mUUdA1pZcFvbfZ-XUzs=w5120-h2880-rw",
  ];

  const faqs = [
    {
      question: "Is Triozy completely free to use?",
      answer: "Yes! Downloading the app and browsing services is 100% free. You only pay for the services you explicitly book through our verified providers."
    },
    {
      question: "How are the local service providers vetted?",
      answer: "We prioritize your safety. All service providers go through a review process, and you can always check their community ratings, reviews, and completed jobs before booking."
    },
    {
      question: "Can I offer my own services on Triozy?",
      answer: "Absolutely. You can easily switch to a provider profile, list your skills, and start receiving job requests from people in your local neighborhood."
    },
    {
      question: "What happens if a job isn't completed properly?",
      answer: "Our support team is here to help. We have a dispute resolution process to ensure fair outcomes for both users and service providers."
    },
    {
      question: "Can I chat or call providers before booking?",
      answer: "Yes, you have full control. You can use our secure in-app chat or call feature to discuss details, negotiate pricing, and confirm requirements before making any commitments."
    },
    {
      question: "Are there any hidden booking fees?",
      answer: "No hidden fees. The price you agree upon with the service provider is the price you pay. Transparency is a core value of the Triozy community."
    },
    {
      question: "How do I get paid if I work as a provider?",
      answer: "Payments are handled securely. Once a job is marked as completed and confirmed by the user, the funds are processed and sent directly to your linked account."
    },
    {
      question: "Is my personal information kept private?",
      answer: "Your privacy is our top priority. We use industry-standard encryption, and your exact location and contact details are only shared when you explicitly confirm a booking."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* 1. STICKY NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-[#f4f7fb]/90 backdrop-blur-xl border-b border-blue-900/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logoUrl} alt="Triozy Logo" className="w-10 h-10 rounded-xl shadow-sm" />
            <span className="text-2xl font-extrabold tracking-tight text-[#0e3084]">Triozy</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-[#0e3084] transition">Features</a>
            <a href="#how-it-works" className="hover:text-[#0e3084] transition">How it Works</a>
            <a href="#faq" className="hover:text-[#0e3084] transition">FAQ</a>
          </div>
          <a 
            href="https://app.triozy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0e3084] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Try on Web
          </a>
        </div>
      </nav>

      {/* 2. DYNAMIC HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#f4f7fb] to-blue-50">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/20 blur-[100px] -z-10 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-[#0e3084] font-bold text-sm mb-6 border border-blue-200">
              <Star size={14} fill="currentColor" />
              <span>#1 Local Discovery App</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
              Your neighborhood, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3084] to-blue-600">
                in your pocket.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Stop endlessly searching. Triozy instantly connects you with trusted local professionals, community requests, and neighbors—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={playStoreLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="/playstore_icon.png" 
                  alt="Get it on Google Play" 
                  className="h-26 w-auto hover:scale-[1.02] transition-transform"
                />
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
              <div className="flex -space-x-3">
                <img src={galleryImages[0]} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src={galleryImages[1]} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src={galleryImages[2]} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <p>Join your local community on Triozy</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative mx-auto w-full max-w-[340px] lg:max-w-none perspective-1000">
            {/* Widened aspect ratio & object-contain to prevent cropping */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[2.5rem] border-[4px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19] lg:w-[320px] lg:ml-auto"
            >
              <img 
                src={heroImage} 
                alt="Triozy App Home Screen" 
                className="w-full h-full object-contain bg-slate-900"
                decoding="async" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFINITE TICKER */}
      <div className="border-y border-blue-900/10 bg-white py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-12 items-center text-[#0e3084]/40 font-bold text-xl uppercase tracking-widest"
        >
          <span>Plumbing</span> • <span>Electricians</span> • <span>Home Cleaning</span> • <span>Tutoring</span> • <span>Event Planning</span> • <span>Carpentry</span> • <span>Photography</span> • <span>Plumbing</span> • <span>Electricians</span> • <span>Home Cleaning</span>
        </motion.div>
      </div>

      {/* 3. BENTO GRID FEATURES */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 bg-[#f4f7fb]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#0e3084] mb-6">One app. Every local solution.</h2>
          <p className="text-lg text-slate-600">Why download five different apps when you can manage your entire local life from one beautifully designed dashboard?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-blue-900/5 flex flex-col items-start hover:shadow-xl hover:shadow-[#0e3084]/5 transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#1e40af] text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform">
              <Wrench size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#0e3084]">Services</h3>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">Search for verified professionals. Read reviews, compare pricing, and book your service instantly without the hassle.</p>
            <span className="text-[#1e40af] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Explore Services <ArrowRight size={18}/></span>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-blue-900/5 flex flex-col items-start hover:shadow-xl hover:shadow-[#0e3084]/5 transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#92400e] text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Requests</h3>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">Have a unique job? Post your exact requirements and let local professionals pitch their offers directly to you.</p>
            <span className="text-[#92400e] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Post a Request <ArrowRight size={18}/></span>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-blue-900/5 flex flex-col items-start hover:shadow-xl hover:shadow-[#0e3084]/5 transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#166534] text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Mates</h3>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">It's not just about work. Connect with neighbors, find workout partners, or organize local community events.</p>
            <span className="text-[#166534] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Connect Now <ArrowRight size={18}/></span>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#0e3084] to-[#173a94] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">From problem to <br/><span className="text-blue-300">done in three steps.</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors">1</div>
                  <div className="w-0.5 h-full bg-white/10 mt-4"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-2">Search or Post</h3>
                  <p className="text-blue-100/80 text-lg leading-relaxed">Type what you need into the smart search, or post a custom request to the community board.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">2</div>
                  <div className="w-0.5 h-full bg-white/10 mt-4"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">Chat or Call & Confirm <PhoneCall size={20} className="text-amber-400" /></h3>
                  <p className="text-blue-100/80 text-lg leading-relaxed">Review profiles, chat securely or hop on a call inside the app, and agree on details before committing.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-2xl group-hover:bg-green-500 group-hover:text-white transition-colors">3</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">Get it Done <CheckCircle size={20} className="text-green-400" /></h3>
                  <p className="text-blue-100/80 text-lg leading-relaxed">The professional arrives, does the job, and you leave a review to help the community.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[650px] hidden md:block perspective-1000">
            {/* Fixed aspect ratio and object-contain for overlapping cards too */}
            <div className="absolute top-0 right-0 w-[260px] aspect-[9/19] rounded-[2rem] border-[4px] border-slate-900 shadow-2xl z-10 rotate-6 overflow-hidden bg-slate-900">
              <img src={galleryImages[1]} className="w-full h-full object-contain" alt="App UI" />
            </div>
            <div className="absolute top-20 left-0 w-[260px] aspect-[9/19] rounded-[2rem] border-[4px] border-slate-900 shadow-2xl z-20 -rotate-3 overflow-hidden bg-slate-900">
               <img src={galleryImages[2]} className="w-full h-full object-contain" alt="App UI" />
            </div>
            <div className="absolute bottom-0 right-10 w-[260px] aspect-[9/19] rounded-[2rem] border-[4px] border-slate-900 shadow-2xl z-30 rotate-2 overflow-hidden bg-slate-900">
               <img src={galleryImages[3]} className="w-full h-full object-contain" alt="App UI" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SMOOTH SCROLL GALLERY */}
      <section className="py-24 bg-[#f4f7fb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#0e3084]">Smooth Interface.</h2>
          <p className="text-lg text-slate-600 mt-4">A user interface designed to get you what you need, faster.</p>
        </div>
        
        <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              className="snap-center shrink-0 w-[280px] md:w-[320px]"
            >
              <div className="rounded-[2.5rem] border-[6px] border-slate-900 shadow-xl overflow-hidden bg-slate-900 aspect-[9/19]">
                <img 
                  src={src} 
                  alt={`Triozy Screen ${index + 1}`} 
                  className="w-full h-full object-contain bg-slate-900"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white border-y border-blue-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0e3084] mb-4">Loved by the community</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
            </div>
            <p className="font-semibold text-slate-600">4.9/5 Rating on the Play Store</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rahul S.", role: "Homeowner", text: "Finally replaced my messy contacts list. Found a brilliant plumber in 10 minutes. The interface is just so clean and easy." },
              { name: "Amit K.", role: "Local Electrician", text: "As a provider, Triozy has been a game changer. I get steady requests and can manage all my chats right in the app without giving out my personal number." },
              { name: "Anjali D.", role: "Community Member", text: "I used the 'Mates' feature to find a running partner in my neighborhood. We've been running together for a month now. Amazing concept!" }
            ].map((review, i) => (
              <div key={i} className="bg-[#f4f7fb] p-8 rounded-3xl shadow-sm border border-blue-900/5">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-6 line-clamp-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0e3084] rounded-full flex items-center justify-center font-bold text-white shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#0e3084] text-sm">{review.name}</p>
                    <p className="text-slate-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e3084] mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about the product and billing. Can't find the answer you're looking for? Reach out to our customer support team.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-blue-900/10 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-6 flex items-start justify-between bg-white text-left"
                  >
                    <span className="font-bold text-lg text-[#0e3084] pr-4">{faq.question}</span>
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
                    className="border border-blue-900/10 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                      className="w-full px-6 py-6 flex items-start justify-between bg-white text-left"
                    >
                      <span className="font-bold text-lg text-[#0e3084] pr-4">{faq.question}</span>
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

      {/* 8.  FOOTER */}
      <footer className="bg-[#0e3084] text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Top CTA area */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to connect?</h2>
            <p className="text-blue-200 mb-10 text-xl max-w-xl mx-auto">
              Join thousands of locals who are already finding services, posting jobs, and meeting mates on Triozy.
            </p>
            <a 
              href={playStoreLink} 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0e3084] px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Download the App Now
            </a>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-12 border-t border-white/10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoUrl} alt="Triozy" className="w-12 h-12 rounded-xl shadow-lg border-2 border-white/10" />
                <span className="text-2xl font-extrabold tracking-tight">Triozy</span>
              </div>
              <p className="text-blue-200/80 mb-6 max-w-sm leading-relaxed">
                Your local network for everything. Find services, post requests, or connect with a mate — all near you.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/triozy/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-blue-200/80 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support & Legal</h4>
              <ul className="space-y-4 text-blue-200/80 font-medium">
                <li>
                  <a href="mailto:triozyapp@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} /> triozyapp@gmail.com
                  </a>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
             <p className="text-blue-200/60 text-sm font-medium">© 2026 Triozy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}