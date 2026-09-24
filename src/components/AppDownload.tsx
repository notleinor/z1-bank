import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import StoreBadge from './ui/StoreBadge'
import { gsap } from '../lib/motion'
import womanPhone from '../assets/photos/woman-phone.jpg'
import blobDesktop from '../assets/icons/app-blob.svg'
import blobMobile from '../assets/icons/app-blob-mobile.svg'

const tube = { transform: 'rotate(70.33deg) scaleY(-1)' }

export default function AppDownload() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root.current!)
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-tube]',
          { rotate: 5, yPercent: 4 },
          {
            rotate: -3,
            yPercent: -3,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
          },
        )
      })
    },
    { scope: root },
  )

  return (
    <section id="app" ref={root} className="overflow-hidden bg-ink">
      {/* Desktop — frame 1440 × 544 */}
      <div className="relative mx-auto hidden h-[34rem] w-[90rem] desktop:block">
        <div className="absolute left-[52.5rem] top-[10.25rem] flex flex-col items-start gap-[2rem]">
          <div className="flex flex-col items-start gap-[0.5rem]">
            <h2 data-reveal className="w-[21.4375rem] text-[2.5rem] font-bold leading-[1.2] text-white">
              E aí, pronto para se tornar um uzer?
            </h2>
            <p data-reveal className="whitespace-nowrap text-[1.125rem] leading-[1.4] text-neutral-100">
              Baixe o app e receba seu cartão
            </p>
          </div>
          <div className="flex gap-[1rem]">
            <StoreBadge store="apple" className="w-[11.25rem]" />
            <StoreBadge store="google" className="w-[11.25rem]" />
          </div>
        </div>
        <div className="absolute left-[-5.6875rem] top-[-0.1875rem] h-[34.4375rem] w-[49.6875rem] overflow-hidden">
          <img
            src={womanPhone}
            alt="Jovem sorrindo usando o app da Z1 no celular"
            className="absolute left-0 top-[-0.04%] h-[100.07%] w-[104.03%] max-w-none"
            loading="lazy"
          />
        </div>
        <div
          data-tube
          className="pointer-events-none absolute left-[33.0631rem] top-[-15.5625rem] flex h-[66.8617rem] w-[79.5578rem] items-center justify-center"
        >
          <div className="relative h-[67.7655rem] w-[46.7826rem] shrink-0" style={tube}>
            <div className="absolute inset-[-13.84%_-20.04%_-13.83%_-20.04%]">
              <img src={blobDesktop} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="relative desktop:hidden">
        <div
          data-tube
          className="pointer-events-none absolute right-[-12.449rem] top-[-2.4138rem] flex h-[34.1464rem] w-[40.6303rem] items-center justify-center"
        >
          <div className="relative h-[34.6079rem] w-[23.892rem] shrink-0" style={tube}>
            <div className="absolute inset-[-13.84%_-20.04%_-13.83%_-20.04%]">
              <img src={blobMobile} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex w-[23.4375rem] flex-col items-center gap-[1.5rem] px-[1.25rem] py-[4.5rem]">
          <div className="flex flex-col items-center gap-[0.5rem] text-center">
            <h2 data-reveal className="w-[21.4375rem] text-[1.5rem] font-bold leading-[1.2] text-white">
              E aí, pronto para se
              <br />
              tornar um uzer?
            </h2>
            <p data-reveal className="whitespace-nowrap text-[1rem] leading-[1.4] text-neutral-100">
              Baixe o app e receba seu cartão
            </p>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <StoreBadge store="apple" className="w-[11.25rem]" />
            <StoreBadge store="google" className="w-[11.25rem]" />
          </div>
        </div>
        <div className="relative aspect-[375/346.5] w-full overflow-hidden">
          <img
            src={womanPhone}
            alt="Jovem sorrindo usando o app da Z1 no celular"
            className="absolute left-[-24.845%] top-0 h-full w-[138.48%] max-w-none object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
