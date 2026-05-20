
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [quiz, setQuiz] = React.useState({ num1: 0, num2: 0, sum: 0 })
  const [userAnswer, setUserAnswer] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Generate a new math quiz on mount to avoid hydration mismatch
  React.useEffect(() => {
    generateQuiz()
  }, [])

  function generateQuiz() {
    const n1 = Math.floor(Math.random() * 10) + 1
    const n2 = Math.floor(Math.random() * 10) + 1
    setQuiz({ num1: n1, num2: n2, sum: n1 + n2 })
    setUserAnswer("")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (parseInt(userAnswer) !== quiz.sum) {
      toast({
        variant: "destructive",
        title: "Security Check Failed",
        description: "Please solve the math puzzle correctly to prove you are human.",
      })
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your request and will get back to you shortly.",
      })
      setIsSubmitting(false)
      generateQuiz()
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="font-headline text-5xl md:text-6xl mt-4 mb-8">
              Let's Plan Your <span className="text-primary italic">Next Adventure</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              {[
                { icon: <Phone />, label: "Call Us", val: "+255 778 666 810", link: "tel:+255778666810" },
                { icon: <Mail />, label: "Email Us", val: "adventure@rarezanzibar.com", link: "mailto:adventure@rarezanzibar.com" },
                { icon: <MapPin />, label: "Location", val: "Paje East Coast, Zanzibar", link: "https://goo.gl/maps/XYZ123" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6" })}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{item.label}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-accent transition-colors">{item.val}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[300px] rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.494794828135!2d39.5229679!3d-6.2730691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd493c4a242a3%3A0x7a3a91010376d29!2sPaje!5e0!3m2!1sen!2stz!4v1709564242851!5m2!1sen!2stz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-1 w-full"
          >
            <div className="glass p-8 md:p-12 rounded-[40px] shadow-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase ml-1">Full Name</label>
                    <Input required placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase ml-1">Email Address</label>
                    <Input required type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase ml-1">Tour Interest</label>
                  <Select required>
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
                  <Textarea required placeholder="Tell us about your dream trip..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:ring-accent" />
                </div>

                {/* Robot Check Quiz */}
                <div className="space-y-3 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <label className="text-xs font-bold uppercase">Security Quiz (Are you human?)</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                      {quiz.num1} + {quiz.num2} = ?
                    </div>
                    <Input 
                      type="number" 
                      required
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Answer" 
                      className="bg-white/5 border-white/10 rounded-xl h-12 w-24 text-center focus:ring-accent" 
                    />
                  </div>
                </div>

                <Button 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-background font-bold rounded-xl text-lg shadow-xl shadow-accent/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
