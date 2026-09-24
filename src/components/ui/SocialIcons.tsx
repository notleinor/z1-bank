import tiktok from '../../assets/icons/social-tiktok.svg'
import tiktokHover from '../../assets/icons/social-tiktok-hover.svg'
import linkedin from '../../assets/icons/social-linkedin.svg'
import linkedinHover from '../../assets/icons/social-linkedin-hover.svg'
import instagram from '../../assets/icons/social-instagram.svg'
import instagramHover from '../../assets/icons/social-instagram-hover.svg'
import { r } from '../../lib/motion'

const icons = [
  { label: 'TikTok', src: tiktok, hover: tiktokHover, w: 31.39, h: 33.585 },
  { label: 'LinkedIn', src: linkedin, hover: linkedinHover, w: 31.735, h: 33.557 },
  { label: 'Instagram', src: instagram, hover: instagramHover, w: 33.47, h: 33.48 },
]

export default function SocialIcons({ gaps }: { gaps: [number, number] }) {
  return (
    <div className="flex items-start">
      {icons.map((icon, i) => (
        <a
          key={icon.label}
          href="#"
          aria-label={icon.label}
          className="group relative block shrink-0 select-none"
          style={{ width: r(icon.w), height: r(icon.h), marginLeft: i === 0 ? 0 : r(gaps[i - 1]) }}
        >
          <img src={icon.src} alt="" className="absolute inset-0 size-full" />
          <img
            src={icon.hover}
            alt=""
            className="absolute inset-0 size-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  )
}
