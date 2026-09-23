import Container from './ui/Container'
import Button from './ui/Button'
import starBig from '../assets/icons/star-big.svg'
import starSmall from '../assets/icons/star-small.svg'
import handsCardMachine from '../assets/photos/hands-card-machine.png'
import iconCreditCard from '../assets/icons/credit-card.svg'
import iconJoystick from '../assets/icons/joystick.svg'
import iconLock from '../assets/icons/card-lock.svg'
import iconHeart from '../assets/icons/card-heart.svg'
import iconSend from '../assets/icons/card-send.svg'
import iconStar from '../assets/icons/card-star.svg'

const mainFeatures = [
  {
    icon: iconCreditCard,
    text: 'Crébito significa que é um cartão pré-pago que passa na função crédito',
  },
  {
    icon: iconJoystick,
    text: 'É aceito nos serviços online que você mais curte, como streamings e jogos',
  },
]

const extraFeatures = [
  {
    icon: iconLock,
    text: 'Ele tem um escudo anti dívidas, porque você passa no crédito, mas só pode gastar o saldo que estiver disponível na sua conta',
  },
  {
    icon: iconHeart,
    text: 'Nós respeitamos a identidade de todes, por isso seu cartão é emitido com seu nome social',
  },
  {
    icon: iconSend,
    text: 'O cartão físico é emitido assim que você adicionar o primeiro din na sua conta e chega na sua casa rapidinho',
  },
  {
    icon: iconStar,
    text: 'É o cartão mais lindo e estiloso que alguém pode ter',
  },
]

export default function Credito() {
  return (
    <section
      id="credito"
      className="overflow-hidden bg-white py-16 tablet:py-20 desktop:py-24"
    >
      <Container className="flex flex-col items-center gap-14 tablet:flex-row tablet:items-start tablet:gap-8 desktop:gap-16">
        <div className="flex flex-col items-start gap-8 tablet:w-1/2">
          <h2
            data-reveal
            className="text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
          >
            Seu cartão de <span>CRÉBITO</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
            {mainFeatures.map((f) => (
              <div key={f.text} className="flex max-w-[17.5rem] flex-col gap-4">
                <img src={f.icon} alt="" className="size-10" />
                <p className="text-base text-neutral-700">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="h-px w-full max-w-[37rem] bg-neutral-100" />

          <div className="flex flex-col gap-6">
            <p className="text-2xl text-ink">E além disso:</p>
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
              {extraFeatures.map((f) => (
                <div
                  key={f.text}
                  className="flex max-w-[17.5rem] flex-col gap-4"
                >
                  <img src={f.icon} alt="" className="size-10" />
                  <p className="text-base text-neutral-700">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Button variant="dark" icon="up-right" href="#app">
            Quero uma conta na Z1
          </Button>
        </div>

        <div className="relative w-full max-w-[24rem] tablet:sticky tablet:top-24 tablet:w-1/2">
          <img
            src={starBig}
            alt=""
            aria-hidden
            className="animate-spin-slow absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2"
          />
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <img
              src={handsCardMachine}
              alt="Mãos aproximando o cartão Z1 da maquininha"
              className="size-full object-cover object-top transition-transform duration-500 tablet:group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute -right-4 -top-8 w-[42%] tablet:-right-10 tablet:-top-10">
            <img
              src={starSmall}
              alt=""
              aria-hidden
              className="animate-spin-slower w-full"
            />
            <div className="absolute inset-0 flex rotate-[5deg] items-center justify-center">
              <span className="rounded border-2 border-ink bg-neutral-50 px-4 py-2 font-mono text-xl text-ink">
                R$ 0,00
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
