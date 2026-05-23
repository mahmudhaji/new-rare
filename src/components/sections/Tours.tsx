"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"
import Link from "next/link"
import { tourData } from "@/lib/tours-data"

export function Tours() {
  return (
    <section id="zanzibar-tours" className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Island Adventures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl mt-2 mb-4"
          >
            Zanzibar Island Tours
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant culture and breathtaking natural beauty of Zanzibar with our curated island experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourData.map((tour, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-accent text-accent" />)}
                </div>
                <h3 className="font-headline text-2xl text-white mb-2">{tour.title}</h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">{tour.desc}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Inquire for details</span>
                  </div>
                  <Link href={`/tours/${tour.id}`}>
                    <Button className="rounded-full px-6 bg-primary hover:bg-primary/90">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {tour.time}
                </span>
                <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Zanzibar
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
