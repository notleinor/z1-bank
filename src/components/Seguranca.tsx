import Container from './ui/Container'
import iconMastercard from '../assets/icons/mastercard-circle.svg'
import iconClock from '../assets/icons/clock-time.svg'
import iconLock from '../assets/icons/lock-protection.svg'
import iconHandshake from '../assets/icons/handshake.svg'

const items = [
  {
    icon: iconMastercard,
    title: 'Mastercard ®',
    text: 'Toda a confiança e segurança de um cartão Mastercard',
  },
  {
    icon: iconClock,
    title: 'Bloqueio temporário',
    text: 'Bloqueie e desbloqueie seu cartão Z1 pelo app sempre que precisar',
  },
  {
    icon: iconLock,
    title: 'Privacidade',
    text: 'Jamais compartilharemos seus dados sem a sua autorização, ok?',
  },
  {
    icon: iconHandshake,
    title: 'Parceiros bancários',
    text: 'Seus dados serão compartilhados apenas com a SWAP e Starkbank, nossos parceiros bancários que fazem todo armazenamento do seu dinheiro',
  },
]

export default function Seguranca() {
  return (
    <section
      id="seguranca"
      className="bg-white py-16 tablet:py-20 desktop:py-24"
    >
      <Container className="flex flex-col items-center gap-12 desktop:gap-16">
        <h2
          data-reveal
          className="text-center text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
        >
          E a segurança, como fica?
        </h2>
        <div className="grid w-full max-w-[76rem] grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="flex items-center justify-center rounded-lg border border-neutral-100 p-4">
                <img src={item.icon} alt="" className="size-10" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-lg font-bold text-ink">{item.title}</p>
                <p className="max-w-[18rem] text-base text-neutral-700">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
