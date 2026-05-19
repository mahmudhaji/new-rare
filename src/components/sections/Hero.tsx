
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-beautiful-beach-with-turquoise-water-11756-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
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
