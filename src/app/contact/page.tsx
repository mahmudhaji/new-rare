
import { Navbar } from "@/components/sections/Navbar"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  )
}
