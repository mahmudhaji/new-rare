
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PlaceHolderImages } from "@/lib/placeholder-images"

interface PageBannerProps {
  title: string
  subtitle?: string
  imageId: string
}

export function PageBanner({ title, subtitle, imageId }: PageBannerProps) {
  const bannerImg = PlaceHolderImages.find(img => img.id === imageId)

  return (
    <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center">
      <Image
        src={bannerImg?.imageUrl || "https://picsum.photos/seed/zanzibar-banner/1920/1080"}
        alt={title}
        fill
        priority
        className="object-cover"
        data-ai-hint={bannerImg?.imageHint || "zanzibar beach"}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-5xl md:text-7xl text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg uppercase tracking-widest font-bold"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
