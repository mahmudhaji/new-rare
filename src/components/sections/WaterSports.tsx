
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Anchor, Zap, Search, Droplets, Wind, Fish } from "lucide-react"
import { cn } from "@/lib/utils"

const sports = [
  { name: "Kite Surfing", icon: <Wind />, color: "bg-blue-500", desc: "Ride the Paje winds." },
  { name: "Jet Ski", icon: <Zap />, color: "bg-cyan-500", desc: "Feel the speed on waves." },
  { name: "Snorkeling", icon: <Search />, color: "bg-teal-500", desc: "Explore coral reefs." },
  { name: "Scuba Diving", icon: <Droplets />, color: "bg-indigo-500", desc: "Dive into the deep blue." },
  { name: "Paddle Boarding", icon: <Anchor />, color: "bg-sky-500", desc: "Zen on the ocean surface." },
  { name: "Deep Sea Fishing", icon: <Fish />, color: "bg-blue-700", desc: "The big catch awaits." },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sports.map((sport, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-secondary/30 border border-border/50 group cursor-pointer transition-all hover:bg-primary/10 hover:border-primary/50"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:rotate-12",
                "bg-primary text-white"
              )}>
                {React.cloneElement(sport.icon as React.ReactElement, { className: "h-8 w-8" })}
              </div>
              <h4 className="font-bold text-sm mb-1">{sport.name}</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{sport.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
