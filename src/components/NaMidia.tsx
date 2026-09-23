import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Draggable } from '../lib/motion'
import logoExame from '../assets/logos/media-exame.png'
import logoEstadao from '../assets/logos/media-estadao.png'
import logoBrazilJournal from '../assets/logos/media-brazil-journal.png'
import logoGlobo from '../assets/logos/media-globo.png'

const news = [
  { logo: logoExame, w: 192, text: 'Conta da Geração Z, Z1 levanta R$55 milhões em rodada com Kaszek' },
  { logo: logoEstadao, w: 150, text: 'Fintech Z1 chega ao mercado com conta digital para adolescentes' },
  { logo: logoBrazilJournal, w: 249.946, text: 'Z1: o banco teen que quer crescer com o cliente' },
  { logo: logoGlobo, w: 190.512, text: 'Z1, conta digital da geração Z que lidera no TikTok, levanta R$55 milhões' },
]

function Cards({ scale, pad }: { scale: number; pad: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const [drag] = Draggable.create(track.current, {
        type: 'x',
        bounds: wrap.current,
        inertia: true,
        edgeResistance: 0.85,
        dragClickables: true,
        cursor: 'grab',
        activeCursor: 'grabbing',
      })
      const onResize = () => drag.applyBounds(wrap.current!)
      window.addEventListener('resize', onResize)
      return () => {
        window.removeEventListener('resize', onResize)
        drag.kill()
      }
    },
    { scope: wrap },
  )

  return (
    <div ref={wrap} className="w-full overflow-hidden">
      <div
        ref={track}
        className="u flex w-max select-none items-start gap-[32em]"
        style={{ ['--s' as string]: scale, paddingLeft: pad, paddingRight: pad }}
      >
        {news.map((item) => (
          <article
            key={item.text}
            data-reveal
            className="flex w-[384em] shrink-0 flex-col transition-transform duration-300 ease-out hover:-translate-y-[6em]"
          >
            <div className="flex items-start rounded-t-[16em] bg-primary px-[24em] py-[32em]">
              <img
                src={item.logo}
                alt=""
                draggable={false}
                className="h-[32em] object-cover"
                style={{ width: `${item.w}em` }}
              />
            </div>
            <div className="rounded-b-[16em] bg-white px-[24em] py-[32em] shadow-[inset_0_0_0_1em_var(--color-neutral-100)]">
              <div className="w-[340em]">
                <p className="text-[18em] leading-[1.4] text-neutral-700">{item.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function NaMidia() {
  return (
    <section className="bg-white pb-[2rem] pt-[2rem] desktop:pb-[7.5rem] desktop:pt-0">
      {/* Desktop */}
      <div className="hidden desktop:block">
        <div className="mx-auto w-[90rem] pl-[7.125rem]">
          <h2 data-reveal className="text-[2.5rem] font-bold leading-[1.2] text-ink">
            Z1 na mídia
          </h2>
        </div>
        <div className="mt-[2.5rem]">
          <Cards scale={1} pad="max(7rem, calc(50vw - 38rem))" />
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="flex flex-col items-center gap-[2rem] desktop:hidden">
        <h2 data-reveal className="text-center text-[1.5rem] font-bold leading-[1.2] text-ink">
          Z1 na mídia
        </h2>
        <Cards scale={245.136 / 384} pad="max(1.25rem, calc(50vw - 10.46875rem))" />
      </div>
    </section>
  )
}
