import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import SocialIcons from './ui/SocialIcons'
import { gsap } from '../lib/motion'
import { horizontalLoop } from '../lib/horizontalLoop'
import social1 from '../assets/photos/social-1.jpg'
import social2 from '../assets/photos/social-2.jpg'
import social3 from '../assets/photos/social-3.jpg'
import social4 from '../assets/photos/social-4.jpg'

// Cards do Figma: 384 × 683, gap 32, alternando 24px de deslocamento vertical.
const clips = [
  { src: social1, w: 384.19, top: 24 },
  { src: social2, w: 384.19, top: 0 },
  { src: social3, w: 384.19, top: 24 },
  { src: social4, w: 315.89, top: 0 },
]
const GAP = 32
// Repete a lista para preencher telas largas mantendo o laço sem emenda.
const track = [...clips, ...clips]

// Faixa em loop contínuo e arrastável: 1em = 1px do Figma × --s.
// `media` garante que só o Marquee visível construa o loop e que ele se
// reconstrua ao cruzar o breakpoint (medidas mudam com o layout/escala).
function Marquee({ className, media }: { className: string; media: string }) {
  const wrap = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia(wrap.current!)
      mm.add(media, () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-clip]', wrap.current!)
        if (!items.length || items[0].offsetWidth === 0) return
        const loop = horizontalLoop(items, { speed: 0.6, paddingRight: GAP, draggable: true })
        return () => loop.kill()
      })
    },
    { scope: wrap },
  )

  return (
    <div className={`u relative h-[707em] w-full ${className}`}>
      <div ref={wrap} className="relative h-[707em] w-full overflow-hidden">
        <div className="flex h-[707em] w-max">
          {track.map((clip, i) => (
            <div
              key={i}
              data-clip
              className="relative h-[707em] shrink-0"
              style={{ width: `${clip.w}em`, marginRight: `${GAP}em` }}
            >
              <img
                src={clip.src}
                alt=""
                loading="lazy"
                draggable={false}
                className="pointer-events-none absolute left-0 h-[683em] w-full rounded-[16em] object-cover"
                style={{ top: `${clip.top}em` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[222em] h-[485em] bg-gradient-to-b from-white/0 from-[30.48%] to-white to-[100.85%] opacity-80" />
    </div>
  )
}

export default function Segue() {
  return (
    <section className="overflow-hidden bg-white desktop:py-[7.5rem]">
      {/* Desktop */}
      <div className="hidden desktop:block">
        <div className="relative mx-auto h-[6.0625rem] w-[90rem]">
          <div className="absolute left-[7.0625rem] top-0 flex w-[75.967rem] items-end justify-between">
            <div className="flex flex-col items-start gap-[1.5rem] whitespace-nowrap">
              <h2 data-reveal className="text-[2.5rem] font-bold leading-[1.2] text-ink">
                Segue a gente
              </h2>
              <p className="text-[1.125rem] font-medium leading-[1.4] text-neutral-700">@z1.app</p>
            </div>
            <SocialIcons />
          </div>
        </div>
        <Marquee className="mt-[2.125rem]" media="(min-width: 1024px)" />
      </div>

      {/* Mobile / tablet */}
      <div className="desktop:hidden">
        <div className="flex flex-col items-center gap-[1.5rem] px-[1.25rem] pb-[1rem] pt-[4.5rem]">
          <div className="flex flex-col items-center gap-[1rem] whitespace-nowrap">
            <h2 data-reveal className="text-center text-[1.5rem] font-bold leading-[1.2] text-ink">
              Segue a gente
            </h2>
            <p className="text-[0.875rem] font-medium leading-[1.4] text-neutral-700">@z1.app</p>
          </div>
          <SocialIcons />
        </div>
        <Marquee
          className="mb-[1.85rem] mt-[2.2175rem] [--s:0.64064] tablet:[--s:0.8]"
          media="(max-width: 1023px)"
        />
      </div>
    </section>
  )
}
