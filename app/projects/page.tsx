"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Home, ArrowRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: "riya-heights",
    name: "Riya Heights",
    location: "Kokar, Ranchi",
    status: "Completed",
    description: "Luxury residential apartments with premium amenities and modern architecture",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    units: "48 Premium Units",
    type: "Residential",
    price: "₹45L - ₹85L",
  },
  {
    id: "plaza-residency",
    name: "Plaza Residency",
    location: "Main Road, Ranchi",
    status: "Ongoing",
    description: "Contemporary residential complex featuring spacious apartments and world-class facilities",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    units: "64 Premium Units",
    type: "Residential",
    price: "₹55L - ₹1.2Cr",
  },
  {
    id: "urban-vista",
    name: "Urban Vista",
    location: "Circular Road, Ranchi",
    status: "Upcoming",
    description: "Premium high-rise apartments designed for urban lifestyle with stunning city views",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    units: "72 Premium Units",
    type: "Residential",
    price: "₹65L - ₹1.5Cr",
  },
  {
    id: "green-valley",
    name: "Green Valley",
    location: "Hinoo, Ranchi",
    status: "Completed",
    description: "Eco-friendly residential project with landscaped gardens and sustainable features",
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop",
    units: "36 Premium Units",
    type: "Residential",
    price: "₹50L - ₹95L",
  },
  {
    id: "commercial-hub",
    name: "Commercial Hub",
    location: "Lalpur, Ranchi",
    status: "Ongoing",
    description: "Modern commercial complex with retail spaces and office suites",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    units: "24 Commercial Units",
    type: "Commercial",
    price: "₹80L - ₹2Cr",
  },
  {
    id: "royal-enclave",
    name: "Royal Enclave",
    location: "Bariatu, Ranchi",
    status: "Upcoming",
    description: "Exclusive residential villas with private gardens and premium amenities",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    units: "20 Luxury Villas",
    type: "Residential",
    price: "₹1.2Cr - ₹3Cr",
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.status === filter)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Added top margin for black header, reduced font size */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
              alt="Our Projects"
              className="w-full h-full object-cover scale-105 animate-scale-in"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>

          <div className="relative z-10 container-85 mx-auto px-6 lg:px-12 text-center text-white max-w-4xl">
            <div className="inline-block mb-6 px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full animate-fade-in-up">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Portfolio</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed animate-fade-in-up">
              Discover our portfolio of exceptional developments across Ranchi
            </p>
          </div>
        </section>

        {/* Filter Section - Proper sticky positioning below black header */}
        <section className="py-8 bg-muted sticky top-16 z-40 border-b border-border">
          <div className="container-85 mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {["All", "Completed", "Ongoing", "Upcoming"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-7 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                    filter === status
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-background text-foreground hover:bg-primary/10 hover:scale-105"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid - Better spacing and layout */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container-85 mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          project.status === "Completed"
                            ? "bg-green-500/90 text-white"
                            : project.status === "Ongoing"
                              ? "bg-primary/90 text-primary-foreground"
                              : "bg-foreground/90 text-background"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-background/90 text-foreground backdrop-blur-sm">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-7 space-y-5">
                    <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Home className="h-4 w-4" />
                        <span>{project.units}</span>
                      </div>
                      <span className="text-primary font-bold">{project.price}</span>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group-hover:shadow-lg py-5 text-sm rounded-xl"
                    >
                      <Link href={`/projects/${project.id}`} className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Reduced font size and better spacing */}
        <section className="py-24 bg-gradient-to-br from-foreground to-foreground/95 text-background">
          <div className="container-85 mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Interested in a Project?</h2>
            <p className="text-base md:text-lg mb-10 text-background/95 leading-relaxed">
              Get in touch with our team to learn more about our developments
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 px-10 py-7 text-base rounded-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
