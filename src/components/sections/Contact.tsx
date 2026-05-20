"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, ShieldCheck, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { handleContactSubmission } from "@/app/actions/contact-action"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  tour: z.string().min(1, { message: "Please select a tour interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  securityAnswer: z.string().min(1, { message: "Security answer is required." }),
})

export function Contact() {
  const { toast } = useToast()
  const [quiz, setQuiz] = React.useState({ num1: 0, num2: 0, sum: 0 })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      tour: "",
      message: "",
      securityAnswer: "",
    },
  })

  React.useEffect(() => {
    generateQuiz()
  }, [])

  function generateQuiz() {
    const n1 = Math.floor(Math.random() * 10) + 1
    const n2 = Math.floor(Math.random() * 10) + 1
    setQuiz({ num1: n1, num2: n2, sum: n1 + n2 })
    form.setValue("securityAnswer", "")
  }

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    if (parseInt(values.securityAnswer) !== quiz.sum) {
      toast({
        variant: "destructive",
        title: "Security Check Failed",
        description: "Please solve the math puzzle correctly.",
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      const result = await handleContactSubmission({
        name: values.name,
        email: values.email,
        tour: values.tour,
        message: values.message,
      });

      if (result.success) {
        toast({
          title: "Booking Success!",
          description: `A confirmation email has been sent to ${values.email}. We'll be in touch!`,
        })
        form.reset()
        generateQuiz()
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Something went wrong. Please try again or contact us via WhatsApp.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="tour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase">Tour Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12">
                              <SelectValue placeholder="What are you interested in?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Zanzibar Tours">Zanzibar Tours</SelectItem>
                            <SelectItem value="Tanzania Safaris">Tanzania Safaris</SelectItem>
                            <SelectItem value="Water Sports">Water Sports</SelectItem>
                            <SelectItem value="Full Expedition">Full Expedition</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase">Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your dream trip..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:ring-accent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-3 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="h-4 w-4 text-accent" />
                      <label className="text-xs font-bold uppercase">Security Quiz (Are you human?)</label>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-bold bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                        {quiz.num1} + {quiz.num2} = ?
                      </div>
                      <FormField
                        control={form.control}
                        name="securityAnswer"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Answer" className="bg-white/5 border-white/10 rounded-xl h-12 text-center focus:ring-accent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-accent hover:bg-accent/90 text-background font-bold rounded-xl text-lg shadow-xl shadow-accent/20 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Booking Request</>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
