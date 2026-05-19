
import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Tours } from "@/components/sections/Tours"
import { Safaris } from "@/components/sections/Safaris"
import { WaterSports } from "@/components/sections/WaterSports"
import { AIConcierge } from "@/components/sections/AIConcierge"
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
      <AIConcierge />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/255778666810"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </main>
  )
}
