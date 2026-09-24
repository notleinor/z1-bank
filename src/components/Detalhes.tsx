import DetalhesAnim from './DetalhesAnim'
import checkIcon from '../assets/icons/check.svg'

const checks = [
  'É totalmente grátis',
  'Cadastro rápidão e 100% online',
  'Privacidade com um app para você e um para o seu responsável',
  'Cartão Mastercard Internacional para compras online e físicas',
  'Dindin na conta via boleto e Pix',
  'Notificações em tempo real',
  'Suporte 24h, todos os dias da semana',
]

function Checks({ mobile }: { mobile?: boolean }) {
  return (
    <ul
      className={
        mobile
          ? 'flex w-[19.7917rem] flex-col gap-[1rem] tablet:grid tablet:w-[36rem] tablet:grid-cols-2 tablet:gap-x-[2rem]'
          : 'flex flex-col gap-[1rem]'
      }
    >
      {checks.map((item, i) => (
        <li
          key={item}
          data-reveal
          className={`flex items-center pb-[1rem] pt-[0.5rem] ${
            mobile ? 'gap-[0.5rem]' : 'gap-[1rem] whitespace-nowrap'
          } ${
            mobile && i === checks.length - 1
              ? 'tablet:border-b-[0.05rem] tablet:border-neutral-100'
              : 'border-b-[0.05rem] border-neutral-100'
          }`}
        >
          <img
            src={checkIcon}
            alt=""
            className={mobile ? 'h-[1rem] w-[1.6667rem] shrink-0' : 'h-[1.5rem] w-[2.5rem] shrink-0'}
          />
          <span className={`leading-[1.4] text-neutral-700 ${mobile ? 'text-[0.875rem]' : 'text-[1rem]'}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Detalhes() {
  return (
    <section className="overflow-hidden bg-white">
      {/* Desktop — frame 1440 × 509 + 120 de respiro */}
      <div className="relative mx-auto hidden h-[31.8125rem] w-[90rem] desktop:block">
        <DetalhesAnim className="absolute left-[7rem] top-0" />
        <div className="absolute left-[52.5rem] top-0 flex flex-col items-start gap-[2rem]">
          <h2 data-reveal className="text-[2.5rem] font-bold leading-[1.2] text-ink">
            Sua conta na Z1
          </h2>
          <Checks />
        </div>
      </div>
      <div className="hidden h-[7.5rem] desktop:block" />

      {/* Mobile / tablet */}
      <div className="flex flex-col items-center desktop:hidden">
        <div className="flex flex-col items-center gap-[2rem] px-[1.25rem] py-[2.5rem] tablet:pb-[3rem]">
          <h2 data-reveal className="text-[1.5rem] font-bold leading-[1.2] text-ink">
            Sua conta na Z1
          </h2>
          <Checks mobile />
        </div>
        <DetalhesAnim className="[--s:0.56684] tablet:[--s:0.8]" />
      </div>
    </section>
  )
}
