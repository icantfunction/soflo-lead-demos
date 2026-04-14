'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Lead } from '@/lib/leads'

interface Props {
  leads: Lead[]
  categories: string[]
}

const CATEGORY_COLORS: Record<string, string> = {
  'hair salon': 'bg-rose-100 text-rose-700',
  'nail salon': 'bg-pink-100 text-pink-700',
  'barber shop': 'bg-blue-100 text-blue-700',
  'lash extensions': 'bg-fuchsia-100 text-fuchsia-700',
  'makeup artist': 'bg-purple-100 text-purple-700',
  'bakery': 'bg-amber-100 text-amber-700',
  'cake shop': 'bg-orange-100 text-orange-700',
  'food truck': 'bg-red-100 text-red-700',
  'catering': 'bg-yellow-100 text-yellow-700',
  'personal trainer': 'bg-emerald-100 text-emerald-700',
  'yoga studio': 'bg-teal-100 text-teal-700',
  'massage therapy': 'bg-cyan-100 text-cyan-700',
  'day spa': 'bg-sky-100 text-sky-700',
  'house cleaning service': 'bg-indigo-100 text-indigo-700',
  'lawn care': 'bg-green-100 text-green-700',
  'landscaping': 'bg-lime-100 text-lime-700',
  'photographer': 'bg-violet-100 text-violet-700',
  'event planner': 'bg-purple-100 text-purple-700',
  'DJ': 'bg-indigo-100 text-indigo-700',
  'dog groomer': 'bg-yellow-100 text-yellow-800',
  'tattoo shop': 'bg-gray-100 text-gray-700',
  'dessert shop': 'bg-pink-100 text-pink-700',
}

function getBadgeClass(category: string): string {
  return CATEGORY_COLORS[category] || 'bg-slate-100 text-slate-700'
}

export default function Dashboard({ leads, categories }: Props) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      const matchCat = activeCategory === 'All' || l.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        (l.phone || '').includes(q)
      return matchCat && matchSearch
    })
  }, [leads, search, activeCategory])

  const withPhone = leads.filter((l) => l.phone).length

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                🎯 South Florida Leads
              </h1>
              <p className="text-slate-400 text-sm mt-0.5">
                {leads.length} businesses · {withPhone} with phone
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <div className="bg-emerald-900/40 border border-emerald-700/50 rounded-lg px-3 py-2 text-center">
                <div className="text-emerald-400 font-bold text-lg leading-none">{withPhone}</div>
                <div className="text-emerald-300/70 text-xs mt-0.5">With Phone</div>
              </div>
              <div className="bg-blue-900/40 border border-blue-700/50 rounded-lg px-3 py-2 text-center">
                <div className="text-blue-400 font-bold text-lg leading-none">{leads.length}</div>
                <div className="text-blue-300/70 text-xs mt-0.5">Total Leads</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by name, city, category, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-base"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? `All (${leads.length})` : cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        {(search || activeCategory !== 'All') && (
          <p className="text-slate-400 text-sm mb-4">
            Showing {filtered.length} of {leads.length} leads
          </p>
        )}

        {/* Lead Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((lead) => (
            <div
              key={lead.slug}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3 hover:border-slate-600 transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/50"
            >
              {/* Category badge */}
              <div className="flex items-start justify-between gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeClass(lead.category)}`}>
                  {lead.category}
                </span>
                {lead.phone && (
                  <span className="text-emerald-400 text-xs font-medium">📞 Has Phone</span>
                )}
              </div>

              {/* Business name */}
              <h2 className="text-white font-bold text-lg leading-tight">{lead.name}</h2>

              {/* Address */}
              <p className="text-slate-400 text-sm leading-relaxed">
                📍 {lead.address}
              </p>

              {/* Phone */}
              {lead.phone && (
                <a
                  href={`tel:${lead.phone}`}
                  className="text-slate-300 text-sm font-medium hover:text-white transition-colors"
                >
                  📱 {lead.phone}
                </a>
              )}

              {/* Actions */}
              <div className="flex gap-2 mt-auto pt-2">
                <Link
                  href={`/demo/${lead.slug}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 rounded-xl text-center transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/50"
                >
                  View Demo →
                </Link>
                {lead.phone && (
                  <a
                    href={`tel:${lead.phone}`}
                    className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-3 py-2.5 rounded-xl transition-colors"
                    title="Call"
                  >
                    📞
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">No leads match your search.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All') }}
              className="mt-4 text-blue-400 hover:text-blue-300 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
