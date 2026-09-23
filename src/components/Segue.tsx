import Container from './ui/Container'
import iconTiktok from '../assets/icons/social-tiktok.svg'
import iconLinkedin from '../assets/icons/social-linkedin.svg'
import iconInstagram from '../assets/icons/social-instagram.svg'
import social1 from '../assets/photos/social-1.jpg'
import social2 from '../assets/photos/social-2.jpg'
import social3 from '../assets/photos/social-3.jpg'
import social4 from '../assets/photos/social-4.jpg'

const clips = [social1, social2, social3, social4]
const track = [...clips, ...clips]

export default function Segue() {
  return (
    <section className="overflow-hidden bg-white py-16 tablet:py-20 desktop:py-24">
      <Container className="flex items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h2
            data-reveal
            className="text-3xl font-bold leading-[1.2] text-ink tablet:text-4xl"
          >
            Segue a gente
          </h2>
          <p className="text-lg text-neutral-700">@z1.app</p>
        </div>
        <div className="hidden items-center gap-6 tablet:flex">
          <img src={iconTiktok} alt="TikTok" className="h-[2.1rem] w-auto" />
          <img
            src={iconLinkedin}
            alt="LinkedIn"
            className="h-[2.1rem] w-auto"
          />
          <img
            src={iconInstagram}
            alt="Instagram"
            className="h-[2.1rem] w-auto"
          />
        </div>
      </Container>

      <div className="relative mt-8 desktop:mt-12">
        <div className="animate-marquee flex w-max gap-6 [animation-play-state:running] hover:[animation-play-state:paused]">
          {track.map((src, i) => (
            <div
              key={i}
              className="h-[22rem] w-[15rem] shrink-0 overflow-hidden rounded-2xl desktop:h-[27rem] desktop:w-[18rem]"
            >
              <img
                src={src}
                alt=""
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent desktop:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent desktop:w-32" />
      </div>
    </section>
  )
}
