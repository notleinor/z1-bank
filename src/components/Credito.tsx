import Button from './ui/Button'
import CreditoVisual from './CreditoVisual'
import iconCreditCard from '../assets/icons/credit-card.svg'
import iconJoystick from '../assets/icons/joystick.svg'
import iconLock from '../assets/icons/card-lock.svg'
import iconHeart from '../assets/icons/card-heart.svg'
import iconSend from '../assets/icons/card-send.svg'
import iconStar from '../assets/icons/card-star.svg'

type Feature = { icon: string; inset: string; img: string; text: string }

const main: Feature[] = [
  {
    icon: iconCreditCard,
    inset: 'inset-[12.5%_14.17%_12.5%_2.5%]',
    img: 'inset-[-4%_-3.6%]',
    text: 'Crébito significa que é um cartão pré-pago que passa na função crédito',
  },
  {
    icon: iconJoystick,
    inset: 'inset-[10%_14.17%_10.83%_2.5%]',
    img: 'inset-[-3.79%_-3.6%]',
    text: 'É aceito nos serviços online que você mais curte, como streamings e jogos',
  },
]

const extra: Feature[] = [
  {
    icon: iconLock,
    inset: 'inset-[15%_18.33%_14.17%_2.5%]',
    img: 'inset-[-4.24%_-3.79%]',
    text: 'Ele tem um escudo anti dívidas, porque você passa no crédito, mas só pode gastar o saldo que estiver disponível na sua conta',
  },
  {
    icon: iconHeart,
    inset: 'inset-[16.67%_18.33%_12.5%_2.5%]',
    img: 'inset-[-4.24%_-3.79%]',
    text: 'Nós respeitamos a identidade de todes, por isso seu cartão é emitido com seu nome social',
  },
  {
    icon: iconSend,
    inset: 'inset-[17.5%_22.5%_16.67%_2.5%]',
    img: 'inset-[-4.56%_-4%]',
    text: 'O cartão físico é emitido assim que você adicionar o primeiro din na sua conta e chega na sua casa rapidinho',
  },
  {
    icon: iconStar,
    inset: 'inset-[12.5%_22.5%_12.5%_2.5%]',
    img: 'inset-[-4%]',
    text: 'É o cartão mais lindo e estiloso que alguém pode ter',
  },
]

function Icon({ f, size }: { f: Feature; size: string }) {
  return (
    <div className={`relative shrink-0 ${size}`}>
      <div className={`absolute ${f.inset}`}>
        <div className={`absolute ${f.img}`}>
          <img src={f.icon} alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  )
}

function DesktopFeature({ f }: { f: Feature }) {
  return (
    <div data-reveal className="flex w-[17.5rem] flex-col items-start gap-[1rem]">
      <Icon f={f} size="size-[2.5rem]" />
      <p className="w-[17.4375rem] text-[1rem] leading-[1.4] text-neutral-700">{f.text}</p>
    </div>
  )
}

function MobileFeature({ f }: { f: Feature }) {
  return (
    <div data-reveal className="flex items-start gap-[1rem]">
      <Icon f={f} size="size-[2rem]" />
      <p className="w-[17.4375rem] text-[0.875rem] leading-[1.4] text-neutral-700 tablet:w-[14rem]">{f.text}</p>
    </div>
  )
}

const Title = ({ className }: { className: string }) => (
  <h2 data-reveal className={`whitespace-nowrap font-bold leading-[1.2] text-ink ${className}`}>
    <span className="font-normal">Seu cartão de</span> CRÉBITO
  </h2>
)

export default function Credito() {
  return (
    <section id="credito" className="overflow-hidden bg-white">
      {/* Desktop — frame 1440 × 839 */}
      <div className="relative mx-auto hidden h-[52.4375rem] w-[90rem] desktop:block">
        <div className="absolute left-[7rem] top-[5.3125rem] flex flex-col items-start gap-[2rem]">
          <div className="flex flex-col items-start gap-[2rem]">
            <div className="flex flex-col items-start gap-[1.5rem]">
              <Title className="text-[2.5rem]" />
              <div className="flex items-start gap-[2rem]">
                {main.map((f) => (
                  <DesktopFeature key={f.text} f={f} />
                ))}
              </div>
            </div>
            <div className="h-px w-[37rem] bg-neutral-100" />
            <div className="flex flex-col items-start gap-[1.5rem]">
              <p data-reveal className="text-[1.5rem] leading-[1.4] text-ink">E além disso:</p>
              <div className="grid grid-cols-[17.5rem_17.5rem] gap-[2rem]">
                {extra.map((f) => (
                  <DesktopFeature key={f.text} f={f} />
                ))}
              </div>
            </div>
          </div>
          <Button icon="none" href="#app">Quero uma conta na Z1</Button>
        </div>
        <CreditoVisual className="absolute left-[47.43rem] top-0" />
      </div>

      {/* Mobile / tablet */}
      <div className="flex flex-col items-center gap-[2rem] pt-[3.5rem] desktop:hidden">
        <div className="flex flex-col items-center gap-[2.5rem]">
          <div className="flex flex-col items-start gap-[2.5rem]">
            <div className="flex flex-col items-center gap-[1.5rem]">
              <Title className="text-[1.5rem]" />
              <div className="flex flex-col items-start gap-[2rem] tablet:grid tablet:grid-cols-2 tablet:gap-x-[2rem]">
                {main.map((f) => (
                  <MobileFeature key={f.text} f={f} />
                ))}
              </div>
            </div>
            <div className="h-px w-full bg-neutral-100" />
          </div>
          <div className="flex flex-col items-center gap-[1.5rem]">
            <p data-reveal className="text-[1.5rem] leading-[1.4] text-ink">E além disso:</p>
            <div className="flex flex-col items-start gap-[2rem] tablet:grid tablet:grid-cols-2 tablet:gap-x-[2rem]">
              {extra.map((f) => (
                <MobileFeature key={f.text} f={f} />
              ))}
            </div>
          </div>
        </div>
        <Button icon="none" href="#app">Quero uma conta na Z1</Button>
        <div className="flex w-full justify-center border-t border-neutral-100">
          <CreditoVisual className="overflow-hidden [--s:0.58104] tablet:[--s:0.8]" />
        </div>
      </div>
    </section>
  )
}
