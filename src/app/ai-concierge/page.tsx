
import { Navbar } from "@/components/sections/Navbar"
import { AIConcierge } from "@/components/sections/AIConcierge"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function AIConciergePage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <AIConcierge />
      <Footer />
      <Toaster />
    </main>
  )
}
