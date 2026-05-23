
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Link from "next/link"

const captions = [
  {
    title: "Discover Rare Island Magic",
    subtitle: "Experience the untouched beauty of Zanzibar's pristine white sands and turquoise horizons.",
    badge: "Zanzibar Island Tours"
  },
  {
    title: "Wild Tanzania Expeditions",
    subtitle: "Venture into the heart of the wild with our premium safari packages through the Serengeti.",
    badge: "Premium Safaris"
  },
  {
    title: "Adrenaline on the Ocean",
    subtitle: "Master the winds and waves with elite kitesurfing and water sports in the world-famous Paje.",
    badge: "Extreme Water Sports"
  }
]

export function Hero() {
  const [index, setIndex] = React.useState(0)
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith("hero-")).sort((a, b) => a.id.localeCompare(b.id))

  React.useEffect(() => {
    if (heroImages.length === 0) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.min(heroImages.length, captions.length))
    }, 6000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {heroImages.length > 0 && (
            <motion.div
              key={`bg-${index}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[index].imageUrl}
                alt={heroImages[index].description}
                fill
                priority={index === 0} // Only priority for first image to speed up load
                className="object-cover"
                data-ai-hint={heroImages[index].imageHint}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {captions[index]?.badge || "Welcome to Paradise"}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
              {captions[index]?.title.split(' ').map((word, i) => (
                <span key={i} className={word === "Rare" || word === "Wild" || word === "Adrenaline" ? "text-gradient" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 font-body max-w-3xl mx-auto leading-relaxed">
              {captions[index]?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-bold px-10 h-14 rounded-full shadow-2xl transition-all hover:scale-105">
                  Book Your Adventure
                </Button>
              </Link>
              <Link href="/tours">
                <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-10 h-14 rounded-full backdrop-blur-sm">
                  View Tours
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-accent" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white opacity-60 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('zanzibar-tours')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Discover</span>
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
