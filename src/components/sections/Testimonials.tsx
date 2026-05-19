
"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reviews = [
  {
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "The safari in Serengeti was life-changing. Rare Zanzibar Adventure handled every detail with luxury and care. Highly recommended!",
    stars: 5,
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    text: "Kitesurfing in Paje with their instructors was the highlight of my trip. The equipment is top-notch and the vibe is unbeatable.",
    stars: 5,
  },
  {
    name: "Elena Petrov",
    location: "Moscow, Russia",
    text: "Stone Town was magical. Our guide knew every hidden corner and history. The AI planner also helped us find amazing local restaurants.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Guest Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl mt-2"
          >
            What Our Explorers Say
          </motion.h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((rev, idx) => (
              <CarouselItem key={idx}>
                <div className="p-10 bg-background rounded-[40px] shadow-2xl relative mx-4">
                  <Quote className="absolute top-10 right-10 h-16 w-16 text-primary/10" />
                  <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium mb-10 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${rev.name}`} />
                      <AvatarFallback>{rev.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{rev.name}</h4>
                      <p className="text-xs text-muted-foreground">{rev.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 bg-primary text-white border-none h-12 w-12" />
            <CarouselNext className="-right-12 bg-primary text-white border-none h-12 w-12" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
