
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const [index, setIndex] = React.useState(0)
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith("hero-")).sort((a, b) => a.id.localeCompare(b.id))

  React.useEffect(() => {
    if (heroImages.length === 0) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {heroImages.length > 0 && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[index].imageUrl}
                alt={heroImages[index].description}
                fill
                priority
                className="object-cover"
                data-ai-hint={heroImages[index].imageHint}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Welcome to Paradise
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
            Explore <span className="text-gradient">Rare Adventure</span> in Zanzibar
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-body max-w-2xl mx-auto">
            Zanzibar Tours • Tanzania Safaris • Premium Water Sports.
            Experience the ultimate escape into the heart of East Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-bold px-10 h-14 rounded-full shadow-2xl transition-all hover:scale-105">
              Book Your Trip
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-10 h-14 rounded-full backdrop-blur-sm">
              Explore Tours
            </Button>
          </div>
        </motion.div>
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
