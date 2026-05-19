
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="font-headline text-5xl md:text-6xl mt-4 mb-8">
              Let's Plan Your <span className="text-primary italic">Next Adventure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Our travel specialists are ready to help you craft the perfect experience. Visit us in Paje or drop us a message anytime.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone />, label: "Call Us", val: "+255 778 666 810", link: "tel:+255778666810" },
                { icon: <Mail />, label: "Email Us", val: "adventure@rarezanzibar.com", link: "mailto:adventure@rarezanzibar.com" },
                { icon: <MapPin />, label: "Location", val: "Paje East Coast, Zanzibar", link: "#" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6" })}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{item.label}</p>
                    <a href={item.link} className="text-xl font-bold hover:text-accent transition-colors">{item.val}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <Button onClick={() => window.open('https://wa.me/255778666810')} className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 h-12 flex gap-2">
                <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-1 w-full"
          >
            <div className="glass p-8 md:p-12 rounded-[40px] shadow-2xl border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase ml-1">Tour Interest</label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12">
                      <SelectValue placeholder="What are you interested in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zanzibar">Zanzibar Tours</SelectItem>
                      <SelectItem value="safari">Tanzania Safaris</SelectItem>
                      <SelectItem value="water">Water Sports</SelectItem>
                      <SelectItem value="multi">Full Expedition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase ml-1">Your Message</label>
                  <Textarea placeholder="Tell us about your dream trip..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:ring-accent" />
                </div>

                <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-background font-bold rounded-xl text-lg shadow-xl shadow-accent/20">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
