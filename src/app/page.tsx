
import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Tours } from "@/components/sections/Tours"
import { Safaris } from "@/components/sections/Safaris"
import { WaterSports } from "@/components/sections/WaterSports"
import { Stats } from "@/components/sections/Stats"
import { Gallery } from "@/components/sections/Gallery"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Tours />
      <Stats />
      <Safaris />
      <WaterSports />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  )
}
