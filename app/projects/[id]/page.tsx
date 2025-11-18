import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle2, Download, Phone } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData = {
  "riya-heights": {
    name: "Riya Heights",
    location: "Kokar, Ranchi",
    status: "Completed",
    overview:
      "Riya Heights stands as a testament to modern luxury living in the heart of Kokar, Ranchi. This premium residential project features thoughtfully designed apartments with world-class amenities and contemporary architecture. Every aspect has been carefully planned to provide residents with an unparalleled living experience.",
    amenities: [
      "24/7 Security & CCTV Surveillance",
      "Swimming Pool",
      "Fitness Center",
      "Landscaped Gardens",
      "Children's Play Area",
      "Power Backup",
      "Covered Parking",
      "Clubhouse",
      "Jogging Track",
      "Lift Access",
    ],
    specifications: {
      type: "2/3 BHK Apartments",
      area: "1200 - 1800 sq.ft.",
      floors: "12 Floors",
      units: "96 Apartments",
    },
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    floorPlans: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566752229-250ed79c5c1d?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
    ],
  },
  "plaza-residency": {
    name: "Plaza Residency",
    location: "Main Road, Ranchi",
    status: "Ongoing",
    overview:
      "Plaza Residency is an ongoing premium residential project located on Main Road, offering excellent connectivity and modern living spaces. Designed with contemporary aesthetics and functional layouts, this project promises to be a landmark in Ranchi's residential landscape.",
    amenities: [
      "Gated Community",
      "Gymnasium",
      "Indoor Games Room",
      "Community Hall",
      "Rainwater Harvesting",
      "Solar Panels",
      "Intercom Facility",
      "Visitor Parking",
      "CCTV Surveillance",
      "Maintenance Staff",
    ],
    specifications: {
      type: "2/3/4 BHK Apartments",
      area: "1100 - 2200 sq.ft.",
      floors: "15 Floors",
      units: "120 Apartments",
    },
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080",
    floorPlans: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    ],
  },
  "urban-vista": {
    name: "Urban Vista",
    location: "Circular Road, Ranchi",
    status: "Upcoming",
    overview:
      "Urban Vista is our upcoming flagship project on Circular Road, designed to redefine urban living in Ranchi. This high-rise residential tower will feature premium apartments with breathtaking city views, state-of-the-art amenities, and smart home features.",
    amenities: [
      "Smart Home Technology",
      "Rooftop Restaurant",
      "Infinity Pool",
      "Spa & Wellness Center",
      "Multi-tier Security",
      "EV Charging Stations",
      "High-speed Elevators",
      "Sky Garden",
      "Co-working Spaces",
      "Concierge Services",
    ],
    specifications: {
      type: "3/4 BHK Premium Apartments",
      area: "1600 - 2800 sq.ft.",
      floors: "20 Floors",
      units: "80 Apartments",
    },
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974",
    floorPlans: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753051-1978df72c2f8?q=80&w=2070",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
    ],
  },
  "green-valley": {
    name: "Green Valley",
    location: "Hinoo, Ranchi",
    status: "Completed",
    overview:
      "Green Valley represents our commitment to sustainable living with eco-friendly features and extensive green spaces. This completed project in Hinoo offers residents a perfect blend of nature and modern amenities.",
    amenities: [
      "Organic Garden",
      "Eco-friendly Construction",
      "Natural Ventilation",
      "Community Center",
      "Walking Trails",
      "Pet Park",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Waste Management",
      "Amphitheater",
    ],
    specifications: {
      type: "2/3 BHK Eco-friendly Apartments",
      area: "1000 - 1600 sq.ft.",
      floors: "8 Floors",
      units: "64 Apartments",
    },
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    floorPlans: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070",
    ],
  },
  "commercial-hub": {
    name: "Commercial Hub",
    location: "Lalpur, Ranchi",
    status: "Ongoing",
    overview:
      "Commercial Hub is a state-of-the-art commercial complex designed to cater to modern business needs. With premium retail spaces and office suites, this project is set to become a business landmark in Lalpur.",
    amenities: [
      "Prime Location",
      "Ample Parking",
      "High-speed Internet",
      "Central Air Conditioning",
      "Conference Rooms",
      "Cafeteria",
      "Modern Elevators",
      "24/7 Access",
      "Security Systems",
      "Power Backup",
    ],
    specifications: {
      type: "Retail & Office Spaces",
      area: "500 - 3000 sq.ft.",
      floors: "6 Floors",
      units: "48 Commercial Units",
    },
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    floorPlans: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2069",
    ],
  },
  "royal-enclave": {
    name: "Royal Enclave",
    location: "Bariatu, Ranchi",
    status: "Upcoming",
    overview:
      "Royal Enclave is an exclusive villa project offering spacious independent homes with private gardens. Designed for those who seek privacy and luxury, this gated community will set new standards for premium living in Ranchi.",
    amenities: [
      "Independent Villas",
      "Private Gardens",
      "Clubhouse",
      "Swimming Pool",
      "Tennis Court",
      "Landscaped Parks",
      "Gated Security",
      "Underground Wiring",
      "Private Driveways",
      "Premium Finishes",
    ],
    specifications: {
      type: "3/4 BHK Independent Villas",
      area: "2500 - 4000 sq.ft.",
      floors: "G+2 Villas",
      units: "24 Villas",
    },
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    floorPlans: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    ],
  },
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projectsData[id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-end flex-col pb-12 overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img
              src={project.heroImage || "/placeholder.svg"}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-white">
            <div
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                project.status === "Completed"
                  ? "bg-green-500"
                  : project.status === "Ongoing"
                    ? "bg-accent text-accent-foreground"
                    : "bg-white text-primary"
              }`}
            >
              {project.status}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">{project.name}</h1>
            <div className="flex items-center gap-2 text-xl mb-6">
              <MapPin className="h-6 w-6" />
              <span>{project.location}</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.overview}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Type</p>
                    <p className="font-bold">{project.specifications.type}</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Area</p>
                    <p className="font-bold">{project.specifications.area}</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Floors</p>
                    <p className="font-bold">{project.specifications.floors}</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Total Units</p>
                    <p className="font-bold">{project.specifications.units}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">Floor Plans & Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.floorPlans.map((plan, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-80">
                      <img
                        src={plan || "/placeholder.svg"}
                        alt={`Floor Plan ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">Location</h2>
              <Card className="overflow-hidden">
                <div className="relative h-96 bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-xl font-semibold mb-2">{project.name}</p>
                    <p className="text-muted-foreground">{project.location}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
                Interested in {project.name}?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
                Contact us today to schedule a site visit or download the brochure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
