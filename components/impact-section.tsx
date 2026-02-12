"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

const stats = [
  { value: 500, suffix: "+", label: "Anggota Aktif" },
  { value: 30, suffix: "+", label: "Program Terlaksana" },
  { value: 15, suffix: "", label: "Kota Terjangkau" },
  { value: 2000, suffix: "+", label: "Orang Terdampak" },
]

const testimonials = [
  {
    quote:
      "Tumbuh Setara mengajarkan saya bahwa perubahan tidak harus besar. Yang penting, kita mulai dan kita bersama.",
    name: "Anisa Rahmawati",
    role: "Relawan sejak 2023",
  },
  {
    quote:
      "Di sini saya menemukan ruang di mana pendapat saya didengar, di mana saya merasa punya tempat untuk bertumbuh.",
    name: "Rizky Pratama",
    role: "Peserta Kelas Tumbuh",
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  )
}

export function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        }
      },
      { threshold: 0.1 }
    )

    const children = sectionRef.current?.querySelectorAll(".fade-up")
    children?.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="dampak" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Dampak & Perjalanan
          </span>
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Jejak yang Kami Tinggalkan
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <Quote
                  size={32}
                  className="absolute top-6 right-6 text-primary/15"
                />
                <p className="text-lg italic leading-relaxed text-foreground">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
