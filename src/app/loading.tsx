
"use client"

import { motion } from "framer-motion"
import { Waves } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Waves className="h-10 w-10 text-primary animate-pulse" />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-headline text-xl font-bold tracking-tight">
            RARE <span className="text-accent">ZANZIBAR</span>
          </span>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Preparing your adventure...</p>
        </div>
      </motion.div>
      
      {/* Loading Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-accent"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  )
}
