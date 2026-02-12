"use client"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary-foreground"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Tumbuh Setara
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
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
