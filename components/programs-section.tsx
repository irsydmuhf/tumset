"use client"

import { useEffect, useRef } from "react"
import { BookOpen, TreePine, MessageCircle, Lightbulb, Globe, Sparkles, UserCheck } from "lucide-react"

const programs = [
  {
    icon: UserCheck,
    title: "Inklusi Dalam Aksi",
    description:
      "Workshop dan pelatihan untuk pengembangan diri, literasi, dan keterampilan hidup yang relevan.",
    tag: "Edukasi",
  },
  {
    icon: BookOpen,
    title: "Aksi Edukasi",
    description:
      "Program lingkungan berbasis komunitas — penanaman pohon, kampanye, dan edukasi ekologis.",
    tag: "Lingkungan",
  },
  {
    icon: MessageCircle,
    title: "Ngopi: Ngobrol Perkara Inklusi",
    description:
      "Forum diskusi terbuka untuk berbagi cerita, refleksi, dan membangun perspektif bersama.",
    tag: "Dialog",
  },
  // {
  //   icon: Globe,
  //   title: "Jembatan Budaya",
  //   description:
  //     "Pertukaran budaya dan pengetahuan lintas daerah untuk memperluas wawasan dan empati.",
  //   tag: "Budaya",
  // },
]

export function ProgramsSection() {
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
      id="program"
      className="bg-muted/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Fokus & Program
          </span>
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Apa yang Kami Lakukan
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore quaerat ex iusto! Odio consequatur perspiciatis vel corporis laborum vero eius? 
            Perferendis voluptate veniam ea facilis nostrum dolorem illum sequi amet.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <program.icon size={20} />
                  </div>
                  <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {program.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
