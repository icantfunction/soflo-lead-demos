import { leads, getLeadBySlug } from '@/lib/leads'
import DemoSite from '@/components/DemoSite'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return leads.map((lead) => ({ slug: lead.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const lead = getLeadBySlug(params.slug)
  if (!lead) return { title: 'Not Found' }
  return {
    title: `${lead.name} — Demo Site`,
    description: `Professional website demo for ${lead.name} in ${lead.city}`,
  }
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  const lead = getLeadBySlug(params.slug)
  if (!lead) notFound()
  return <DemoSite lead={lead} />
}
