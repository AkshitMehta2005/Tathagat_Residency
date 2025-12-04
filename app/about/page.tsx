import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073"
              alt="MTathagat Developers Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          </div>

          <div className="relative z-10 container-85 mx-auto px-6 lg:px-12 text-center text-white max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              About MTathagat Developers
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Building trust, creating landmarks, and delivering excellence
            </p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container-85 mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Who We Are</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                MTathagat Developers Pvt. Ltd. is a leading real estate development company committed to transforming
                the landscape of residential and commercial properties.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our team of experienced professionals brings together expertise in architecture, engineering,
                construction, and project management to deliver properties that exceed expectations.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
              <Card className="border-none shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover-lift">
                <CardContent className="p-10 space-y-5">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold gradient-text">50+</h3>
                  <p className="text-base text-muted-foreground">Projects Delivered</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover-lift">
                <CardContent className="p-10 space-y-5">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold gradient-text">1000+</h3>
                  <p className="text-base text-muted-foreground">Happy Families</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover-lift">
                <CardContent className="p-10 space-y-5">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold gradient-text">15+</h3>
                  <p className="text-base text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container-85 mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
                <CardContent className="p-10 space-y-5">
                  <Target className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To deliver exceptional real estate solutions that create lasting value for our customers,
                    stakeholders, and communities through innovative design and quality construction.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
                <CardContent className="p-10 space-y-5">
                  <Eye className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To be the most trusted real estate developer in the region, known for integrity, innovation, and
                    commitment to excellence in creating landmarks that stand the test of time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
                <CardContent className="p-10 space-y-5">
                  <Heart className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold">Our Values</h3>
                  <ul className="space-y-3 text-base text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span>Integrity and transparency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span>Customer-centric approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span>Quality and excellence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span>Innovation and sustainability</span>
                    </li>
                  </ul>
                </CardContent>
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
