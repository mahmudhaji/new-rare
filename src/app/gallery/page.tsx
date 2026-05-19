
import { Navbar } from "@/components/sections/Navbar"
import { Gallery } from "@/components/sections/Gallery"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function GalleryPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <Gallery />
      <Footer />
      <Toaster />
    </main>
  )
}
