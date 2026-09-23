import Container from './ui/Container'
import Button from './ui/Button'
import motherDaughter from '../assets/photos/mother-daughter.jpg'

export default function Mae() {
  return (
    <section id="mae" className="overflow-hidden bg-primary">
      <Container className="flex flex-col items-center gap-10 py-16 tablet:flex-row tablet:gap-12 tablet:py-20 desktop:gap-20 desktop:py-24">
        <div className="w-full max-w-[26rem] overflow-hidden rounded-[2rem] tablet:w-1/2 tablet:max-w-none tablet:rounded-[3rem]">
          <img
            src={motherDaughter}
            alt="Mãe e filha sorrindo olhando o celular"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-6 tablet:w-1/2">
          <h2
            data-reveal
            className="text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
          >
            Você é menor de idade?
          </h2>
          <p data-reveal className="max-w-[31rem] text-base text-neutral-900 desktop:text-lg">
            Tudo bem, a gente sabe que você já é responsável por quase tudo
            que faz, mas nós ainda precisamos que um adulto responsável
            autorize a abertura da sua conta na Z1, tá?
          </p>
          <div className="flex flex-col items-start gap-6">
            <p className="text-base text-neutral-900 desktop:text-lg">
              Se tiver alguma dúvida, acesse:
            </p>
            <Button variant="dark" icon="up-right" href="#faq">
              Mãe, vem cá saber mais
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
