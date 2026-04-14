'use client'

import { useEffect, useRef, useState } from 'react'
import type { Lead } from '@/lib/leads'
import { getCategoryConfig } from '@/lib/categoryConfig'
import { getCityShort } from '@/lib/leads'

interface Props { lead: Lead }

const PH = (id: string, w = 1400, q = 85) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-amber-400' : 'text-gray-600'}>★</span>
      ))}
    </div>
  )
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function DemoSite({ lead }: Props) {
  const config = getCategoryConfig(lead.category)
  const city   = getCityShort(lead.address)
  const phone  = lead.phone || ''

  const [navSolid, setNavSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const about    = useInView()
  const services = useInView()
  const gallery  = useInView()
  const reviews  = useInView()
  const contact  = useInView()

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Navbar ───────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        navSolid ? 'bg-white/96 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${navSolid ? 'text-gray-900' : 'text-white'}`}>
            {lead.name}
          </span>
          <div className="flex items-center gap-3">
            <a href="#services"
              className={`hidden sm:block text-sm font-medium transition-colors duration-300 ${navSolid ? 'text-gray-500 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}>
              Services
            </a>
            <a href="#gallery"
              className={`hidden sm:block text-sm font-medium transition-colors duration-300 ${navSolid ? 'text-gray-500 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}>
              Gallery
            </a>
            <a href="#contact"
              className={`hidden sm:block text-sm font-medium transition-colors duration-300 ${navSolid ? 'text-gray-500 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}>
              Contact
            </a>
            {phone && (
              <a href={`tel:${phone}`}
                className={`ml-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  navSolid
                    ? 'bg-gray-900 text-white hover:bg-gray-700'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30 backdrop-blur-sm'
                }`}>
                {navSolid ? phone : 'Call Now'}
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero — full-bleed photo ───────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${PH(config.heroPhoto)})` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/75" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 animate-fadeIn
                          border border-white/30 bg-white/10 backdrop-blur-md">
            <span className="text-white/90 text-xs font-bold uppercase tracking-[0.2em]">
              {lead.category} &nbsp;·&nbsp; {city}
            </span>
          </div>

          {/* Business name */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-6
                         leading-[1.05] tracking-tight animate-fadeUp text-shadow-hero">
            {lead.name}
          </h1>

          {/* Tagline */}
          <p className="text-white/85 text-xl sm:text-2xl font-light mb-4
                        opacity-0 animate-fadeUp-delay-1 text-shadow-sm">
            {config.tagline}
          </p>

          {/* Subtext */}
          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto mb-12
                        opacity-0 animate-fadeUp-delay-2">
            {config.subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeUp-delay-3">
            <a href="#contact"
              className={`px-9 py-4 rounded-2xl font-bold text-white text-lg shadow-2xl
                          bg-gradient-to-r ${config.gradient}
                          hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1`}>
              {config.ctaText}
            </a>
            {phone && (
              <a href={`tel:${phone}`}
                className="px-9 py-4 rounded-2xl font-bold text-white text-lg
                           border border-white/40 bg-white/10 backdrop-blur-md
                           hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                📞 {phone}
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
          <span className="text-white/50 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[config.stat1, config.stat2, config.stat3].map((stat, i) => (
            <div key={i}>
              <div className={`text-3xl sm:text-4xl font-black mb-1 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" id="about">
        <div
          ref={about.ref}
          className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                      transition-all duration-700 ${about.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src={PH(config.aboutPhoto, 900)}
              alt={`${lead.name} — ${lead.category}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <span className={`text-sm font-bold uppercase tracking-widest ${config.accentClass}`}>
              About Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              {lead.name}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              {config.subtext} We take pride in serving the {city} community with the highest
              standards of quality and care. Every client who walks through our doors becomes
              part of our family.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Whether you're a first-time visitor or a long-time loyal customer, our team
              brings passion and expertise to every interaction. That's the {lead.name} difference.
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white
                          bg-gradient-to-r ${config.gradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
            >
              {config.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50" id="services">
        <div
          ref={services.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${services.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className={`text-sm font-bold uppercase tracking-widest ${config.accentClass}`}>
              What We Offer
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need, delivered with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-2xl border border-gray-100
                           transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery — real photos ─────────────────────────── */}
      <section className="py-24 px-6 bg-white" id="gallery">
        <div
          ref={gallery.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${gallery.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className={`text-sm font-bold uppercase tracking-widest ${config.accentClass}`}>
              Our Work
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
              Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {config.gallery.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <img
                  src={PH(item.photo, 700, 80)}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4
                                translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                transition-all duration-300">
                  <span className="text-white font-bold text-sm drop-shadow-lg">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-950 relative overflow-hidden" id="reviews">
        {/* Subtle photo tint */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${PH(config.heroPhoto, 1200, 40)})` }}
        />
        <div className="absolute inset-0 bg-gray-950/80" />

        <div
          ref={reviews.ref}
          className={`relative z-10 max-w-6xl mx-auto transition-all duration-700 ${reviews.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
              What Clients Say
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3">
              Client Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border border-white/10 bg-white/5 backdrop-blur-md
                           hover:-translate-y-1.5 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-5xl text-white/15 font-serif leading-none mb-4">"</div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center
                                   text-white font-bold text-sm bg-gradient-to-br ${config.gradient}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" id="contact">
        <div
          ref={contact.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${contact.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className={`text-sm font-bold uppercase tracking-widest ${config.accentClass}`}>
              Reach Out
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-6">
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-4 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl
                                   shadow-lg bg-gradient-to-br ${config.gradient}`}>
                    📞
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-gray-900 font-bold text-xl group-hover:underline">{phone}</div>
                  </div>
                </a>
              )}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl
                                 shadow-lg bg-gradient-to-br ${config.gradient}`}>
                  📍
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Address</div>
                  <div className="text-gray-900 font-semibold leading-snug">{lead.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl
                                 shadow-lg bg-gradient-to-br ${config.gradient} flex-shrink-0`}>
                  🕐
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">Business Hours</div>
                  {config.hours.map((h, i) => (
                    <div key={i} className="text-gray-700 font-medium text-sm leading-6">{h}</div>
                  ))}
                </div>
              </div>

              {/* Decorative about mini-image */}
              <div className="mt-6 rounded-2xl overflow-hidden aspect-video shadow-xl hidden sm:block">
                <img
                  src={PH(config.aboutPhoto, 600)}
                  alt={lead.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-serif text-gray-900 font-bold text-2xl mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900
                               placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors" />
                  <input type="text" placeholder="Last name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900
                               placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors" />
                </div>
                <input type="email" placeholder="Email address"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900
                             placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors" />
                <input type="tel" placeholder="Phone number"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900
                             placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors" />
                <textarea placeholder="How can we help you?" rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900
                             placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none" />
                <button
                  className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg
                              bg-gradient-to-r ${config.gradient}
                              hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5`}>
                  {config.ctaText} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="bg-gray-950 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
            <div>
              <div className="font-serif font-bold text-3xl mb-1">{lead.name}</div>
              <div className={`text-sm ${config.accentClass}`}>{lead.category} · {city}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 text-sm">
              {phone && (
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-white transition-colors">
                  📞 {phone}
                </a>
              )}
              <a href="#about"    className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#gallery"  className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              <a href="#contact"  className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-gray-600 text-xs">
            <span>© {new Date().getFullYear()} {lead.name}. All rights reserved.</span>
            <span>{lead.address}</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
