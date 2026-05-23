import { TourDetailView } from "@/components/sections/TourDetailView"
import { tourData } from "@/lib/tours-data"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"

export function generateStaticParams() {
  // Ensure we are returning the correct shape for static generation
  return tourData.map((tour) => ({
    slug: tour.id,
  }))
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const tour = tourData.find((t) => t.id === slug)

  if (!tour) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline mb-4">Tour Not Found</h1>
          <a href="/tours" className="text-primary hover:underline">Back to Tours</a>
        </div>
      </main>
    )
  }

  return (
    <main className="relative pt-20">
      <Navbar />
      <TourDetailView tour={tour} />
      <Footer />
    </main>
  )
}
