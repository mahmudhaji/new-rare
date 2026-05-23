import { SafariDetailView } from "@/components/sections/SafariDetailView"
import { safariData } from "@/lib/safaris-data"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"

export function generateStaticParams() {
  return safariData.map((safari) => ({
    slug: safari.id,
  }))
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const safari = safariData.find((s) => s.id === slug)

  if (!safari) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline mb-4">Safari Not Found</h1>
          <a href="/safaris" className="text-primary hover:underline">Back to Safaris</a>
        </div>
      </main>
    )
  }

  return (
    <main className="relative pt-20">
      <Navbar />
      <SafariDetailView safari={safari} />
      <Footer />
    </main>
  )
}