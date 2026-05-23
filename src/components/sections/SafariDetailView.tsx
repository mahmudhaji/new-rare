"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Binoculars, Compass, MapPin, CheckCircle2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageBanner } from "@/components/sections/PageBanner"

interface SafariDetailViewProps {
  safari: any
}

export function SafariDetailView({ safari }: SafariDetailViewProps) {
  return (
    <>
      <PageBanner 
        title={safari.title} 
        subtitle={safari.type} 
        imageId={safari.id} 
      />
      
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <Compass className="h-3 w-3" /> Wildlife Expedition
                </span>
                <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> Tanzania Mainland
                </span>
              </div>
              
              <h2 className="font-headline text-5xl mb-8 leading-tight">{safari.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                {safari.desc} Embark on a premium safari journey through the heart of Tanzania's wild landscapes. Our expeditions are designed to provide the best wildlife viewing opportunities while maintaining the highest standards of luxury and safety.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-3xl bg-secondary/50 border border-border">
                  <Binoculars className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Prime Wildlife</h4>
                  <p className="text-sm text-muted-foreground">Highest chances of Big Five sightings with expert trackers.</p>
                </div>
                <div className="p-6 rounded-3xl bg-secondary/50 border border-border">
                  <ShieldCheck className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-bold mb-2">Private Escort</h4>
                  <p className="text-sm text-muted-foreground">Dedicated 4x4 Land Cruiser with professional guide.</p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <h3 className="text-xl font-bold font-headline">Adventure Highlights:</h3>
                {[
                  "Luxury Tented Camp Accommodations",
                  "Daily Sunrise & Sunset Game Drives",
                  "Expert Naturalist Guided Walks",
                  "All National Park Fees Included",
                  "Bush Breakfast & Sundowner Cocktails"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-14 rounded-full text-lg font-bold">
                Inquire for Booking
              </Button>
            </motion.div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="relative h-[300px] rounded-[40px] overflow-hidden shadow-2xl group"
                  >
                    <Image
                      src={`https://picsum.photos/seed/${safari.id}-${i}/1200/800`}
                      alt={`${safari.title} wildlife ${i}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
