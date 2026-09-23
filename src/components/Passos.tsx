import Container from './ui/Container'
import icon1 from '../assets/icons/passo-1.svg'
import icon2 from '../assets/icons/passo-2.svg'
import icon3 from '../assets/icons/passo-3.svg'

const steps = [
  {
    icon: icon1,
    title: 'Abra sua conta pelo app da Z1',
    text: 'Com seu RG e CPF em mãos você já pode fazer isso!',
  },
  {
    icon: icon2,
    title: 'Indique um responsável',
    text: 'A pessoa indicada também precisará baixar o app e se cadastrar',
  },
  {
    icon: icon3,
    title: 'Receba seu cartão',
    text: 'Depois disso, a conta será aprovada e nós enviaremos seu cartão Z1',
  },
]

export default function Passos() {
  return (
    <section id="passos" className="bg-white py-16 tablet:py-20 desktop:py-24">
      <Container className="flex flex-col items-center gap-12 desktop:gap-[4.5rem]">
        <h2
          data-reveal
          className="text-center text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
        >
          Passo a passo pra você virar Z1
        </h2>

        <div className="grid w-full max-w-[76rem] grid-cols-1 gap-10 tablet:grid-cols-3 tablet:gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              data-reveal
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-lg bg-neutral-50">
                <img src={step.icon} alt="" className="size-10" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-bold text-ink">{step.title}</p>
                <p className="max-w-[16rem] text-base text-neutral-700">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
