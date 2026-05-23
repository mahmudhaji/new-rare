"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Compass, Tent, TreesIcon as Tree, Map as MapIcon, Binoculars } from "lucide-react"
import Link from "next/link"
import { safariData } from "@/lib/safaris-data"

const icons: Record<string, React.ReactNode> = {
  serengeti: <Compass className="h-5 w-5" />,
  ngorongoro: <Tent className="h-5 w-5" />,
  mikumi: <Binoculars className="h-5 w-5" />,
  selous: <MapIcon className="h-5 w-5" />,
  tarangire: <Tree className="h-5 w-5" />,
}

export function Safaris() {
  return (
    <section id="safaris" className="py-24 px-6 bg-secondary relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              Wild Tanzania
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-headline text-4xl md:text-5xl mt-2 mb-4"
            >
              Premium Tanzania Safaris
            </motion.h2>
            <p className="text-muted-foreground">
              Witness the grandeur of the wild. From the endless plains of Serengeti to the untouched beauty of Selous, we offer luxury wildlife expeditions.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            View All Safaris
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {safariData.map((safari, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background rounded-3xl overflow-hidden shadow-xl flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={safari.img}
                  alt={safari.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-2xl">
                  {icons[safari.id] || <Compass className="h-5 w-5" />}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-accent font-bold text-xs uppercase tracking-widest">{safari.type}</span>
                <h3 className="font-headline text-2xl mt-2 mb-4">{safari.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6">{safari.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-medium text-muted-foreground italic">Inquire for Luxury Package</span>
                  <Link href={`/safaris/${safari.id}`}>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 hover:bg-accent/5 p-0 h-auto">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
