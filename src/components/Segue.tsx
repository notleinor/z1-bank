import SocialIcons from './ui/SocialIcons'
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
const SET = clips.reduce((sum, c) => sum + c.w + GAP, 0)
const COPIES = 4

function Marquee({ scale, className }: { scale: number; className: string }) {
  return (
    <div
      className={`u marquee flex w-max ${className}`}
      style={{ ['--s' as string]: scale, ['--set' as string]: `${SET}em` }}
    >
      {Array.from({ length: COPIES }).flatMap((_, copy) =>
        clips.map((clip, i) => (
          <div
            key={`${copy}-${i}`}
            className="relative h-[707em] shrink-0"
            style={{ width: `${clip.w}em`, marginRight: `${GAP}em` }}
            aria-hidden={copy !== 1}
          >
            <img
              src={clip.src}
              alt=""
              loading="lazy"
              className="absolute left-0 h-[683em] w-full rounded-[16em] object-cover"
              style={{ top: `${clip.top}em` }}
            />
          </div>
        )),
      )}
    </div>
  )
}

const fade = 'pointer-events-none absolute inset-x-0 bg-gradient-to-b from-white/0 from-[30.48%] to-white to-[100.85%] opacity-80'

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
            <SocialIcons gaps={[0.4131, 0.5791]} />
          </div>
        </div>
        <div className="relative mt-[2.125rem] h-[44.1875rem]">
          <div className="relative mx-auto h-full w-[90rem]">
            <Marquee scale={1} className="absolute left-[7rem] top-0" />
          </div>
          <div className={`${fade} top-[13.875rem] h-[30.3125rem]`} />
        </div>
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
          <SocialIcons gaps={[1.5, 1.5]} />
        </div>
        <div className="relative h-[32.375rem]">
          <div className="relative mx-auto h-full w-[23.4375rem]">
            <Marquee scale={246.127 / 384.19} className="absolute left-[1.25rem] top-[2.2175rem]" />
          </div>
          <div className={`${fade} top-[11.1063rem] h-[19.4195rem]`} />
        </div>
      </div>
    </section>
  )
}
