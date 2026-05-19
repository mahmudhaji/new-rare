
import { Navbar } from "@/components/sections/Navbar"
import { Safaris } from "@/components/sections/Safaris"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function SafarisPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <Safaris />
      <Footer />
      <Toaster />
    </main>
  )
}
