"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isHomePage
          ? isScrolled
            ? "bg-white shadow-md py-3 md:py-4"
            : "bg-transparent py-5 md:py-6"
          : "bg-white shadow-md py-3 md:py-4"
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-10 logo-shimmer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="MTathagat Developers"
              width={isScrolled ? 180 : 220}
              height={isScrolled ? 45 : 55}
              className={`w-auto transition-all duration-500 ${
                isScrolled ? "h-10 md:h-11" : "h-12 md:h-14"
              }`}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {[
              { href: "/#overview", label: "OVERVIEW" },
              { href: "/#location", label: "LOCATION" },
              { href: "/#plans", label: "PLANS" },
              { href: "/#specifications", label: "SPECIFICATIONS" },
              { href: "/#gallery", label: "GALLERY" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-wider text-black hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="transition-all duration-300 text-xs font-semibold tracking-wider px-6 border-black text-black hover:bg-black hover:text-white"
            >
              {/* FIXED DOWNLOAD LINK */}
              <a href="/Tathagat.pdf" download="Tathagat.pdf">
                E BROCHURE
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 text-xs font-semibold tracking-wider px-6"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-3 pb-6">
            {[
              { href: "/#overview", label: "OVERVIEW" },
              { href: "/#location", label: "LOCATION" },
              { href: "/#plans", label: "PLANS" },
              { href: "/#specifications", label: "SPECIFICATIONS" },
              { href: "/#gallery", label: "GALLERY" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-semibold tracking-wider py-2 px-4 rounded-lg text-black hover:bg-black/10 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE BUTTONS */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              
              {/* FIXED MOBILE DOWNLOAD BUTTON */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full text-xs font-semibold tracking-wider border-black text-black hover:bg-black hover:text-white"
              >
                <a href="/Tathagat.pdf" download="Tathagat.pdf">
                  E BROCHURE
                </a>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 w-full text-xs font-semibold tracking-wider"
              >
                <Link href="/contact">CONTACT US</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
