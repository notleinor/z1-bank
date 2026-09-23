import Container from './ui/Container'
import StoreBadge from './ui/StoreBadge'
import womanPhone from '../assets/photos/woman-phone.jpg'

export default function AppDownload() {
  return (
    <section id="app" className="overflow-hidden bg-ink">
      <Container className="flex flex-col-reverse items-center gap-10 py-16 tablet:flex-row tablet:gap-12 tablet:py-20 desktop:gap-20 desktop:py-24">
        <div className="w-full max-w-[26rem] overflow-hidden rounded-[2rem] tablet:w-1/2 tablet:max-w-none tablet:rounded-[3rem]">
          <img
            src={womanPhone}
            alt="Jovem sorrindo usando o app da Z1 no celular"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-8 tablet:w-1/2">
          <div className="flex flex-col gap-2">
            <h2
              data-reveal
              className="max-w-[21rem] text-3xl font-bold leading-[1.2] text-white tablet:text-4xl"
            >
              E aí, pronto para se tornar um uzer?
            </h2>
            <p data-reveal className="text-lg text-neutral-100">
              Baixe o app e receba seu cartão
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>
        </div>
      </Container>
    </section>
  )
}
