
import { Navbar } from "@/components/sections/Navbar"
import { Safaris } from "@/components/sections/Safaris"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"
import { PageBanner } from "@/components/sections/PageBanner"

export default function SafarisPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title="Wild Tanzania" 
        subtitle="Premium Safari Expeditions" 
        imageId="safari-wildlife" 
      />
      <Safaris />
      <Footer />
      <Toaster />
    </main>
  )
}
