
import { Navbar } from "@/components/sections/Navbar"
import { Tours } from "@/components/sections/Tours"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function ToursPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <Tours />
      <Footer />
      <Toaster />
    </main>
  )
}
