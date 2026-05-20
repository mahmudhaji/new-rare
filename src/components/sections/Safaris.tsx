
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Compass, Tent, TreesIcon as Tree, Map as MapIcon, Binoculars } from "lucide-react"
import Link from "next/link"

export const safariData = [
  {
    id: "serengeti",
    title: "Serengeti National Park",
    type: "The Great Migration",
    img: "https://picsum.photos/seed/serengeti/1200/800",
    icon: <Compass className="h-5 w-5" />,
    desc: "Witness the legendary Great Migration across the endless plains of the Serengeti, home to the world's highest concentration of large mammals."
  },
  {
    id: "ngorongoro",
    title: "Ngorongoro Crater",
    type: "UNESCO World Heritage",
    img: "https://picsum.photos/seed/ngorongoro/1200/800",
    icon: <Tent className="h-5 w-5" />,
    desc: "Explore the world's largest inactive volcanic caldera, a self-contained paradise teeming with over 25,000 large animals including the rare black rhino."
  },
  {
    id: "mikumi",
    title: "Mikumi National Park",
    type: "The mini-Serengeti",
    img: "https://picsum.photos/seed/mikumi/1200/800",
    icon: <Binoculars className="h-5 w-5" />,
    desc: "Perfect for short escapes from Zanzibar, Mikumi offers spectacular sightings of lions, zebras, and giraffes in its Mkata Floodplain."
  },
  {
    id: "selous",
    title: "Selous Game Reserve",
    type: "Wild & Untouched",
    img: "https://picsum.photos/seed/selous/1200/800",
    icon: <MapIcon className="h-5 w-5" />,
    desc: "Discover one of Africa's largest and most rugged protected areas, famous for its boat safaris on the Rufiji River and wild dog populations."
  },
  {
    id: "tarangire",
    title: "Tarangire Safari",
    type: "Elephant Paradise",
    img: "https://picsum.photos/seed/tarangire/1200/800",
    icon: <Tree className="h-5 w-5" />,
    desc: "Known for its massive baobab trees and huge herds of elephants that congregate around the Tarangire River during the dry season."
  },
]

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
                  {safari.icon}
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
