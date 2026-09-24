import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '../lib/motion'

export default function useScrollReveal() {
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const splits: SplitText[] = []

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        const trigger = { trigger: el, start: 'top 88%', once: true }

        if (el.tagName === 'H2') {
          const split = SplitText.create(el, { type: 'words', mask: 'words', wordsClass: 'split' })
          splits.push(split)
          gsap.from(split.words, {
            yPercent: 110,
            rotate: 3,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.05,
            scrollTrigger: trigger,
            onComplete: () => split.revert(),
          })
          return
        }

        gsap.from(el, { y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: trigger })
      })

      return () => splits.forEach((s) => s.revert())
    })
  })
}
