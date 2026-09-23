import { useState } from 'react'
import Button from './ui/Button'
import z1Logo from '../assets/logos/z1-logo.svg'
import burger from '../assets/icons/menu-burger.svg'

const links = [
  { label: 'Como funciona', href: '#passos' },
  { label: 'Cartão de Crébito', href: '#credito' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Sobre a Z1', href: '#' },
  { label: 'Vagas', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-[5rem] bg-white backdrop-blur-[10px]">
      {/* Desktop — frame 1440 */}
      <div className="relative mx-auto hidden h-full w-[90rem] desktop:block">
        <a href="#top" aria-label="Z1" className="absolute left-[7.0625rem] top-[1.5rem]">
          <img src={z1Logo} alt="Z1" className="h-[2.0469rem] w-[2.625rem]" />
        </a>
        <nav className="absolute left-[17.8125rem] top-[1.3125rem] flex gap-[2.5rem]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="p-[0.5rem] text-[1rem] font-medium leading-[normal] text-ink transition-colors duration-300 ease-out hover:text-neutral-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button variant="secondary" href="#mae" className="absolute right-[7rem] top-[0.8125rem]">
          Mãe, vem cá
        </Button>
      </div>

      {/* Mobile / tablet — frame 375 */}
      <div className="relative h-full w-full desktop:hidden">
        <a href="#top" aria-label="Z1" className="absolute left-[1.25rem] top-[1.4766rem]">
          <img src={z1Logo} alt="Z1" className="h-[2.0469rem] w-[2.625rem]" />
        </a>
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-[1.1875rem] top-[1.25rem] size-[2.5rem]"
        >
          {open ? (
            <svg viewBox="0 0 40 40" fill="none" className="size-full" aria-hidden>
              <path d="M13 13L27 27M27 13L13 27" stroke="#060613" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          ) : (
            <img src={burger} alt="" className="size-full" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-white desktop:hidden">
          <nav className="mx-auto flex w-[23.4375rem] flex-col items-center gap-[0.5rem] px-[1.25rem] pb-[2rem] pt-[1.5rem]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="p-[0.5rem] text-[1rem] font-medium text-ink transition-colors duration-300 hover:text-neutral-400"
              >
                {link.label}
              </a>
            ))}
            <Button variant="secondary" href="#mae" className="mt-[1rem]" onClick={() => setOpen(false)}>
              Mãe, vem cá
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
