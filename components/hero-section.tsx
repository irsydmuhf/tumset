"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

const heroImages = [
  "/foto.jpg",
  "/aksiedukasi.jpg",
  "/inklusidalamaksi.jpg",
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (el) {
      el.style.opacity = "0"
      el.style.transform = "translateY(24px)"
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Hero image ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/65" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-secondary/50 bg-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            Komunitas untuk Perubahan
          </span>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-background md:text-6xl lg:text-7xl">
            <span className="text-balance">
              Berdaya Bersama, Wujudkan Asa
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/85 md:text-xl">
            Membangun ruang aman untuk belajar, berbagi, dan menciptakan dampak
            bersama — tanpa meninggalkan siapa pun.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#tentang"
              className="rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
            >
              Kenal Lebih Dekat
            </a>
            <a
              href="#bergabung"
              className="rounded-full border-2 border-background/30 bg-background/10 px-7 py-3 text-sm font-semibold text-background backdrop-blur-sm transition-all hover:border-background/60 hover:bg-background/20"
            >
              Wujudkan Ruang Inklusi Bersama Kami
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#tentang"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-background/70 transition-colors hover:text-background"
        aria-label="Scroll ke bawah"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
