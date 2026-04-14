'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import type { Lead } from '@/lib/leads'
import { getCategoryConfig } from '@/lib/categoryConfig'
import { getCityShort } from '@/lib/leads'

interface Props { lead: Lead }

const ACRONYMS = new Set(['LLC', 'LLP', 'INC', 'CO', 'HVAC', 'DJ', 'BBQ', 'AC', 'USA', 'FL', 'TV', 'PR', 'DBA'])
// Words that should stay lowercase unless first in name
const SMALL = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'for', 'nor', 'at', 'by', 'in', 'of', 'to', 'up'])

function formatName(raw: string): string {
  const words = raw.trim().split(/\s+/).filter(Boolean)
  return words.map((word, idx) => {
    // Keep separators / symbols as-is (e.g. "-", "&", "-")
    if (/^[^a-zA-Z0-9]+$/.test(word)) return word
    const letters = word.replace(/[^a-zA-Z]/g, '')
    const upper = letters.toUpperCase()
    // Known acronyms
    if (letters.length >= 2 && ACRONYMS.has(upper)) {
      return word.replace(/[a-zA-Z]+/g, upper)
    }
    // Small words: lowercase unless first word
    if (idx > 0 && SMALL.has(word.toLowerCase())) return word.toLowerCase()
    // Default: title-case (first char upper, rest lower)
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

const PH = (urlOrId: string, w = 1400, q = 85) => {
  const base = urlOrId.startsWith('http')
    ? urlOrId
    : `https://images.unsplash.com/photo-${urlOrId}`
  return `${base}?w=${w}&q=${q}&auto=format&fit=crop`
}

// Warm editorial filter applied to every image for cohesion
const IMG_STYLE = { filter: 'saturate(0.88) brightness(0.97) contrast(1.03)' } as const

function useInView(threshold = 0.1) {
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

function TestimonialCarousel({ config }: { config: ReturnType<typeof getCategoryConfig> }) {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState<'left' | 'right'>('left')
  const [animKey, setAnimKey] = useState(0)
  const total = config.testimonials.length

  const go = useCallback((next: number, direction: 'left' | 'right') => {
    setDir(direction)
    setAnimKey(k => k + 1)
    setActive(next)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      go((active + 1) % total, 'left')
    }, 5500)
    return () => clearInterval(t)
  }, [active, total, go])

  const t = config.testimonials[active]

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Quote */}
      <div
        key={animKey}
        className={`animate-${dir === 'left' ? 'slideLeft' : 'slideRight'}`}
      >
        <div className="text-[7rem] leading-none font-serif text-white/10 select-none mb-2">"</div>
        <p className="text-white/90 text-2xl sm:text-3xl font-light leading-relaxed tracking-wide mb-10 px-4">
          {t.text}
        </p>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className={`w-10 h-[1px] bg-gradient-to-r ${config.gradient}`} />
          <div>
            <div className="text-white font-semibold text-sm tracking-boutique uppercase">{t.name}</div>
            <div className="flex justify-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-sm ${i < t.rating ? 'text-amber-400' : 'text-white/20'}`}>★</span>
              ))}
            </div>
          </div>
          <div className={`w-10 h-[1px] bg-gradient-to-l ${config.gradient}`} />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => go((active - 1 + total) % total, 'right')}
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center
                     text-white/60 hover:text-white hover:border-white/60 transition-all duration-500"
          aria-label="Previous review"
        >
          &#8592;
        </button>
        <div className="flex gap-2">
          {config.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 'left' : 'right')}
              className={`rounded-full transition-all duration-500 ${
                i === active
                  ? `w-6 h-1.5 bg-gradient-to-r ${config.gradient}`
                  : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => go((active + 1) % total, 'left')}
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center
                     text-white/60 hover:text-white hover:border-white/60 transition-all duration-500"
          aria-label="Next review"
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}

export default function DemoSite({ lead }: Props) {
  const config      = getCategoryConfig(lead.category)
  const city        = getCityShort(lead.address)
  const phone       = lead.phone || ''
  const displayName = formatName(lead.name)

  const [navSolid, setNavSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 80)
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        navSolid ? 'bg-white/97 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className={`font-serif font-semibold text-lg tracking-wide transition-colors duration-500 ${
            navSolid ? 'text-gray-900' : 'text-white'
          }`}>
            {displayName}
          </span>
          <div className="flex items-center gap-8">
            {['Services', 'Gallery', 'Contact'].map(label => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={`hidden md:block text-xs font-medium tracking-boutique uppercase transition-colors duration-500 ${
                  navSolid ? 'text-gray-400 hover:text-gray-900' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
            {phone && (
              <a
                href={`tel:${phone}`}
                className={`px-5 py-2.5 text-xs font-semibold tracking-boutique uppercase rounded-full
                            border transition-all duration-500 ${
                  navSolid
                    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                    : 'border-white/50 text-white hover:bg-white/15'
                }`}
              >
                Call Now
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero — full-bleed photo ───────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-[1.04] transition-transform"
          style={{ backgroundImage: `url(${PH(config.heroPhoto)})`, ...IMG_STYLE }}
        />
        {/* Layered dark overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-10 animate-fadeIn">
            <div className={`w-8 h-px bg-gradient-to-r ${config.gradient}`} />
            <span className="text-white/80 text-[10px] font-semibold tracking-luxury uppercase">
              {lead.category} &nbsp;&nbsp;{city}, FL
            </span>
            <div className={`w-8 h-px bg-gradient-to-l ${config.gradient}`} />
          </div>

          {/* Business name */}
          <h1 className="font-serif font-bold text-white leading-[1.02] tracking-tight mb-6 animate-fadeUp
                         text-[clamp(3rem,9vw,6.5rem)] text-shadow-hero">
            {displayName}
          </h1>

          {/* Tagline */}
          <p className="text-white/75 text-base sm:text-xl font-light tracking-[0.06em] mb-4
                        opacity-0 animate-fadeUp-delay-1 text-shadow-sm">
            {config.tagline}
          </p>

          {/* Subtext */}
          <p className="text-white/50 text-sm max-w-lg mx-auto mb-14
                        opacity-0 animate-fadeUp-delay-2 leading-relaxed">
            {config.subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeUp-delay-3">
            <a
              href="#contact"
              className={`px-10 py-4 rounded-full font-semibold text-sm tracking-boutique uppercase text-white
                          bg-gradient-to-r ${config.gradient} shadow-xl
                          hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]
                          transition-all duration-500 hover:-translate-y-1`}
            >
              {config.ctaText}
            </a>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="px-10 py-4 rounded-full font-semibold text-sm tracking-boutique uppercase text-white
                           border border-white/35 hover:border-white/70 hover:bg-white/10
                           transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm"
              >
                {phone}
              </a>
            )}
          </div>
        </div>

        {/* Animated scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0">
          <div className="w-px h-16 bg-white/15 relative overflow-hidden rounded-full">
            <div className="absolute left-0 w-full h-1/2 bg-white/70 rounded-full animate-scrollLine" />
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="bg-gray-950 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/10">
          {[config.stat1, config.stat2, config.stat3].map((stat, i) => (
            <div key={i} className="text-center px-6">
              <div className={`text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-[10px] tracking-luxury uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section className="py-36 px-6 bg-white" id="about">
        <div
          ref={about.ref}
          className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center
                      transition-all duration-1000 ${about.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/3] shadow-2xl">
              <img
                src={PH(config.aboutPhoto, 900)}
                alt={displayName}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={IMG_STYLE}
                loading="lazy"
              />
            </div>
            {/* Floating accent card */}
            <div className={`absolute -bottom-6 -right-6 bg-gradient-to-br ${config.gradient}
                             rounded-2xl px-7 py-5 shadow-xl hidden sm:block`}>
              <div className="text-white font-black text-2xl">{config.stat1.value}</div>
              <div className="text-white/80 text-xs tracking-boutique uppercase mt-0.5">{config.stat1.label}</div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className={`w-10 h-px bg-gradient-to-r ${config.gradient} mb-8`} />
            <span className="text-gray-400 text-xs tracking-luxury uppercase font-semibold">About Us</span>
            <h2 className="font-serif font-bold text-gray-900 leading-tight tracking-tight mb-7 mt-4
                           text-[clamp(2.2rem,5vw,3.5rem)]">
              {displayName}
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-6">
              {config.subtext} We take pride in serving the {city} community with care and
              intention — blending expertise with an environment that makes every visit worth
              returning to.
            </p>
            <p className="text-gray-400 text-base font-light leading-relaxed mb-10">
              Whether you&apos;re a first-time visitor or a longtime client, our team brings
              the same level of dedication to every interaction. That&apos;s the standard at {displayName}.
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm
                          tracking-boutique uppercase text-white bg-gradient-to-r ${config.gradient}
                          hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5`}
            >
              {config.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-36 px-6 bg-[#fafafa]" id="services">
        <div
          ref={services.ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${services.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="max-w-lg mb-20">
            <span className="text-gray-400 text-xs tracking-luxury uppercase font-semibold">What We Offer</span>
            <h2 className="font-serif font-bold text-gray-900 leading-tight tracking-tight mt-4
                           text-[clamp(2.2rem,5vw,3.5rem)]">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
            {config.services.map((service, i) => (
              <div
                key={i}
                className="group bg-white p-10 hover:bg-gray-950 transition-all duration-500 cursor-default"
              >
                <div className={`w-5 h-px bg-gradient-to-r ${config.gradient} mb-8
                                 group-hover:w-10 transition-all duration-500`} />
                <h3 className="font-serif font-semibold text-gray-900 text-xl mb-4 leading-snug
                               group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed
                              group-hover:text-gray-400 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery — editorial photos ────────────────────── */}
      <section className="py-36 px-6 bg-white" id="gallery">
        <div
          ref={gallery.ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${gallery.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-gray-400 text-xs tracking-luxury uppercase font-semibold">Our Work</span>
              <h2 className="font-serif font-bold text-gray-900 leading-tight tracking-tight mt-4
                             text-[clamp(2.2rem,5vw,3.5rem)]">
                Portfolio
              </h2>
            </div>
            <a href="#contact"
              className={`hidden sm:inline-flex items-center gap-2 text-sm font-medium tracking-boutique
                          uppercase bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent
                          hover:opacity-75 transition-opacity duration-300`}>
              Book Now &#8594;
            </a>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {config.gallery.map((item, i) => {
              const tall = i === 0 || i === 4
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${tall ? 'row-span-2' : ''}`}
                  style={{
                    aspectRatio: tall ? '3/4' : '4/3',
                    transitionDelay: `${i * 40}ms`
                  }}
                >
                  <img
                    src={PH(item.photo, 700, 82)}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    style={IMG_STYLE}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5
                                  translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                  transition-all duration-500">
                    <span className="text-white font-semibold text-sm tracking-boutique uppercase">{item.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials — carousel ───────────────────────── */}
      <section className="py-36 px-6 bg-gray-950 relative overflow-hidden" id="reviews">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-[0.07]"
          style={{ backgroundImage: `url(${PH(config.heroPhoto, 1200, 30)})`, ...IMG_STYLE }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 to-gray-950" />

        <div
          ref={reviews.ref}
          className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${reviews.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="text-center mb-20">
            <span className="text-gray-500 text-xs tracking-luxury uppercase font-semibold">What Clients Say</span>
            <h2 className="font-serif font-bold text-white leading-tight tracking-tight mt-4
                           text-[clamp(2.2rem,5vw,3.5rem)]">
              Client Reviews
            </h2>
          </div>

          <TestimonialCarousel config={config} />
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="py-36 px-6 bg-white" id="contact">
        <div
          ref={contact.ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${contact.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left */}
            <div>
              <span className="text-gray-400 text-xs tracking-luxury uppercase font-semibold">Reach Out</span>
              <h2 className="font-serif font-bold text-gray-900 leading-tight tracking-tight mt-4 mb-12
                             text-[clamp(2.2rem,5vw,3.5rem)]">
                Get In Touch
              </h2>

              <div className="space-y-10">
                {phone && (
                  <div>
                    <div className="text-gray-400 text-[10px] tracking-luxury uppercase mb-2">Phone</div>
                    <a href={`tel:${phone}`}
                      className={`font-serif font-semibold text-2xl text-gray-900
                                  bg-gradient-to-r ${config.gradient} bg-clip-text
                                  hover:text-transparent transition-colors duration-500`}>
                      {phone}
                    </a>
                  </div>
                )}
                <div>
                  <div className="text-gray-400 text-[10px] tracking-luxury uppercase mb-2">Address</div>
                  <div className="text-gray-900 font-medium leading-relaxed">{lead.address}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] tracking-luxury uppercase mb-3">Hours</div>
                  <div className="space-y-1.5">
                    {config.hours.map((h, i) => (
                      <div key={i} className="text-gray-600 text-sm font-light">{h}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="mt-14 rounded-2xl overflow-hidden aspect-video shadow-xl hidden sm:block">
                <img
                  src={PH(config.aboutPhoto, 700)}
                  alt={displayName}
                  className="w-full h-full object-cover"
                  style={IMG_STYLE}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <h3 className="font-serif font-bold text-gray-900 text-2xl mb-8">Send a Message</h3>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-sm
                               placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300" />
                  <input type="text" placeholder="Last name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-sm
                               placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300" />
                </div>
                <input type="email" placeholder="Email address"
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-sm
                             placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300" />
                <input type="tel" placeholder="Phone number"
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-sm
                             placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300" />
                <textarea placeholder="How can we help you?" rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-sm
                             placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 resize-none" />
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-sm tracking-boutique uppercase text-white
                              bg-gradient-to-r ${config.gradient} shadow-lg
                              hover:shadow-2xl transition-all duration-500 hover:-translate-y-0.5`}>
                  {config.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
            <div>
              <div className="font-serif font-bold text-3xl mb-2">{displayName}</div>
              <div className="text-gray-500 text-xs tracking-boutique uppercase">{lead.category} &nbsp;·&nbsp; {city}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-xs tracking-boutique uppercase">
              {phone && (
                <a href={`tel:${phone}`} className="text-gray-500 hover:text-white transition-colors duration-300">
                  {phone}
                </a>
              )}
              {['About', 'Services', 'Gallery', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className="text-gray-500 hover:text-white transition-colors duration-300">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-gray-700 text-xs">
            <span>&copy; {new Date().getFullYear()} {displayName}. All rights reserved.</span>
            <span>{lead.address}</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
