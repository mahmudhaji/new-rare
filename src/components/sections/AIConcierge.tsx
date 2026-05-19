
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Calendar, Wallet, Map, Send, Loader2, CheckCircle2, Tent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { generatePersonalizedItinerary, type GeneratePersonalizedItineraryOutput } from "@/ai/flows/generate-personalized-itinerary"

export function AIConcierge() {
  const [loading, setLoading] = React.useState(false)
  const [itinerary, setItinerary] = React.useState<GeneratePersonalizedItineraryOutput | null>(null)
  
  const [form, setForm] = React.useState({
    destination: "Zanzibar" as "Zanzibar" | "Tanzania" | "Both",
    duration: 5,
    budget: "mid-range" as "budget-friendly" | "mid-range" | "luxury" | "ultra-luxury",
    interests: ["beaches", "wildlife"],
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await generatePersonalizedItinerary({
        ...form,
        desiredActivities: ["snorkeling", "safari"],
      })
      setItinerary(res)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ai-concierge" className="py-24 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm">AI Adventure Concierge</span>
            </div>
            <h2 className="font-headline text-5xl md:text-6xl mb-6 leading-tight">
              Let AI Craft Your <span className="text-primary italic">Dream Escape</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our intelligent travel tool creates bespoke Zanzibar and safari itineraries based on your preferences, seasonal trends, and hidden local gems.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-3xl shadow-2xl border border-border/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Destination</label>
                  <Select value={form.destination} onValueChange={(v: any) => setForm({...form, destination: v})}>
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Where to?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Zanzibar">Zanzibar Island</SelectItem>
                      <SelectItem value="Tanzania">Mainland Safari</SelectItem>
                      <SelectItem value="Both">The Full Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Days</label>
                  <Input 
                    type="number" 
                    min={1} 
                    value={form.duration} 
                    onChange={e => setForm({...form, duration: parseInt(e.target.value)})}
                    className="rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Budget Level</label>
                <Select value={form.budget} onValueChange={(v: any) => setForm({...form, budget: v})}>
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder="Budget?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget-friendly">Budget Friendly</SelectItem>
                    <SelectItem value="mid-range">Mid Range Luxury</SelectItem>
                    <SelectItem value="luxury">High-End Luxury</SelectItem>
                    <SelectItem value="ultra-luxury">Ultra Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button disabled={loading} size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-xl h-14 font-bold text-lg">
                {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Tailoring Itinerary...</> : <><Send className="mr-2 h-5 w-5" /> Generate Itinerary</>}
              </Button>
            </form>
          </motion.div>

          <div className="min-h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {itinerary ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full space-y-6"
                >
                  <Card className="border-accent/30 bg-background/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
                    <CardHeader className="bg-primary text-white p-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-headline text-3xl mb-2">{itinerary.itineraryTitle}</CardTitle>
                          <CardDescription className="text-primary-foreground/80">{itinerary.description}</CardDescription>
                        </div>
                        <CheckCircle2 className="h-10 w-10 text-accent" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 max-h-[500px] overflow-y-auto">
                      <div className="space-y-8">
                        {itinerary.dailyPlan.map((day, i) => (
                          <div key={i} className="flex gap-4 relative">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold border border-accent/40">
                                {day.day}
                              </div>
                              {i !== itinerary.dailyPlan.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                            </div>
                            <div className="pb-8">
                              <h4 className="font-bold text-lg mb-2">Day {day.day}</h4>
                              <ul className="space-y-2">
                                {day.activities.map((act, j) => (
                                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                                    {act}
                                  </li>
                                ))}
                              </ul>
                              {day.accommodations && (
                                <div className="mt-3 p-3 bg-secondary/50 rounded-xl border border-border/50 flex items-center gap-3">
                                  <Tent className="h-4 w-4 text-primary" />
                                  <span className="text-xs italic font-medium">{day.accommodations}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {itinerary.estimatedCostRange && (
                        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Wallet className="h-5 w-5 text-accent" />
                            <span className="text-sm font-bold uppercase tracking-widest">Est. Cost</span>
                          </div>
                          <span className="text-xl font-black text-primary">{itinerary.estimatedCostRange}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  <Button variant="outline" className="w-full rounded-2xl h-12" onClick={() => setItinerary(null)}>
                    Start Over
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-12 bg-white/5 rounded-full border border-dashed border-primary/30"
                >
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-10 w-10 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ready to Plan?</h3>
                  <p className="text-muted-foreground">Fill in the form to generate your personal Zanzibar journey.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
