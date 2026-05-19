
import { Navbar } from "@/components/sections/Navbar"
import { AIConcierge } from "@/components/sections/AIConcierge"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/toaster"
import { PageBanner } from "@/components/sections/PageBanner"

export default function AIConciergePage() {
  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title="AI Concierge" 
        subtitle="Intelligent Travel Planning" 
        imageId="zanzibar-sunset" 
      />
      <AIConcierge />
      <Footer />
      <Toaster />
    </main>
  )
}
