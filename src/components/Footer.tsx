import StoreBadge from './ui/StoreBadge'
import z1Logo from '../assets/logos/z1-logo.svg'

const columns = [
  { title: 'Políticas', links: ['Política de privacidade', 'Termos de uso'] },
  { title: 'Entre em contato', links: ['dados@z1.app', '(11) 4200-0024'] },
  { title: 'Sobre seus dados', links: ['salve@z1.app'] },
]

const linkClass = 'leading-[1.4] text-neutral-700 transition-colors duration-300 ease-out hover:text-neutral-300'

function Column({ col, mobile }: { col: (typeof columns)[number]; mobile?: boolean }) {
  return (
    <div className={`flex flex-col items-start ${mobile ? 'gap-[0.5rem]' : 'gap-[1.5rem]'}`}>
      <p className={`whitespace-nowrap font-bold leading-[1.4] text-ink ${mobile ? 'text-[1rem]' : 'text-[1.125rem]'}`}>
        {col.title}
      </p>
      <div className={`flex flex-col items-start ${mobile ? 'gap-[0.5rem]' : 'gap-[1rem]'}`}>
        {col.links.map((link) => (
          <a key={link} href="#" className={`whitespace-nowrap ${linkClass} ${mobile ? 'text-[0.875rem]' : 'text-[1rem]'}`}>
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

const Credit = () => (
  <>
    Desenvolvido por <span className="font-bold text-neutral-900">Ronielton</span>
  </>
)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-50">
      {/* Desktop — frame 1440 × 367 */}
      <div className="hidden desktop:block">
        <div className="relative mx-auto h-[22.9375rem] w-[90rem]">
          <img src={z1Logo} alt="Z1" className="absolute left-[7rem] top-[4.25rem] h-[2.0469rem] w-[2.625rem]" />
          <div className="absolute left-[13.5rem] top-[4.25rem] flex w-[69.5rem] items-start justify-between">
            {columns.map((col) => (
              <Column key={col.title} col={col} />
            ))}
            <div className="flex flex-col items-start gap-[1.5rem]">
              <p className="text-[1.125rem] font-bold leading-[1.4] text-ink">Baixe o app</p>
              <div className="flex gap-[1.5rem]">
                <StoreBadge store="apple" variant="footer" className="w-[11.25rem]" />
                <StoreBadge store="google" variant="footer" className="w-[11.25rem]" />
              </div>
            </div>
          </div>
          <p className="absolute left-[7.125rem] top-[20.6875rem] whitespace-pre text-[0.75rem] leading-[1.4] text-neutral-600">
            {'© 01 International, LLC    •    © 01 Pagamentos e Negócios, Ltda.    •    35.810.871/0001-55'}
          </p>
          <p className="absolute right-[7rem] top-[20.6875rem] whitespace-nowrap text-[0.75rem] leading-[1.4] text-neutral-600">
            <Credit />
          </p>
        </div>
        <div className="absolute inset-x-0 top-[19.5625rem] h-px bg-neutral-100" />
      </div>

      {/* Mobile / tablet — 375 × 629 */}
      <div className="desktop:hidden">
        <div className="mx-auto w-[20.875rem] pt-[4.5rem] tablet:w-[36rem]">
          <img src={z1Logo} alt="Z1" className="ml-[-0.125rem] h-[2.0469rem] w-[2.625rem]" />
          <div className="mt-[3.7656rem] flex flex-col items-start gap-[1.5rem] tablet:flex-row tablet:flex-wrap tablet:justify-between tablet:gap-y-[2.5rem]">
            <div className="flex gap-[2.5rem] tablet:contents">
              <div className="w-[8.5625rem] tablet:w-auto">
                <Column col={columns[0]} mobile />
              </div>
              <Column col={columns[1]} mobile />
            </div>
            <Column col={columns[2]} mobile />
            <div className="flex flex-col items-start gap-[1.5rem] tablet:w-full">
              <p className="text-[1rem] font-bold leading-[1.4] text-ink">Baixe o app</p>
              <div className="flex gap-[0.4537rem] tablet:gap-[1rem]">
                <StoreBadge store="apple" variant="footer" className="w-[10.2106rem]" />
                <StoreBadge store="google" variant="footer" className="w-[10.2106rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4.5rem] h-px w-full bg-neutral-100" />
        <div className="mx-auto flex w-[20.875rem] flex-col items-center gap-[1rem] pb-[1.125rem] pt-[1.125rem] text-center text-[0.75rem] leading-[1.4] text-neutral-600 tablet:w-[36rem]">
          <p>
            © 01 International, LLC
            <br />© 01 Pagamentos e Negócios, Ltda
            <br />
            35.810.871/0001-55
          </p>
          <p>
            <Credit />
          </p>
        </div>
      </div>
    </footer>
  )
}
