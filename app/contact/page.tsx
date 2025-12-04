"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry! We will get back to you soon.")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
              alt="Contact MTathagat Developers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          </div>

          <div className="relative z-10 container-85 mx-auto px-6 lg:px-12 text-center text-white max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Let's discuss your dream property
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container-85 mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We'd love to hear from you. Our team is ready to answer your questions and help you find the perfect
                    property.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: Phone, title: "Phone", content: "7759893555", href: "tel:7759893555" },
                    {
                      icon: MessageSquare,
                      title: "WhatsApp",
                      content: "Chat with us on WhatsApp",
                      href: "https://wa.me/917759893555",
                    },
                    { icon: Mail, title: "Email", content: "tathagat3337@gmail.com", href: "mailto:tathagat3337@gmail.com" },
                    {
                      icon: MapPin,
                      title: "Property Location",
                      content: 
`Tathagat Residency
Opp. Deep Paradise Apartment
Ganga Path, Dr. B Bhattacharya Road
West Patel Nagar, Patna
Landmark: Axis Bank Patel Nagar Branch
Pincode: 800029`,
                      href: null,
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-7 flex items-start gap-5">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-muted-foreground hover:text-primary transition-colors text-base"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-base whitespace-pre-line leading-relaxed">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>  
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-2 shadow-2xl">
                  <CardContent className="p-8 md:p-10 space-y-7">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="py-5 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="py-5 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="py-5 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="text-sm"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full text-base py-6 rounded-xl">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-muted">
          <div className="container-85 mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center">Visit Our Office</h2>
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative h-[400px] bg-secondary flex items-center justify-center">
                  <div className="text-center space-y-5">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-xl md:text-2xl font-semibold">Tathagat Residency</p>
                    <p className="text-base md:text-lg text-muted-foreground">
                      Opp. Deep Paradise Apartment, Ganga Path,<br />
                      Dr. B Bhattacharya Road, West Patel Nagar, Patna<br />
                      Landmark: Axis Bank Patel Nagar Branch<br />
                      Pincode: 800029
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
