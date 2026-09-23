import Container from './ui/Container'
import Card from './ui/Card'
import checkIcon from '../assets/icons/check.svg'
import phoneScreen from '../assets/photos/phone-screen.png'

const checks = [
  'É totalmente grátis',
  'Cadastro rápidão e 100% online',
  'Privacidade com um app para você e um para o seu responsável',
  'Cartão Mastercard Internacional para compras online e físicas',
  'Dindin na conta via boleto e Pix',
  'Notificações em tempo real',
  'Suporte 24h, todos os dias da semana',
]

export default function Detalhes() {
  return (
    <section className="overflow-hidden bg-white py-16 tablet:py-20 desktop:py-24">
      <Container className="flex flex-col-reverse items-center gap-14 tablet:flex-row tablet:items-center tablet:gap-8 desktop:gap-16">
        <div className="group relative w-full max-w-[20rem] shrink-0 tablet:w-1/2 tablet:max-w-[24rem]">
          <div className="relative mx-auto w-[65%] overflow-hidden rounded-[1.75rem] bg-ink p-1.5 shadow-2xl transition-transform duration-500 tablet:group-hover:-translate-x-6">
            <img
              src={phoneScreen}
              alt="Aplicativo Z1"
              className="w-full rounded-[1.4rem]"
            />
          </div>
          <Card
            className="absolute right-0 top-1/2 w-[55%] -translate-y-1/2 translate-x-4 rotate-[18deg] opacity-90 transition-all duration-500 tablet:opacity-0 tablet:rotate-[70deg] tablet:translate-x-0 tablet:group-hover:translate-x-8 tablet:group-hover:rotate-[18deg] tablet:group-hover:opacity-100"
          />
        </div>

        <div className="flex flex-col items-start gap-8 tablet:w-1/2">
          <h2
            data-reveal
            className="text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
          >
            Sua conta na Z1
          </h2>
          <ul className="flex w-full flex-col">
            {checks.map((item) => (
              <li
                key={item}
                data-reveal
                className="flex items-center gap-4 border-b border-neutral-100 py-3"
              >
                <img src={checkIcon} alt="" className="h-6 w-10 shrink-0" />
                <span className="text-base text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
