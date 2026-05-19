
"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Waves } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background pt-20">
      {/* Wave Animation */}
      <div className="wave-container">
        <div className="wave"></div>
      </div>
      
      <div className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Waves className="h-8 w-8 text-accent" />
                <span className="font-headline text-2xl font-bold tracking-tight">
                  RARE <span className="text-accent">ZANZIBAR</span>
                </span>
              </div>
              <p className="text-white/70 mb-8 leading-relaxed">
                “Discover Zanzibar, Experience Tanzania, Live the Ocean Dream”
                We are a premium tourism company offering unforgettable travel experiences in East Africa.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-headline text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/70">
                {["About Us", "Our Gallery", "Travel Guide", "FAQs", "Careers"].map(link => (
                  <li key={link}><Link href="#" className="hover:text-accent transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-headline text-xl mb-6">Top Tours</h4>
              <ul className="space-y-4 text-white/70">
                {["Stone Town", "Serengeti Safari", "Mnemba Atoll", "Kitesurfing", "Spice Farm"].map(link => (
                  <li key={link}><Link href="#" className="hover:text-accent transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-headline text-xl mb-6">Contact Info</h4>
              <ul className="space-y-6 text-white/70">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">📍</div>
                  <span>Paje East Coast, Zanzibar, Tanzania</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">📞</div>
                  <span>+255 778 666 810</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">✉️</div>
                  <span>adventure@rarezanzibar.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2024 Rare Zanzibar Adventure. All rights reserved.</p>
            <p>Designed & Developed by <span className="text-accent font-bold">Super_Mtiifu</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
