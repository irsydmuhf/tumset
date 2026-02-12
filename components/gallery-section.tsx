"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const photos = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Workshop komunitas Tumbuh Setara",
    caption: "Kelas Tumbuh — Workshop Literasi",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Aksi penanaman pohon bersama",
    caption: "Aksi Hijau — Penanaman Pohon",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Diskusi kelompok kecil di ruang komunitas",
    caption: "Ruang Bicara — Diskusi Reflektif",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Perayaan kegiatan komunitas",
    caption: "Perayaan Kebersamaan",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Sesi brainstorming kreatif",
    caption: "Lab Ide — Brainstorming",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Kegiatan membaca bersama",
    caption: "Pojok Baca Komunitas",
  },
]

export function GallerySection() {
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
      { threshold: 0.05 }
    )

    const children = sectionRef.current?.querySelectorAll(".fade-up")
    children?.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="galeri"
      className="bg-muted/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Dokumentasi
          </span>
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Momen yang Berarti
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Setiap foto adalah cerita tentang kebersamaan, pertumbuhan, dan
            harapan yang kami bangun bersama.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-background">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
