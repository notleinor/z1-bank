import icon1 from '../assets/icons/passo-1.svg'
import icon2 from '../assets/icons/passo-2.svg'
import icon3 from '../assets/icons/passo-3.svg'

const glow =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 62 62' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.255 3.1 -3.1 3.255 26.35 31)'><stop stop-color='rgba(220,220,232,1)' offset='0'/><stop stop-color='rgba(220,220,232,0)' offset='1'/></radialGradient></defs></svg>\")"

const steps = [
  {
    icon: icon1,
    glowLeft: '-0.6875rem',
    inset: 'inset-[12.5%]',
    img: 'inset-[-4%]',
    title: 'Abra sua conta pelo app da Z1',
    text: 'Com seu RG e CPF em mãos você já pode fazer isso!',
    width: 'w-[14.5625rem]',
  },
  {
    icon: icon2,
    glowLeft: '-0.65625rem',
    inset: 'inset-[12.5%]',
    img: 'inset-[-4%]',
    title: 'Indique um responsável',
    text: 'A pessoa indicada também precisará baixar o app e se cadastrar',
    width: 'w-[17.0625rem]',
  },
  {
    icon: icon3,
    glowLeft: '-0.65625rem',
    inset: 'inset-[20.82%_8.31%_12.48%_8.32%]',
    img: 'inset-[-4.5%_-3.6%]',
    title: 'Receba seu cartão',
    text: 'Depois disso, a conta será aprovada e nós enviaremos seu cartão Z1',
    width: 'w-[16.3125rem]',
  },
]

export default function Passos() {
  return (
    <section
      id="passos"
      className="flex flex-col items-center gap-[4.5rem] bg-white px-[1.25rem] py-[2.5rem] desktop:py-[7.5rem]"
    >
      <h2 data-reveal className="text-center text-[1.5rem] font-bold leading-[1.2] text-ink desktop:text-[2.5rem]">
        Passo a passo <br className="desktop:hidden" />
        pra você virar Z1
      </h2>
      <div className="flex flex-col items-center gap-[3.5rem] desktop:w-[76rem] desktop:flex-row desktop:justify-between desktop:gap-0">
        {steps.map((step) => (
          <div key={step.title} data-reveal className="flex flex-col items-center gap-[1rem]">
            <div className="relative size-[2.5rem] shrink-0">
              <div
                className="absolute top-[-0.6875rem] size-[3.875rem] rounded-[0.25rem]"
                style={{ left: step.glowLeft, backgroundImage: glow }}
              />
              <div className={`absolute ${step.inset}`}>
                <div className={`absolute ${step.img}`}>
                  <img src={step.icon} alt="" className="block size-full max-w-none" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[0.5rem] text-center leading-[1.4]">
              <p className="whitespace-nowrap text-[1.125rem] font-bold text-ink">{step.title}</p>
              <p className={`text-[1rem] text-neutral-700 ${step.width}`}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
