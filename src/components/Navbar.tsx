import { useState } from 'react'
import Container from './ui/Container'
import Button from './ui/Button'
import Z1Logo from '../assets/logos/z1-logo.svg'

const links = [
  { label: 'Como funciona', href: '#passos' },
  { label: 'Cartão de Crébito', href: '#credito' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Sobre a Z1', href: '#sobre' },
  { label: 'Vagas', href: '#vagas' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100/0 bg-white/90 backdrop-blur-[10px]">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" aria-label="Z1">
          <img src={Z1Logo} alt="Z1" className="h-[2.047rem] w-[2.625rem]" />
        </a>

        <nav className="hidden items-center gap-10 desktop:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="p-2 text-base font-medium text-ink transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden desktop:block">
          <Button variant="outline" href="#mae" className="!px-6 !py-4 !text-base">
            Mãe, vem cá
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center desktop:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#060613"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="#060613"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-neutral-100 bg-white px-5 py-6 desktop:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-base font-medium text-ink hover:bg-neutral-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="outline"
            href="#mae"
            className="mt-4 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Mãe, vem cá
          </Button>
        </div>
      )}
    </header>
  )
}
