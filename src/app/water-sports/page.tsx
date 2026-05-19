
import { Navbar } from "@/components/sections/Navbar"
import { WaterSports } from "@/components/sections/WaterSports"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"
import { PageBanner } from "@/components/sections/PageBanner"

export default function WaterSportsPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title="Water Sports" 
        subtitle="Adrenaline on the Ocean" 
        imageId="kitesurfing" 
      />
      <WaterSports />
      <Footer />
      <Toaster />
    </main>
  )
}
