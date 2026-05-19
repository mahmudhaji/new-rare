
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Anchor, Zap, Search, Droplets, Wind, Fish } from "lucide-react"
import { cn } from "@/lib/utils"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const sports = [
  { name: "Kite Surfing", icon: <Wind />, imageId: "kitesurfing", desc: "Ride the Paje winds." },
  { name: "Jet Ski", icon: <Zap />, imageId: "jetski", desc: "Feel the speed on waves." },
  { name: "Snorkeling", icon: <Search />, imageId: "snorkeling", desc: "Explore coral reefs." },
  { name: "Scuba Diving", icon: <Droplets />, imageId: "scuba", desc: "Dive into the deep blue." },
  { name: "Paddle Boarding", icon: <Anchor />, imageId: "paddle", desc: "Zen on the ocean surface." },
  { name: "Deep Sea Fishing", icon: <Fish />, imageId: "fishing", desc: "The big catch awaits." },
]

export function WaterSports() {
  return (
    <section id="water-sports" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative bubbles */}
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute rounded-full bg-accent/20 pointer-events-none"
          style={{
            width: `${i * 20}px`,
            height: `${i * 20}px`,
            left: `${i * 15}%`,
            top: `${i * 10}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Ocean Thrills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl mt-2 mb-4"
          >
            Extreme Water Sports
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, idx) => {
            const sportImg = PlaceHolderImages.find(img => img.id === sport.imageId);
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-[40px] shadow-2xl"
              >
                <Image 
                  src={sportImg?.imageUrl || ""} 
                  alt={sport.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={sportImg?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 transition-all group-hover:rotate-12">
                    {React.cloneElement(sport.icon as React.ReactElement, { className: "h-7 w-7 text-white" })}
                  </div>
                  <h4 className="font-headline text-2xl text-white mb-2">{sport.name}</h4>
                  <p className="text-gray-300 text-sm">{sport.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
