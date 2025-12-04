import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Logo + About + Social */}
          <div>
            <Image
              src="/logo.png"
              alt="MTathagat Developers"
              width={200}
              height={50}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />

            <p className="text-background/80 mb-6 leading-relaxed">
              Building dreams into reality with exceptional real estate developments in Patna and beyond.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/mataghatdevelopers" },
                { icon: Instagram, href: "https://www.instagram.com/tathagat_developers/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/mtathagat-developers-private-limited/about/" },
                { icon: Twitter, href: "https://x.com/MtathagatL" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-background group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/80 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">

              {/* Address — click to open Google Maps */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/XwMWYwzt39KWQkWQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors leading-relaxed"
                >
                  Tathagat Residency, Opp. Deep Paradise Apartment,  
                  Ganga Path, Dr. B Bhattacharya Road,  
                  West Patel Nagar, Patna — 800029  
                  <br />
                  <span className="text-primary font-semibold">Landmark: Axis Bank Patel Nagar Branch</span>
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+917759893555" className="text-background/80 hover:text-primary transition-colors">
                  +91 77598 93555
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@mtathagat.com" className="text-background/80 hover:text-primary transition-colors">
                  tathagat3337@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} MTathagat Developers Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-background/60 hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
