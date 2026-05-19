
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"

const tours = [
  {
    title: "Safari Blue",
    desc: "The ultimate sea adventure. Explore Menai Bay, snorkel in crystal waters, and enjoy a fresh seafood lunch.",
    price: "$80",
    time: "Full Day",
    img: "https://picsum.photos/seed/safariblue/600/800",
  },
  {
    title: "Nakupenda Island",
    desc: "Visit the stunning sandbank known as 'I Love You' island. Pure white sand surrounded by turquoise ocean.",
    price: "$60",
    time: "6 Hours",
    img: "https://picsum.photos/seed/nakupenda/600/800",
  },
  {
    title: "Dolphin Tour",
    desc: "An unforgettable experience swimming with wild dolphins in their natural habitat at Kizimkazi or Mnemba.",
    price: "$55",
    time: "4 Hours",
    img: "https://picsum.photos/seed/dolphin/600/800",
  },
  {
    title: "Sunset Dhow Cruise",
    desc: "A magical evening on a traditional Zanzibar dhow, enjoying music and drinks as the sun sets over the horizon.",
    price: "$45",
    time: "3 Hours",
    img: "https://picsum.photos/seed/sunset/600/800",
  },
  {
    title: "Baraka Aquarium",
    desc: "A unique natural lagoon where you can see, feed, and even swim with rescued sea turtles.",
    price: "$30",
    time: "2 Hours",
    img: "https://picsum.photos/seed/aquarium/600/800",
  },
  {
    title: "Stone Town Tour",
    desc: "Walk through the historical labyrinth of the ancient island city and discover its rich culture.",
    price: "$40",
    time: "3 Hours",
    img: "https://picsum.photos/seed/stone/600/800",
  },
]

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
          {tours.map((tour, idx) => (
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
                    <span className="text-accent font-black text-2xl">{tour.price}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Per Person</span>
                  </div>
                  <Button className="rounded-full px-6 bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
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
