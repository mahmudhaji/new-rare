
import { Navbar } from "@/components/sections/Navbar"
import { Tours } from "@/components/sections/Tours"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"
import { PageBanner } from "@/components/sections/PageBanner"

export default function ToursPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title="Island Tours" 
        subtitle="Explore the Magic of Zanzibar" 
        imageId="jozani-forest" 
      />
      <Tours />
      <Footer />
      <Toaster />
    </main>
  )
}
