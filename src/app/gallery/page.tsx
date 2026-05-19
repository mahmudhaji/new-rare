
import { Navbar } from "@/components/sections/Navbar"
import { Gallery } from "@/components/sections/Gallery"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"
import { PageBanner } from "@/components/sections/PageBanner"

export default function GalleryPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title="Our Gallery" 
        subtitle="Capturing Moments in Paradise" 
        imageId="prison-island" 
      />
      <Gallery />
      <Footer />
      <Toaster />
    </main>
  )
}
