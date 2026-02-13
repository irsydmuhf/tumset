"use client"

import { useEffect, useRef } from "react"
import { Heart, Leaf, UserCheck2, HeartHandshake, UsersRound, Sprout, Scale } from "lucide-react"

const values = [
  {
    icon: HeartHandshake,
    title: "Kemanusiaan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    span: "lg:col-span-2",
  },
  {
    icon: Scale,
    title: "Kesetaraan",
    description:
      "SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    span: "lg:col-span-2",
  },
  {
    icon: UserCheck2,
    title: "Inklusivitas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    span: "lg:col-span-2",
  },
  {
    icon: UsersRound,
    title: "Kekeluargaan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    span: "lg:col-span-3",
  },
  {
    icon: Sprout,
    title: "Keberlanjutan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    span: "lg:col-span-3",
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

    const children =
      sectionRef.current?.querySelectorAll(".fade-up")
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
        {/* Heading */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Tentang Kami
          </span>

          <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-primary">
              Tumbuh
            </span>{" "}
            <span className="text-yellow-400">
              Setara
            </span>
          </h2>


          <div className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Komunitas ini bertujuan menghadirkan akses pendidikan yang setara dan berkualitas bagi penyandang disabilitas.
              Selain itu, komunitas ini juga mendorong kesadaran dan keterlibatan masyarakat dalam menciptakan lingkungan yang inklusif.
              Melalui kolaborasi dengan berbagai pihak, komunitas ini membangun sinergi demi pendidikan yang adil, sekaligus menjadi ruang tumbuh bersama untuk saling belajar dan berkembang dalam semangat solidaritas dan pemberdayaan.
            </p>

            {/* <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Komunitas ini bertujuan menghadirkan akses pendidikan yang setara dan berkualitas bagi penyandang disabilitas. 
              Selain itu, komunitas ini juga mendorong kesadaran dan keterlibatan masyarakat dalam menciptakan lingkungan yang inklusif.
              Melalui kolaborasi dengan berbagai pihak, komunitas ini membangun sinergi demi pendidikan yang adil, sekaligus menjadi ruang tumbuh bersama untuk saling belajar dan berkembang dalam semangat solidaritas dan pemberdayaan.
            </p> */}
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out
                [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0
                ${value.span}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
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
