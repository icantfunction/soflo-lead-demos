'use client'

import { useEffect, useRef, useState } from 'react'
import type { Lead } from '@/lib/leads'
import { getCategoryConfig } from '@/lib/categoryConfig'
import { getCityShort } from '@/lib/leads'

interface Props { lead: Lead }

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-amber-400' : 'text-gray-300'}>★</span>
      ))}
    </div>
  )
}

function useInView(threshold = 0.15) {
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
  const city = getCityShort(lead.address)
  const phone = lead.phone || ''

  const [navSolid, setNavSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const services = useInView()
  const gallery  = useInView()
  const reviews  = useInView()
  const contact  = useInView()

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Navbar ───────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navSolid ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className={`font-bold text-lg transition-colors duration-300 ${navSolid ? 'text-gray-900' : 'text-white'}`}>
            {lead.name}
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden sm:block text-sm font-medium transition-colors duration-300 ${navSolid ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}
            >
              Contact
            </a>
            {phone && (
              <a
                href={`tel:${phone}`}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  navSolid
                    ? 'bg-gray-900 text-white hover:bg-gray-700'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                {navSolid ? phone : '📞 Call Now'}
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${config.heroBg}`}>
        {/* Animated gradient orbs */}
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${config.gradient} opacity-20 blur-3xl animate-float`} />
        <div className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl ${config.gradient} opacity-20 blur-3xl animate-float`} style={{ animationDelay: '1.5s' }} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${config.gradient} opacity-10 blur-3xl`} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-fadeIn">
            <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
              {lead.category} · {city}
            </span>
          </div>

          {/* Business Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight animate-fadeUp text-shadow">
            {lead.name}
          </h1>

          {/* Tagline */}
          <p className={`text-xl sm:text-2xl font-medium mb-4 opacity-0 animate-fadeUp-delay-1 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
            {config.tagline}
          </p>

          {/* Subtext */}
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fadeUp-delay-2">
            {config.subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeUp-delay-3">
            <a
              href="#contact"
              className={`px-8 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r ${config.gradient} hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5`}
            >
              {config.ctaText}
            </a>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="px-8 py-4 rounded-2xl font-bold text-lg text-white glass hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                📞 {phone}
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn opacity-60">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-white animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ height: '50%' }} />
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
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Everything you need, delivered with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl card-hover border border-gray-100"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${config.gradient} bg-opacity-10`}
                     style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(0,0,0,0.06))' }}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" id="gallery">
        <div
          ref={gallery.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${gallery.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className={`text-sm font-bold uppercase tracking-widest ${config.accentClass}`}>
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3">
              Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {config.gallery.map((item, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} card-hover cursor-pointer`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-bold text-sm drop-shadow">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className={`py-24 px-6 ${config.heroBg}`} id="reviews">
        <div
          ref={reviews.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${reviews.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-white/60">
              What Clients Say
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
              Client Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-5xl text-white/20 font-serif leading-none mb-3">"</div>
                <p className="text-white/90 text-base leading-relaxed mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white font-bold text-sm`}>
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
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-6">
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-4 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    📞
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-0.5">Phone</div>
                    <div className="text-gray-900 font-bold text-xl group-hover:underline">{phone}</div>
                  </div>
                </a>
              )}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}>
                  📍
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-0.5">Address</div>
                  <div className="text-gray-900 font-bold">{lead.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0`}>
                  🕐
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-2">Business Hours</div>
                  {config.hours.map((h, i) => (
                    <div key={i} className="text-gray-900 font-medium text-sm">{h}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-gray-900 font-bold text-xl mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                />
                <button
                  className={`w-full py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r ${config.gradient} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                >
                  {config.ctaText} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="bg-gray-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-black text-2xl mb-1">{lead.name}</div>
              <div className={`text-sm ${config.accentClass}`}>{lead.category} · {city}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {phone && (
                <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
                  📞 {phone}
                </a>
              )}
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-gray-600 text-sm">
            <span>© {new Date().getFullYear()} {lead.name}. All rights reserved.</span>
            <span>{lead.address}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
