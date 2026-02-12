"use client"

import { useEffect, useRef } from "react"
import { HeartHandshake, Users, Building2 } from "lucide-react"

const roles = [
  {
    icon: HeartHandshake,
    title: "Relawan",
    description: "Luangkan waktu dan energimu untuk menciptakan dampak nyata bersama komunitas.",
  },
  {
    icon: Users,
    title: "Kolaborator",
    description: "Punya ide atau keahlian? Mari wujudkan bersama melalui program kolaboratif.",
  },
  {
    icon: Building2,
    title: "Mitra",
    description: "Organisasi atau institusi yang ingin berjalan bersama menuju perubahan positif.",
  },
]

export function CtaSection() {
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
    <section ref={sectionRef} id="bergabung" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-primary">
          <div className="px-8 py-16 md:px-16 md:py-20">
            <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center">
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
                <span className="text-balance">
                  Mari Jadi Bagian dari Perjalanan Ini
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
                Tidak ada kontribusi yang terlalu kecil. Setiap langkah yang
                kamu ambil bersama kami adalah langkah menuju kesetaraan.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {roles.map((role, index) => (
                <div
                  key={role.title}
                  className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="rounded-2xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-colors hover:bg-primary-foreground/15">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent-foreground">
                      <role.icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-primary-foreground">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-12 text-center">
              <a
                href="mailto:halo@tumbuhsetara.id"
                className="inline-block rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
              >
                Hubungi Kami Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
