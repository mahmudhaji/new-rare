
"use client"

import { motion } from "framer-motion"
import { Users, Map as MapIcon, Calendar, Star } from "lucide-react"

const stats = [
  { label: "Happy Tourists", value: "2.5K+", icon: <Users className="h-6 w-6" /> },
  { label: "Tours Completed", value: "120+", icon: <MapIcon className="h-6 w-6" /> },
  { label: "Safari Packages", value: "45+", icon: <Calendar className="h-6 w-6" /> },
  { label: "Years Experience", value: "10+", icon: <Star className="h-6 w-6" /> },
]

export function Stats() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                {stat.icon}
              </div>
              <h4 className="text-4xl md:text-5xl font-black mb-2 font-headline">{stat.value}</h4>
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
