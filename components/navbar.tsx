"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Dampak", href: "#dampak" },
  { label: "Galeri", href: "#galeri" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Logo Tumbuh Setara"
              fill
              className="object-cover"
              priority
            />
          </div>

          <span className="text-lg font-bold tracking-tight transition-colors duration-300">
            <span
              className={`transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"
                }`}
            >
              Tumbuh
            </span>{" "}
            <span className="text-yellow-400">
              Setara
            </span>
          </span>
        </a>


        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-3 py-1 text-sm font-medium transition-all
  ${scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white hover:bg-white/20 hover:backdrop-blur-md"
                }
`}

            >
              {link.label}
            </a>
          ))}
          <a
            href="#bergabung"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Bergabung
          </a>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bergabung"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Bergabung
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
