
import { Navbar } from "@/components/sections/Navbar"
import { WaterSports } from "@/components/sections/WaterSports"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function WaterSportsPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <WaterSports />
      <Footer />
      <Toaster />
    </main>
  )
}
