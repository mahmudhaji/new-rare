
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const images = [
  { src: "https://picsum.photos/seed/z1/800/1000", span: "row-span-2" },
  { src: "https://picsum.photos/seed/z2/800/600", span: "col-span-1" },
  { src: "https://picsum.photos/seed/z3/800/600", span: "col-span-1" },
  { src: "https://picsum.photos/seed/z4/800/1000", span: "row-span-2 col-span-2 md:col-span-1" },
  { src: "https://picsum.photos/seed/z5/800/600", span: "col-span-1" },
  { src: "https://picsum.photos/seed/z6/800/600", span: "col-span-1" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl mt-2 mb-4"
          >
            Adventure Masonry Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative rounded-3xl overflow-hidden group shadow-lg",
                img.span
              )}
            >
              <Image
                src={img.src}
                alt="Zanzibar Adventure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
