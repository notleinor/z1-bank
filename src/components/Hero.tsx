import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Button from './ui/Button'
import { gsap, SplitText } from '../lib/motion'
import heroCard from '../assets/photos/hero-card.png'
import blobsDesktop from '../assets/icons/hero-blobs.svg'
import blobsMobile from '../assets/icons/hero-blobs-mobile.svg'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root.current!)
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const titles = gsap.utils.toArray<HTMLElement>('[data-hero-title]')
        const splits = titles.map((t) => SplitText.create(t, { type: 'words', mask: 'words', wordsClass: 'split' }))

        const tl = gsap.timeline({
          defaults: { ease: 'power4.out' },
          onComplete: () => splits.forEach((s) => s.revert()),
        })
        splits.forEach((s) =>
          tl.from(s.words, { yPercent: 110, rotate: 4, duration: 0.9, stagger: 0.06 }, 0.1),
        )
        tl.from('[data-hero-fade]', { y: 16, autoAlpha: 0, duration: 0.8, stagger: 0.1 }, 0.5)
          .from('[data-hero-person]', { yPercent: 18, duration: 1.2, ease: 'expo.out' }, 0.2)
          .from('[data-hero-blobs]', { scale: 0.92, autoAlpha: 0, duration: 1.4, ease: 'expo.out' }, 0)

        gsap.to('[data-hero-blobs] img', {
          y: '1.25rem',
          rotate: 1.5,
          duration: 4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })

        gsap.to('[data-hero-blobs]', {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })

        return () => splits.forEach((s) => s.revert())
      })
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className="relative overflow-hidden bg-primary">
      {/* Desktop — frame 1440 × 652 (732 menos a navbar) */}
      <div className="relative mx-auto hidden h-[40.75rem] w-[90rem] desktop:block">
        <div
          data-hero-blobs
          className="pointer-events-none absolute left-[10.3125rem] top-[-13.8125rem] h-[85.8759rem] w-[99.1319rem]"
        >
          <div className="absolute inset-x-0 bottom-[-4.44%] top-[-5.46%]">
            <img src={blobsDesktop} alt="" className="block size-full max-w-none" />
          </div>
        </div>
        <img
          data-hero-person
          src={heroCard}
          alt="Adolescente segurando o cartão Z1"
          className="absolute left-[34.3125rem] top-[0.875rem] h-[42.5rem] w-[53.125rem] max-w-none object-cover"
        />
        <div className="absolute left-[7rem] top-[9.5rem] flex flex-col items-start gap-[1.5rem]">
          <div className="flex flex-col items-start gap-[1rem]">
            <h1 data-hero-title className="w-[33.1875rem] text-[3.5rem] font-extrabold leading-[1.2] text-ink">
              Você no comando da sua vida financeira.
            </h1>
            <p data-hero-fade className="w-[24.25rem] text-[1.125rem] leading-[1.4] text-neutral-900">
              Uma conta digital para adolescentes 100% gratuita e conectada a um cartão Mastercard.
            </p>
          </div>
          <div data-hero-fade>
            <Button icon="down" href="#app">Baixe o aplicativo</Button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet — frame 375 × 653 */}
      <div className="relative mx-auto h-[40.8125rem] w-[23.4375rem] desktop:hidden">
        <div
          data-hero-blobs
          className="pointer-events-none absolute left-[-23.6756rem] top-[7.9813rem] h-[56.7814rem] w-[65.7381rem]"
        >
          <div className="absolute inset-x-0 bottom-[-4.06%] top-[-5.43%]">
            <img src={blobsMobile} alt="" className="block size-full max-w-none" />
          </div>
        </div>
        <img
          data-hero-person
          src={heroCard}
          alt="Adolescente segurando o cartão Z1"
          className="absolute left-[-3.4375rem] top-[19.75rem] h-[21.55rem] w-[26.9375rem] max-w-none object-cover"
        />
        <div className="absolute left-0 top-[4.125rem] flex w-[23.5rem] flex-col items-center gap-[1.5rem] px-[1.25rem]">
          <div className="flex w-[20.875rem] flex-col items-center gap-[0.875rem] text-center">
            <h1 data-hero-title className="w-full text-[2.125rem] font-extrabold leading-[1.2] text-ink">
              Você no comando da sua vida financeira.
            </h1>
            <p data-hero-fade className="w-full text-[0.875rem] leading-[1.4] text-neutral-900">
              Uma conta digital para adolescentes 100% gratuita
              <br />e conectada a um cartão Mastercard.
            </p>
          </div>
          <div data-hero-fade>
            <Button icon="down" href="#app">Baixe o aplicativo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
