import type { ReactNode } from 'react'
import iconMastercard from '../assets/icons/mastercard-circle.svg'
import iconClock from '../assets/icons/clock-time.svg'
import iconLock from '../assets/icons/lock-protection.svg'
import iconLockPath from '../assets/icons/lock-path.svg'
import iconHandshake from '../assets/icons/handshake.svg'

const inset = (src: string) => (
  <div className="absolute inset-[12.5%]">
    <div className="absolute inset-[-4%]">
      <img src={src} alt="" className="block size-full max-w-none" />
    </div>
  </div>
)

const items: { icon: ReactNode; title: string; text: string; width: string }[] = [
  {
    icon: inset(iconMastercard),
    title: 'Mastercard ®',
    text: 'Toda a confiança e segurança de um cartão Mastercard',
    width: 'w-[14.5625rem]',
  },
  {
    icon: <img src={iconClock} alt="" className="absolute inset-0 size-full" />,
    title: 'Bloqueio temporário',
    text: 'Bloqueie e desbloqueie seu cartão Z1 pelo app sempre que precisar',
    width: 'w-[16.5rem]',
  },
  {
    icon: (
      <>
        <img src={iconLock} alt="" className="absolute inset-[-0.02%] size-full" />
        <img src={iconLockPath} alt="" className="absolute inset-0 size-full" />
      </>
    ),
    title: 'Privacidade',
    text: 'Jamais compartilharemos seus dados sem a sua autorização, ok?',
    width: 'w-[15.75rem]',
  },
  {
    icon: inset(iconHandshake),
    title: 'Parceiros bancários',
    text: 'Seus dados serão compartilhados apenas com a SWAP e Starkbank, nossos parceiros bancários que fazem todo armazenamento do seu dinheiro',
    width: 'w-[18.8125rem]',
  },
]

export default function Seguranca() {
  return (
    <section
      id="seguranca"
      className="flex flex-col items-center gap-[3rem] bg-white px-[1.25rem] py-[4rem] desktop:gap-[4.5rem] desktop:pb-[7.5rem] desktop:pt-0"
    >
      <h2 data-reveal className="whitespace-nowrap text-[1.5rem] font-bold leading-[1.2] text-ink desktop:text-[2.5rem]">
        E a segurança, como fica?
      </h2>
      <div className="flex flex-col items-center gap-[2.5rem] desktop:w-[75.875rem] desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-0">
        {items.map((item) => (
          <div key={item.title} data-reveal className="flex flex-col items-center gap-[0.75rem] desktop:gap-[1.5rem]">
            <div className="flex rounded-[0.5rem] p-[1rem] shadow-[inset_0_0_0_1px_var(--color-neutral-100)]">
              <div className="relative size-[2.5rem]">{item.icon}</div>
            </div>
            <div className="flex flex-col items-center gap-[0.125rem] text-center leading-[1.4] desktop:gap-[0.25rem]">
              <p className="text-[1.125rem] font-bold text-ink">{item.title}</p>
              <p className={`text-[0.875rem] text-neutral-700 desktop:text-[1rem] ${item.width}`}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
