import leadsData from '../../public/leads.json'

export interface Lead {
  place_id: string
  name: string
  address: string
  phone: string | null
  website: string | null
  category: string
  city: string
  email: string | null
  instagram: string | null
  found_at: string
  source: string
  slug: string
}

export const leads: Lead[] = leadsData as Lead[]

export function getLeadBySlug(slug: string): Lead | undefined {
  return leads.find((l) => l.slug === slug)
}

export function getCityShort(address: string): string {
  // Extract city from "123 Main St, Miami, FL 33101, USA"
  const parts = address.split(',')
  return parts.length >= 2 ? parts[1].trim() : address
}

export function formatPhone(phone: string | null): string {
  return phone || 'Contact Us'
}

export function getCategories(): string[] {
  const cats = Array.from(new Set(leads.map((l) => l.category))).sort()
  return cats
}
