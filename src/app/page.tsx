import { leads, getCategories } from '@/lib/leads'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  const categories = getCategories()
  return <Dashboard leads={leads} categories={categories} />
}
