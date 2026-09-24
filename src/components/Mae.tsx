import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Button from './ui/Button'
import { gsap } from '../lib/motion'
import motherDaughter from '../assets/photos/mother-daughter.jpg'
import blobDesktop from '../assets/icons/mae-blob.svg'
import blobMobile from '../assets/icons/mae-blob-mobile.svg'

export default function Mae() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root.current!)
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-tube]',
          { rotate: -5, xPercent: -3 },
          {
            rotate: 3,
            xPercent: 2,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
          },
        )
      })
    },
    { scope: root },
  )

  return (
    <section id="mae" ref={root} className="overflow-hidden bg-primary">
      {/* Desktop — frame 1440 × 544 */}
      <div className="relative mx-auto hidden h-[34rem] w-[90rem] desktop:block">
        <div className="absolute left-[-4.8125rem] top-0 h-[34rem] w-[48.8125rem] overflow-hidden">
          <img
            src={motherDaughter}
            alt="Mãe e filha sorrindo olhando o celular"
            className="absolute left-[-0.12%] top-0 h-full w-[104.35%] max-w-none"
          />
        </div>
        <div data-tube className="pointer-events-none absolute left-[-14.6875rem] top-[-8.125rem] flex h-[49.5327rem] w-[57.4616rem] items-center justify-center">
          <div className="relative h-[48.8829rem] w-[30.6056rem] shrink-0" style={{ transform: 'rotate(117.14deg)' }}>
            <div className="absolute inset-[-9.59%_-15.31%_-9.59%_-15.32%]">
              <img src={blobDesktop} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>

        <div className="absolute left-[52.5rem] top-[9.0625rem] flex flex-col items-start gap-[0.8125rem]">
          <h2 data-reveal className="whitespace-nowrap text-[2.5rem] font-bold leading-[1.2] text-ink">
            Você é menor de idade?
          </h2>
          <p data-reveal className="w-[31.1875rem] text-[1.125rem] leading-[1.4] text-neutral-900">
            Tudo bem, a gente sabe que você já é responsável por quase tudo que faz, mas nós ainda precisamos que um
            adulto responsável autorize a abertura da sua conta na Z1, tá?
          </p>
          <div className="flex flex-col items-start gap-[1.5rem]">
            <p data-reveal className="text-[1.125rem] leading-[1.4] text-neutral-900">
              Se tiver alguma dúvida, acesse:
            </p>
            <Button tight href="#">Mãe, vem cá saber mais</Button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="flex flex-col gap-[4rem] pt-[4rem] desktop:hidden">
        <div className="mx-auto flex w-[23.4375rem] flex-col items-center gap-[0.8125rem] px-[1.25rem] text-center">
          <h2 data-reveal className="text-[2rem] font-bold leading-[1.2] text-ink">
            Você é menor
            <br />
            de idade?
          </h2>
          <p data-reveal className="w-[21rem] text-[0.875rem] leading-[1.4] text-neutral-900">
            Tudo bem, a gente sabe que você já é responsável por quase tudo que faz, mas nós ainda precisamos que um
            adulto responsável autorize a abertura da sua conta na Z1, tá?
          </p>
          <div className="flex flex-col items-center gap-[1.5rem]">
            <p data-reveal className="text-[0.875rem] leading-[1.4] text-neutral-900">
              Se tiver alguma dúvida, acesse:
            </p>
            <Button tight href="#">Mãe, vem cá saber mais</Button>
          </div>
        </div>
        <div className="relative aspect-[375/250.923] w-full overflow-hidden">
          <img
            src={motherDaughter}
            alt="Mãe e filha sorrindo olhando o celular"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
          <div data-tube className="pointer-events-none absolute left-[-19.435%] top-[-23.896%] flex h-[145.685%] w-[113.085%] items-center justify-center">
            <div className="relative h-[98.688%] w-[53.263%] shrink-0" style={{ transform: 'rotate(117.14deg)' }}>
              <div className="absolute inset-[-9.59%_-15.31%_-9.59%_-15.32%]">
                <img src={blobMobile} alt="" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
