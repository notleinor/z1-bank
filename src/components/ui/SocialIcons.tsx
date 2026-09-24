import tiktok from '../../assets/icons/social-tiktok.svg'
import linkedin from '../../assets/icons/social-linkedin.svg'
import instagram from '../../assets/icons/social-instagram.svg'

const icons = [
  { label: 'TikTok', src: tiktok },
  { label: 'LinkedIn', src: linkedin },
  { label: 'Instagram', src: instagram },
]

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-[1rem]">
      {icons.map((icon) => (
        <a
          key={icon.label}
          href="#"
          aria-label={icon.label}
          className="flex size-[3rem] select-none items-center justify-center rounded-[0.5rem] shadow-[inset_0_0_0_1px_var(--color-neutral-200)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-primary hover:shadow-none"
        >
          <img src={icon.src} alt="" className="h-[1.75rem] w-auto" />
        </a>
      ))}
    </div>
  )
}
