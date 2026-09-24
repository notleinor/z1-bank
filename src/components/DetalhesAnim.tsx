import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/motion'
import phoneScreen from '../assets/photos/phone-screen.png'
import phoneBg from '../assets/icons/phone-body.svg'
import z1Card from '../assets/photos/z1-card.png'

// Medidas do componente "Animation=Detalhes" no Figma (591 × 508), em em dentro de `.u`.
// O estado final (cartão aparecendo) é o "Detalhes+Hover" do protótipo, conduzido pelo scroll.
export default function DetalhesAnim({ className = '' }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root.current!)
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({
            defaults: { ease: 'back.out(1.4)', duration: 1 },
            scrollTrigger: { trigger: root.current, start: 'top 60%', end: 'center 40%', scrub: 0.8 },
          })
          .to('[data-card]', { x: '114.55em' }, 0)
          .to('[data-card-img]', { rotate: -83.02 }, 0)
          .to('[data-card-shine]', { opacity: 0.5, ease: 'none' }, 0)
          .to('[data-phone]', { left: '39em' }, 0)
          .to(
            '[data-highlight]',
            { left: '7em', top: '263em', width: '384em', height: '64em', borderRadius: '12.19em' },
            0.15,
          )
          .to('[data-highlight]', { opacity: 1, duration: 0.3, ease: 'none' }, 0.15)
      })

      // Sem animação: mostra direto o estado final.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-card]', { x: '114.55em' })
        gsap.set('[data-card-img]', { rotate: -83.02 })
        gsap.set('[data-phone]', { left: '39em' })
        gsap.set('[data-highlight]', {
          left: '7em', top: '263em', width: '384em', height: '64em', borderRadius: '12.19em', opacity: 1,
        })
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className={`u relative h-[508em] w-[591em] shrink-0 overflow-hidden ${className}`}>
      <img src={phoneBg} alt="" className="absolute left-0 top-[85em] h-[424em] w-[591em]" />

      <div
        data-card
        className="absolute left-[138em] top-[47.71em] flex h-[474.763em] w-[303.537em] items-center justify-center"
      >
        <div
          data-card-img
          className="relative h-[303.537em] w-[474.763em] shrink-0 overflow-hidden rounded-[9.34em]"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <img src={z1Card} alt="Cartão Z1" className="absolute inset-0 size-full" />
          <div
            data-card-shine
            className="absolute left-[2.58em] top-[2.78em] h-full w-full rounded-[9.34em] opacity-0"
            style={{ backgroundImage: 'linear-gradient(37.76deg, #fff 9.89%, rgba(255,255,255,0) 60.16%)' }}
          />
        </div>
      </div>

      <div data-phone className="absolute left-[135em] top-0 h-[509em] w-[315.31em] overflow-hidden">
        <img src={phoneScreen} alt="Tela do app Z1" className="absolute left-0 top-0 h-[124.92%] w-full max-w-none" />
      </div>

      <div
        data-highlight
        className="absolute left-[169em] top-[272em] h-[42em] w-[250em] overflow-hidden opacity-0 shadow-[0_4em_30em_-8em_rgba(217,188,129,0.19)] outline outline-[1.085em] -outline-offset-[1.085em] outline-[#e9e2d3]"
      >
        <img
          src={phoneScreen}
          alt=""
          className="absolute left-[-13.1%] top-[-650%] h-[1513.94%] w-[125.12%] max-w-none"
        />
      </div>
    </div>
  )
}
