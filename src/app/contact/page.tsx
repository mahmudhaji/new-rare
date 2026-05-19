
import { Navbar } from "@/components/sections/Navbar"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"
import { PageBanner } from "@/components/sections/PageBanner"

export default function ContactPage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title="Get In Touch" 
        subtitle="Start Your Adventure" 
        imageId="stone-town" 
      />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  )
}
