
"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { PageBanner } from "@/components/sections/PageBanner"
import { tourData } from "@/components/sections/Tours"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Clock, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// In a static export, we define which paths to pre-render
export async function generateStaticParams() {
  return tourData.map((tour) => ({
    slug: tour.id,
  }))
}

export default function TourDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const tour = tourData.find((t) => t.id === slug)

  if (!tour) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline mb-4">Tour Not Found</h1>
          <Button asChild><a href="/tours">Back to Tours</a></Button>
        </div>
      </main>
    )
  }

  return (
    <main className="relative pt-20">
      <Navbar />
      <PageBanner 
        title={tour.title} 
        subtitle="Exclusive Island Experience" 
        imageId={tour.id} 
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
                  <Clock className="h-3 w-3" /> {tour.time}
                </span>
                <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> Zanzibar
                </span>
              </div>
              
              <h2 className="font-headline text-5xl mb-8 leading-tight">{tour.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                {tour.desc} Immerse yourself in the breathtaking landscapes and vibrant marine life of Zanzibar. This curated experience is designed for those seeking both relaxation and authentic island adventure.
              </p>

              <div className="space-y-4 mb-10">
                <h3 className="text-xl font-bold font-headline">What's Included:</h3>
                {[
                  "Professional Multi-lingual Guide",
                  "Private Transportation",
                  "All Entrance Fees & Permits",
                  "High-Quality Snorkeling Gear",
                  "Gourmet Lunch & Refreshments"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-14 rounded-full text-lg font-bold">
                Book This Tour
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
                      src={`https://picsum.photos/seed/${tour.id}-${i}/1200/800`}
                      alt={`${tour.title} view ${i}`}
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

      <Footer />
    </main>
  )
}
