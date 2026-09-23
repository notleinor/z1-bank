import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollReveal() {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')

    const triggers = targets.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        },
      ),
    )

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill())
    }
  }, [])
}
