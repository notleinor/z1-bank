import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Container from './ui/Container'
import Button from './ui/Button'
import heroCard from '../assets/photos/hero-card.png'
import heroBlobs from '../assets/icons/hero-blobs.svg'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-title]', { y: 24, opacity: 0, duration: 0.7 })
        .from('[data-hero-text]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('[data-hero-cta]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(
          '[data-hero-image]',
          { opacity: 0, scale: 0.96, duration: 0.8 },
          '-=0.6',
        )
    },
    { scope: root },
  )

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden bg-primary"
    >
      <img
        src={heroBlobs}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-1/4 -top-1/4 w-[140%] max-w-none opacity-90 tablet:right-0 tablet:top-0 tablet:w-[80%]"
      />

      <Container className="relative flex flex-col gap-10 py-16 tablet:flex-row tablet:items-center tablet:gap-8 tablet:py-24 desktop:py-28 desktop:gap-16">
        <div className="relative z-10 flex flex-col items-start gap-6 tablet:w-1/2">
          <h1
            data-hero-title
            className="max-w-[19rem] text-4xl font-extrabold leading-[1.2] text-ink tablet:max-w-[24rem] tablet:text-5xl desktop:max-w-[33.2rem] desktop:text-[3.5rem]"
          >
            Você no comando da sua vida financeira.
          </h1>
          <p
            data-hero-text
            className="max-w-[22rem] text-base text-neutral-900 desktop:text-lg"
          >
            Uma conta digital para adolescentes 100% gratuita e conectada a um
            cartão Mastercard.
          </p>
          <div data-hero-cta>
            <Button variant="dark" icon="down" href="#app">
              Baixe o aplicativo
            </Button>
          </div>
        </div>

        <div
          data-hero-image
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl tablet:w-1/2"
        >
          <img
            src={heroCard}
            alt="Adolescente segurando o cartão Z1"
            className="size-full object-cover object-top"
          />
        </div>
      </Container>
    </section>
  )
}
