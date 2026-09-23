import Container from './ui/Container'
import StoreBadge from './ui/StoreBadge'
import Z1Logo from '../assets/logos/z1-logo.svg'

const columns = [
  {
    title: 'Políticas',
    links: ['Política de privacidade', 'Termos de uso'],
  },
  {
    title: 'Entre em contato',
    links: ['dados@z1.app', '(11) 4200-0024'],
  },
  {
    title: 'Sobre seus dados',
    links: ['salve@z1.app'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <Container className="flex flex-col gap-12 py-16 desktop:py-20">
        <div className="flex flex-col gap-10 tablet:flex-row tablet:justify-between">
          <img src={Z1Logo} alt="Z1" className="h-[2.047rem] w-[2.625rem]" />

          <div className="grid grid-cols-2 gap-8 tablet:grid-cols-3 desktop:gap-16">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6">
                <p className="text-lg font-bold text-ink">{col.title}</p>
                <div className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-base text-neutral-700 hover:text-ink"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-lg font-bold text-ink">Baixe o app</p>
            <div className="flex flex-wrap gap-6">
              <StoreBadge store="apple" variant="outline" />
              <StoreBadge store="google" variant="outline" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-100 pt-8 tablet:flex-row tablet:items-center tablet:justify-between">
          <p className="text-xs text-neutral-600">
            © 01 International, LLC &nbsp;•&nbsp; © 01 Pagamentos e Negócios,
            Ltda. &nbsp;•&nbsp; 35.810.871/0001-55
          </p>
          <p className="text-xs text-neutral-600">
            Desenvolvido por <span className="font-bold text-neutral-900">Ronielton</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
