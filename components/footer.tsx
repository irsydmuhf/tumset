import { Instagram, Mail, MapPin } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:halo@tumbuhsetara.id", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
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
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Komunitas yang percaya bahwa setiap orang berhak bertumbuh.
              Bersama kita melangkah, bersama kita setara.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Navigasi
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#tentang"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Tentang Kami
              </a>
              <a
                href="#program"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Program
              </a>
              <a
                href="#dampak"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Dampak
              </a>
              <a
                href="#galeri"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Galeri
              </a>
              <a
                href="#bergabung"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Bergabung
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Kontak
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:halo@tumbuhsetara.id"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={16} />
                halo@tumbuhsetara.id
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                Indonesia
              </div>
              <div className="mt-2 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="font-serif text-sm italic text-muted-foreground">
              {`"Karena bertumbuh bukan soal sampai duluan, tapi soal tidak ada yang tertinggal."`}
            </p>
            <p className="text-xs text-muted-foreground">
              {`\u00A9 ${new Date().getFullYear()} Tumbuh Setara. Semua hak dilindungi.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
