"use client"

import {
  Plane,
  Train,
  Route,
  TreePine,
  ShoppingBag,
  Hospital,
  School,
  MapPin,
  Home,  
  Car,
  Dumbbell,
  Shield,
  Wifi,
  ArrowRight,
  Download,
  Star,
  Compass
} from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloorPlanCard, type FloorPlanData } from "@/components/floor-plan-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"

// ------------------------------------------
// FLOOR PLAN DATA
// ------------------------------------------
const floorPlansData: FloorPlanData[] = [
  {   
  id: "typical",
  title: "Flats 101, 201, 301",
  // area: "1180 Sq.Ft. (Carpet)",
  area: "1880 Sq.Ft.",
  thumbnail:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
  fullImage: "101.png",
  builtUpArea: "1450 Sq.Ft.",
  superBuiltUpArea: "1880 Sq.Ft.",
},
{ 
  id: "standard",
  title: "Flats 102, 202, 302",
  // area: "1035 Sq.Ft. (Carpet)",
  area: "1670 Sq.Ft.",
  thumbnail:
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
  fullImage: "102.png",
  builtUpArea: "1285 Sq.Ft.",
  superBuiltUpArea: "1670 Sq.Ft.",
},

  // {
  //   id: "3bhk-2359",
  //   title: "3 BHK - 2359 Sft.",
  //   area: "2,359 Sq.Ft.",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
  //   fullImage: "3.jpeg",
  // },  
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setActiveTestimonial((prev) => (prev + 1) % 3),
      5000
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">

        {/* ---------------------------------------------------
            HERO SECTION
        ---------------------------------------------------- */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/newHeroBannerPhoto.jpg"
              alt="MTathagat Luxury Residences"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30" />
          </div>

          <div className="container-85 mx-auto px-6 z-10 text-center py-32">
            <div className="max-w-5xl mx-auto space-y-8">
              <p className="text-sm md:text-base text-foreground/70 tracking-[0.3em] font-light uppercase animate-fade-in-down">
                Crafted for the Exceptional
              </p>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-[0.95] tracking-tight animate-fade-in-up">
                Boutique Styled Homes
              </h1>

              <div
                className="space-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-base md:text-lg text-foreground/80 tracking-[0.2em] uppercase font-light">
                 for a Distinguished Lifestyle
                </p>
                <p className="text-sm md:text-base text-foreground/70 tracking-[0.15em] uppercase font-light">
                  At Patel Nagar, Patna, Bihar
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse-slow" />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------
            OVERVIEW SECTION
        ---------------------------------------------------- */}
        <section id="overview" className="py-20 md:py-28 bg-white">
          <div className="container-85 mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
                  OVERVIEW
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight">
                  Modern sanctuary where convenience and fulfilment come together
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  At <strong>M Tathagat Developers Private Limited</strong>, we
                  believe that a home is more than just four walls—it's a space
                  where comfort, harmony, and luxury come together.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Each project is crafted with intelligent space planning,
                  premium materials, and a focus on natural light.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  With a vision to redefine boutique luxury living, we deliver
                  timeless designs and trustworthy construction quality.
                </p>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground rounded-full px-8"
                >
                  <Link href="#plans" className="flex items-center gap-2">
                    Explore Floor Plans <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <img
                  src="/Luxury_Floor_Image.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------
            AMENITIES SECTION
        ---------------------------------------------------- */}
        <section id="specifications" className="py-20 md:py-28 bg-muted">
          <div className="container-85 mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
                AMENITIES
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 mb-4">
                World-Class Features
              </h2>

              <p className="text-base text-muted-foreground">
                Designed for comfort, convenience & luxury living
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: "Spacious Layouts", desc: "3 options" },
                { icon: Car, title: "Covered Parking", desc: "Reserved slots" },
                {
                  icon: TreePine,
                  title: "Terrace Gardens",
                  desc: "Green spaces",
                },
                {
                  icon: Compass,
                  title: "Vastu Shastra",
                  desc: "Peace & Prosperity",
                },
                {
                  icon: Shield,
                  title: "24/7 Security",
                  desc: "CCTV surveillance",
                },
                {
                  icon: Wifi,
                  title: "High-Speed WiFi",
                  desc: "Common areas",
                },
                {
                  icon: MapPin,
                  title: "Prime Location",
                  desc: "Well connected",
                },
                // {
                //   icon: Home,
                //   title: "Fitness Center",
                //   desc: "Well-equipped",
                // },
              ].map((amenity, index) => (
                <Card
                  key={index}
                  className="border border-border/50 bg-white hover:border-primary/30 transition-all rounded-lg"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <amenity.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{amenity.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {amenity.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------
            VASTU SHASTRA SECTION (FIXED)
        ---------------------------------------------------- */}
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
                Our homes are carefully designed following essential Vastu
                principles—ensuring natural light, proper ventilation, and
                positive energy flow that promotes harmony, good health and long-term prosperity.
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
                  <h3 className="font-semibold text-foreground text-lg">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
 

<section id="plans" className="py-24 md:py-36 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-primary font-bold text-sm tracking-[0.25em] uppercase">
        FLOOR PLANS
      </span>

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-4 text-foreground">
        Premium Floor Plans
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Explore our beautifully crafted layouts designed for luxury living
      </p>
    </div>

    {/* Cards Grid */}
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-12">

      {floorPlansData.map((plan) => (
        <div
          key={plan.id}
          className="w-full sm:w-[360px] md:w-[420px] lg:w-[480px] flex flex-col items-center gap-6"
        >

          {/* Fixed Height Card Wrapper */}
          <div className="w-full h-[520px] flex items-center">
            <FloorPlanCard plan={plan} />
          </div>

          {/* Styled Area Details */}
          <div className="w-full bg-muted/30 rounded-xl p-5 shadow-sm text-center space-y-1">
            {/* <p className="text-sm font-semibold text-foreground tracking-wide">
              Carpet Area — <span className="text-primary">{plan.area}</span>
            </p> */}

            {plan.builtUpArea && (
              <p className="text-sm font-medium text-muted-foreground">
                Built-up Area — <span className="text-foreground">{plan.builtUpArea}</span>
              </p>
            )}

            {plan.superBuiltUpArea && (
              <p className="text-sm font-medium text-muted-foreground">
                Super Built-up Area — <span className="text-foreground">{plan.superBuiltUpArea}</span>
              </p>
            )}
          </div>

        </div>
      ))}

    </div>
  </div>
</section>


        {/* ---------------------------------------------------
            LOCATION ADVANTAGE SECTION
        ---------------------------------------------------- */}
        <section id="location" className="py-20 md:py-28 bg-muted">
          <div className="container-85 mx-auto px-6">

            <h2 className="text-center font-serif text-3xl md:text-4xl lg:text-5xl mb-12">
              LOCATION ADVANTAGE
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT: DETAILS */}
              <div className="border border-foreground/20 bg-white rounded-xl p-8 md:p-12">
                <div className="space-y-8">

                  <LocationItem
                    icon={Plane}
                    label="Airport:"
                    text="JP Narayan International — 11 min (4.3 Km)"
                  />

                  <LocationItem
                    icon={Train}
                    label="Railway Station:"
                    text="Patna Junction — 15 min (6.3 Km)"
                  />

                  <LocationItem
                    icon={Route}
                    label="Marine Drive:"
                    text="10 min (4.9 Km)"
                  />

                  <LocationItem
                    icon={TreePine}
                    label="Patna Zoo:"
                    text="7 min (2.5 Km)"
                  />

                  <LocationItem
                    icon={ShoppingBag}
                    label="Malls:"
                    text="City Centre Mall — 14 min (6.2 Km), P&M Mall — 8 min (2.6 Km)"
                  />

                  <LocationItem
                    icon={Hospital}
                    label="Hospitals:"
                    text="IGIMS — 6 min (1.8 Km), Paras HMRI — 8 min (3 Km), Medanta — 20 min (10 Km), AIIMS — 28 min (12 Km)"
                  />

                  <LocationItem
                    icon={School}
                    label="Schools:"
                    text="Loyola — 9 min (3 Km), Notre Dame — 9 min (2.8 Km), St. Michael’s — 11 min (4 Km), St. Karen’s — 17 min (7.5 Km)"
                  />

                </div>
              </div>

              {/* RIGHT: MAP IMAGE */}
              <div className="w-full h-auto rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/Map.png"
                  alt="Location Map"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ---------------------------------------------------
            GALLERY SECTION
        ---------------------------------------------------- */}
        <section id="gallery" className="py-20 md:py-28 bg-white">
          <div className="container-85 mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-destructive font-bold text-sm tracking-[0.2em] uppercase">
                GALLERY
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 mb-4">
                Visual Journey
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                Explore our stunning architecture and interiors
              </p>
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                // "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600",
                // "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
                // "https://volzero.com/img/article/104477_52772.jpg",
                // "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
                "1.jpeg",
                "2.jpeg",
                "3.jpeg",
                "5.jpeg",
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300" />
                </div>
              ))} 
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------
            BROCHURE DOWNLOAD SECTION
        ---------------------------------------------------- */}
        <section className="py-20 md:py-28 bg-primary/5">
          <div className="container-85 mx-auto px-6 text-center max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Download Our Brochure
            </h2>

            <p className="text-base text-muted-foreground mb-10">
              Get detailed information about floor plans, pricing, and amenities
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground px-10 py-6 rounded-full"
              >
                <a
                  href="/Tathagat.pdf"
                  target="_blank"
                  download="Tathagat-Residency-Blueprint.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" /> Download Brochure
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/20 px-10 py-6 rounded-full"
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER + WHATSAPP */}
      <Footer />
      <WhatsAppButton />
    </>
  )
}

/* ---------------------------------------------------
    COMPONENT FOR LOCATION ROWS
---------------------------------------------------- */
function LocationItem({ icon: Icon, label, text }) {
  return (
    <div className="flex gap-5">
      <Icon className="h-6 w-6 text-primary shrink-0" />
      <p className="text-foreground text-sm leading-relaxed">
        <strong>{label}</strong> {text}
      </p>
    </div>
  )
}
