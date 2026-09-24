import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/motion'
import starBig from '../assets/icons/star-big.svg'
import starSmall from '../assets/icons/star-small.svg'
import maquininha from '../assets/photos/crebito-maquininha.png'
import cartao from '../assets/photos/crebito-cartao.png'

// Grupo visual do Crébito em px do Figma (645 × 839), em em dentro de `.u` (escala via --s).
export default function CreditoVisual({ className = '' }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Encaixe final do cartão medido contra a composição original do Figma.
      const cardFit = { xPercent: 17.11, yPercent: 15.71, rotate: 8, scale: 0.9 }

      const mm = gsap.matchMedia(root.current!)
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // scrub reversível: descendo as mãos se encontram, subindo elas se afastam.
        const tl = gsap.timeline({
          defaults: { ease: 'power1.inOut' },
          scrollTrigger: { trigger: root.current, start: 'top 75%', end: 'center 55%', scrub: 0.8 },
        })
        // maquininha desce de cima
        tl.from('[data-hand="maquininha"]', { yPercent: -55, rotate: -10, xPercent: -8, duration: 1 }, 0)
        // cartão sobe de baixo até encaixar
        tl.fromTo(
          '[data-hand="cartao"]',
          { xPercent: 30, yPercent: 62, rotate: 18, scale: 0.9 },
          { ...cardFit, duration: 1, immediateRender: true },
          0,
        )
        tl.from('[data-price]', { scale: 0.4, autoAlpha: 0, ease: 'back.out(3)', duration: 0.45 }, 0.6)
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-hand="cartao"]', cardFit)
      })
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      className={`u relative h-[839em] w-[645.4em] ${className}`}
    >
      <div className="absolute left-[-22.88em] top-[220.23em] flex size-[548.087em] items-center justify-center">
        <div className="relative size-[478.351em] shrink-0" style={{ transform: 'rotate(9.11deg)' }}>
          <div className="spin-slow absolute inset-0">
            <div className="absolute inset-[4.23%_6.34%]">
              <img src={starBig} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[51.46em] top-0 h-[839em] w-[302em]">
        <img
          data-hand="maquininha"
          src={maquininha}
          alt="Mão segurando a maquininha"
          className="absolute inset-0 size-full object-cover"
        />
        <img
          data-hand="cartao"
          src={cartao}
          alt="Mão aproximando o cartão Z1"
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      <div data-price className="absolute left-[300.11em] top-[-5.01em] h-[334.602em] w-[358.14em]">
        <div className="absolute left-0 top-0 flex size-[334.602em] items-center justify-center">
          <div className="relative size-[291.531em] shrink-0" style={{ transform: 'rotate(-9.25deg)' }}>
            <div className="spin-slow-reverse absolute inset-0">
              <div className="absolute inset-[4.96%_7.01%]">
                <img src={starSmall} alt="" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[16.78em] top-[117.93em] flex h-[98.904em] w-[291.364em] items-center justify-center">
          <div
            className="flex h-[73.895em] w-[285.948em] shrink-0 items-center justify-center rounded-[4em] border-[2em] border-ink bg-neutral-50"
            style={{ transform: 'rotate(5.08deg)' }}
          >
            <p className="whitespace-nowrap font-mono text-[40em] leading-[1.3] text-ink">R$ 0,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
