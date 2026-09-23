import Container from './ui/Container'
import logoExame from '../assets/logos/media-exame.png'
import logoEstadao from '../assets/logos/media-estadao.png'
import logoBrazilJournal from '../assets/logos/media-brazil-journal.png'
import logoGlobo from '../assets/logos/media-globo.png'

const news = [
  {
    logo: logoExame,
    text: 'Conta da Geração Z, Z1 levanta R$55 milhões em rodada com Kaszek',
  },
  {
    logo: logoEstadao,
    text: 'Fintech Z1 chega ao mercado com conta digital para adolescentes',
  },
  {
    logo: logoBrazilJournal,
    text: 'Z1: o banco teen que quer crescer com o cliente',
  },
  {
    logo: logoGlobo,
    text: 'Z1, conta digital da geração Z que lidera no TikTok, levanta R$55 milhões',
  },
]

export default function NaMidia() {
  return (
    <section className="bg-white py-16 tablet:py-20 desktop:py-24">
      <Container className="flex flex-col gap-10 desktop:gap-12">
        <h2
          data-reveal
          className="text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
        >
          Z1 na mídia
        </h2>
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 desktop:grid-cols-4">
          {news.map((item) => (
            <div
              key={item.text}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-100"
            >
              <div className="flex items-start bg-primary px-6 py-8">
                <img src={item.logo} alt="" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex-1 bg-white px-6 py-8">
                <p className="text-lg text-neutral-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
