import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin)

/** Figma px → rem (frame de desenho em 16px). */
export const r = (px: number) => `${px / 16}rem`

/** Figma px → em dentro de um container `.u`. */
export const e = (px: number) => `${px}em`

// Preset "Bouncy" do Figma: mola com massa 1, rigidez 600, amortecimento 15.
const STIFFNESS = 600
const DAMPING = 15
export const BOUNCY_DURATION = 0.958

export const bouncy = (t: number) => {
  const w0 = Math.sqrt(STIFFNESS)
  const zeta = DAMPING / (2 * w0)
  const wd = w0 * Math.sqrt(1 - zeta * zeta)
  const time = t * BOUNCY_DURATION
  if (t >= 1) return 1
  return (
    1 -
    Math.exp(-zeta * w0 * time) *
      (Math.cos(wd * time) + ((zeta * w0) / wd) * Math.sin(wd * time))
  )
}

export { gsap, ScrollTrigger, SplitText, Draggable }
