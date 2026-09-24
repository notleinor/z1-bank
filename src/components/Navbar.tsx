import { useState } from 'react'
import Button from './ui/Button'
import z1Logo from '../assets/logos/z1-logo.svg'

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
          {/* Linhas do ícone menu-burger do Figma: x 11.66–35, y 12 / 19.5 / 27, traço 2.4 */}
          {[0.75, 1.21875, 1.6875].map((top, i) => (
            <span
              key={top}
              className={`absolute left-[0.7289rem] h-[0.15rem] w-[1.4589rem] rounded-full bg-ink transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                open
                  ? i === 0
                    ? 'translate-y-[0.46875rem] rotate-45'
                    : i === 1
                      ? 'scale-x-0 opacity-0'
                      : '-translate-y-[0.46875rem] -rotate-45'
                  : ''
              }`}
              style={{ top: `calc(${top}rem - 0.075rem)` }}
            />
          ))}
        </button>
      </div>

      <div
        className={`grid bg-white transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] desktop:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav
            className={`mx-auto flex flex-col items-center gap-[0.5rem] border-t border-neutral-100 px-[1.25rem] pb-[2rem] pt-[1.5rem] transition-opacity duration-300 ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`p-[0.5rem] text-[1rem] font-medium text-ink transition-[color,transform,opacity] duration-500 ease-out hover:text-neutral-400 ${
                  open ? 'translate-y-0 opacity-100' : '-translate-y-[0.5rem] opacity-0'
                }`}
                style={{ transitionDelay: open ? `${100 + i * 50}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            <div
              className={`mt-[1rem] transition-[transform,opacity] duration-500 ease-out ${
                open ? 'translate-y-0 opacity-100' : '-translate-y-[0.5rem] opacity-0'
              }`}
              style={{ transitionDelay: open ? `${100 + links.length * 50}ms` : '0ms' }}
            >
              <Button variant="secondary" href="#mae" onClick={() => setOpen(false)}>
                Mãe, vem cá
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
