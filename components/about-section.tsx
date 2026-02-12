"use client"

import { useEffect, useRef } from "react"
import { Heart, Leaf, Users, Handshake } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empati",
    description: "Mendengarkan dan memahami sebelum bertindak, membangun hubungan yang tulus.",
  },
  {
    icon: Users,
    title: "Kesetaraan",
    description: "Setiap suara memiliki nilai yang sama, tanpa memandang latar belakang.",
  },
  {
    icon: Leaf,
    title: "Keberlanjutan",
    description: "Membangun perubahan yang bertahan lama melalui pendekatan yang berkelanjutan.",
  },
  {
    icon: Handshake,
    title: "Kolaborasi",
    description: "Bersama kita bisa mencapai lebih banyak dari yang kita bayangkan.",
  },
]

export function AboutSection() {
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
    <section
      ref={sectionRef}
      id="tentang"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Tentang Kami
          </span>
          <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Ruang untuk Bertumbuh, Bersama
            </span>
          </h2>
          <div className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tumbuh Setara lahir dari keyakinan bahwa setiap orang berhak
              mendapatkan kesempatan untuk bertumbuh. Kami adalah komunitas yang
              percaya bahwa perubahan dimulai dari ruang-ruang kecil — dari
              percakapan yang jujur, kolaborasi yang tulus, dan aksi nyata yang
              memberdayakan.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Kami tidak ingin hanya membangun program, tapi membangun
              ekosistem di mana setiap individu merasa didengar, dihargai, dan
              didorong untuk menjadi versi terbaik dari dirinya.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
