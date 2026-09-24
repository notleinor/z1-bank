import { gsap, Draggable } from './motion'

type LoopConfig = {
  speed?: number
  paddingRight?: number
  draggable?: boolean
}

type LoopTimeline = gsap.core.Timeline & {
  draggable?: Draggable
}

/**
 * Loop horizontal contínuo e sem emenda, opcionalmente arrastável — adaptado do
 * helper oficial `horizontalLoop` do GSAP. Os itens rodam em laço; ao arrastar,
 * o laço pausa e retoma, deixando o usuário escolher o que ver (com inércia).
 */
export function horizontalLoop(itemsInput: HTMLElement[], config: LoopConfig = {}): LoopTimeline {
  const items = gsap.utils.toArray<HTMLElement>(itemsInput)
  const tl = gsap.timeline({
    repeat: -1,
    paused: false,
    defaults: { ease: 'none' },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100)
    },
  }) as LoopTimeline

  const length = items.length
  const startX = items[0].offsetLeft
  const widths: number[] = []
  const xPercents: number[] = []
  const pixelsPerSecond = (config.speed || 1) * 100
  const snap = gsap.utils.snap(1)

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px') as string))
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100 +
          (gsap.getProperty(el, 'xPercent') as number),
      )
      return xPercents[i]
    },
  })
  gsap.set(items, { x: 0 })

  const totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], 'scaleX') as number) +
    (config.paddingRight || 0)

  for (let i = 0; i < length; i++) {
    const item = items[i]
    const curX = (xPercents[i] / 100) * widths[i]
    const distanceToStart = item.offsetLeft + curX - startX
    const distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, 'scaleX') as number)
    tl.to(
      item,
      { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond },
      0,
    )
      .fromTo(
        item,
        { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add('label' + i, distanceToStart / pixelsPerSecond)
  }

  if (config.draggable && typeof Draggable !== 'undefined') {
    const proxy = document.createElement('div')
    const wrap = gsap.utils.wrap(0, 1)
    const ratio = 1 / (tl.duration() * pixelsPerSecond)
    let startProgress = 0

    const align = (self: { startX: number; x: number }) =>
      tl.progress(wrap(startProgress + (self.startX - self.x) * ratio))

    tl.draggable = Draggable.create(proxy, {
      trigger: items[0].parentNode as HTMLElement,
      type: 'x',
      inertia: true,
      cursor: 'grab',
      activeCursor: 'grabbing',
      onPress() {
        tl.pause()
        startProgress = tl.progress()
      },
      onDrag() {
        align(this as unknown as { startX: number; x: number })
      },
      onThrowUpdate() {
        align(this as unknown as { startX: number; x: number })
      },
      onThrowComplete() {
        tl.play()
      },
    })[0]
  }

  return tl
}
