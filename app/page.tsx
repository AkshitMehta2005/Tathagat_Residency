"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloorPlanCard, type FloorPlanData } from "@/components/floor-plan-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Car, TreePine, Dumbbell, Shield, Wifi, ArrowRight, Download, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const floorPlansData: FloorPlanData[] = [
  {
    id: "typical",
    title: "Typical Floor Plan",
    area: "2,100 Sq.Ft.",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
    fullImage: "1.jpg",
  },
  {
    id: "3bhk-2461",
    title: "3 BHK - 2461 Sft.",
    area: "2,461 Sq.Ft.",
    thumbnail: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
    fullImage: "2.jpg",
  },
  {
    id: "3bhk-2359",
    title: "3 BHK - 2359 Sft.",
    area: "2,359 Sq.Ft.",
    thumbnail: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
    fullImage: "3.jpg",
  },
  
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => { 
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section - Reduced font sizes and improved spacing */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img src="/hero-building.jpg" alt="MTathagat Luxury Residences" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30" />
          </div>

          <div className="container-85 mx-auto px-6 relative z-10 text-center py-32">
            <div className="max-w-5xl mx-auto space-y-8">
              <p className="text-sm md:text-base text-foreground/70 tracking-[0.3em] font-light uppercase animate-fade-in-down">
                Like Nothing
              </p>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-[0.95] tracking-tight animate-fade-in-up drop-shadow-sm">
                ELSE
              </h1>
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-base md:text-lg text-foreground/80 tracking-[0.2em] uppercase font-light">
                  Boutique Styled Residences
                </p>
                <p className="text-sm md:text-base text-foreground/70 tracking-[0.15em] uppercase font-light">
                  At Nanakramguda, Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse-slow" />
            </div>
          </div>
        </section>

{/* Overview Section - Clean, light aesthetic */}
<section id="overview" className="py-20 md:py-28 bg-white">
  <div className="container-85 mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <div className="inline-block">
          <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
            OVERVIEW
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight">
          Modern sanctuary where convenience and fulfilment come together
        </h2>

        {/* --- COMPANY DESCRIPTION INSERTED HERE --- */}
        <p className="text-base text-muted-foreground leading-relaxed">
          At <strong>M Tathagat Developers Private Limited</strong>, we believe that a home is more than just four walls—it's a space where 
          comfort, harmony, and luxury come together. Our mission is to craft premium residences that reflect the perfect 
          balance of modern living and traditional Vastu principles, ensuring peace, positivity, and prosperity for every homeowner.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          Each of our projects is designed with attention to detail, intelligent space planning, and superior construction 
          quality, offering residents a lifestyle defined by elegance, exclusivity, and functionality. From sunlit, 
          well-ventilated homes to rooftop gardens and secure environments, we focus on creating spaces that inspire pride 
          and satisfaction.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          With a vision to redefine boutique luxury living, M Tathagat Developers stands for trust, transparency, and timeless 
          design—building homes that truly feel like a part of you.
        </p>
        {/* --- END COMPANY DESCRIPTION --- */}

        <div className="pt-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground hover:text-white transition-all duration-300 px-8 bg-transparent rounded-full"
          >
            <Link href="#plans" className="flex items-center gap-2">
              Explore Floor Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2080"
          alt="Luxury Residence"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>
 

        {/* Amenities Section - Soft, minimal card design */}
        <section id="specifications" className="py-20 md:py-28 bg-muted">
          <div className="container-85 mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">AMENITIES</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mt-6 mb-4">
                World-Class Features
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every detail designed for your comfort and convenience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: "Spacious Layouts", desc: "3 & 4 BHK options" },
                { icon: Car, title: "Covered Parking", desc: "Reserved slots" },
                { icon: TreePine, title: "Landscaped Gardens", desc: "Green spaces" },
                { icon: Dumbbell, title: "Fitness Center", desc: "Modern equipment" },
                { icon: Shield, title: "24/7 Security", desc: "CCTV surveillance" },
                { icon: Wifi, title: "High-Speed WiFi", desc: "Common areas" },
                { icon: MapPin, title: "Prime Location", desc: "Well connected" },
                { icon: Home, title: "Clubhouse", desc: "Recreation hub" },
              ].map((amenity, index) => (
                <Card
                  key={index}
                  className="border border-border/50 hover:border-primary/30 transition-all duration-300 group bg-white text-center rounded-lg"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                      <amenity.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{amenity.title}</h3>
                    <p className="text-xs text-muted-foreground">{amenity.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        {/* Vastu Shastra Section - Peace & Prosperity */}
<section id="vastu" className="py-20 md:py-28 bg-primary/5">
  <div className="container-85 mx-auto px-6">
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
        VASTU SHASTRA
      </span>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mt-6 mb-4">
        Vastu Shastra for Home: Perfect Directions for Peace & Prosperity
      </h2>

      <p className="text-base text-muted-foreground leading-relaxed">
        Our homes are carefully designed following essential Vastu principles—
        ensuring natural light, proper ventilation, and positive directional flow
        that promotes harmony, good health, and long-term prosperity.
      </p>
    </div>  

    {/* Vastu Image Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "https://www.appliedvastu.com/userfiles/clix_applied_vastu/images/Vastu%20for%20Home_House%20Vastu_Vastu%20Tips%20House.JPG",
        "https://th.bing.com/th/id/R.7f97aa434d5509366f31709bb80f2ade?rik=a%2fAQYcAuuEGV2g&riu=http%3a%2f%2fredastrologer.com%2fwp-content%2fuploads%2f2020%2f07%2fvastu-theme.jpg&ehk=1xN0XH6osmJWXd1x2jmBmtyuWay%2f%2fYtS4h0sYCGwUuQ%3d&risl=&pid=ImgRaw&r=0",
        "https://monicawadkar.com/wp-content/uploads/2024/04/vastushatra-3.jpg",
        "https://www.nobroker.in/blog/wp-content/uploads/2023/12/vastu-shastra-for-flats-and-apartments.jpg",
      ].map((img, index) => (
        <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
          <img
            src={img}
            alt={`Vastu Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300"></div>
        </div>
      ))}
    </div>

    {/* Key Vastu Points */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "North & East Facing Homes",
          desc: "Ensures prosperity, positivity & the best natural light flow.",
        },
        {
          title: "Balanced Energy Layout",
          desc: "Bedrooms, kitchen & living spaces placed according to Vastu rules.",
        },
        {
          title: "Healthy Living Environment",
          desc: "Better ventilation, sunlight & energy alignment for wellbeing.",
        },
      ].map((point, index) => (
        <div key={index} className="text-center space-y-3">
          <h3 className="font-semibold text-foreground text-lg">{point.title}</h3>
          <p className="text-sm text-muted-foreground">{point.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>





               
               {/* FLOOR PLANS */}
      <section id="plans" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
              FLOOR PLANS
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mt-6 mb-4">
              Floor Plans
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Explore our meticulously planned layouts
            </p>
          </div>

          {/* ⭐ PERFECT CENTER GRID */}
          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            justify-items-center 
            place-items-center
          ">
            {floorPlansData.map((plan) => (
              <FloorPlanCard key={plan.id} plan={plan} />
            ))}
          </div>

        </div>

      </section>


{/* Location Section - Clean, minimal design */}
<section id="location" className="py-20 md:py-28 bg-muted">
  <div className="container-85 mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div className="space-y-6">
        <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
          LOCATION
        </span>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight">
          Strategically Located for Your Convenience
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed">
          Enjoy unmatched connectivity to major landmarks, hospitals, educational institutions, 
          and lifestyle destinations across Patna.
        </p>

        {/* Updated Points */}
        <div className="space-y-3 pt-4">
          {[
            "JP Narayan International Airport: 11 min (4.3 Km)",
            "Patna Junction: 15 min (6.3 Km)",
            "IGIMS Hospital: 6 min (1.8 Km)",
            "Paras HMRI Hospital: 8 min (3 Km)",
            "Medanta Hospital: 20 min (10 Km)",
            "AIIMS Patna: 28 min (12 Km)",
            "Patna Zoo: 7 min (2.5 Km)",
            "Marine Drive: 10 min (4.9 Km)",
            "City Centre Mall: 14 min (6.2 Km)",
            "P&M Mall: 8 min (2.6 Km)",
            "Loyola High School: 9 min (3 Km)",
            "Notre Dame Academy: 9 min (2.8 Km)",
            "St. Michael's High School: 11 min (4 Km)",
            "St. Karen's High School: 17 min (7.5 Km)",
          ].map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-foreground text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[500px] rounded-lg overflow-hidden">
        <img
          src="/map.jpeg"
          alt="Location Map"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>


        {/* Gallery Section - Light, clean aesthetic */}
        <section id="gallery" className="py-20 md:py-28 bg-white">
          <div className="container-85 mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">GALLERY</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mt-6 mb-4">
                Visual Journey
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Explore our stunning architecture and interiors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
                "/Milekh ji G+3 Final Render.1 ( 12-11-2025 ).jpg",
                // "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600",
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
                
              ].map((img, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Brochure CTA Section - Minimal design */}
<section className="py-20 md:py-28 bg-primary/5">
  <div className="container-85 mx-auto px-6 text-center max-w-4xl">
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6">
      Download Our Brochure
    </h2>

    <p className="text-base text-muted-foreground mb-10 leading-relaxed">
      Get detailed information about floor plans, pricing, and amenities
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      {/* Download Button */}
      <Button 
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-sm rounded-full"
      >
        <a
          href="/Tathagat.pdf"
          target="_blank"
          download="Tathagat-Residency-Blueprint.pdf"
          className="flex items-center gap-2"
        >
          <Download className="h-5 w-5" />
          Download Brochure
        </a>
      </Button>

      {/* Schedule Visit */}
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-foreground/20 text-foreground hover:bg-foreground hover:text-white px-10 py-6 text-sm rounded-full bg-transparent"
      >
        <Link href="/contact">Schedule a Visit</Link>
      </Button>

    </div>
  </div>
</section>


        {/* Testimonials Section - Light card design */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-85 mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">TESTIMONIALS</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mt-6 mb-4">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  review: "Exceptional quality and timely delivery. The attention to detail is remarkable.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256",
                  rating: 5,
                },
                {
                  name: "Priya Sharma",
                  review: "Professional team and transparent process. Highly recommended for home buyers.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256",
                  rating: 5,
                },
                {
                  name: "Amit Patel",
                  review: "Outstanding service from start to finish. The build quality exceeded expectations.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`border border-border/50 hover:border-primary/30 transition-all duration-300 bg-white rounded-lg ${
                    index === activeTestimonial ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  <CardContent className="p-8 space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-border">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-base text-foreground">{testimonial.name}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{testimonial.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
