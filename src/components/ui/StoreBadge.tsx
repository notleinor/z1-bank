import appstore from '../../assets/stores/appstore.svg'
import appstoreHover from '../../assets/stores/appstore-hover.svg'
import googleplay from '../../assets/stores/googleplay.svg'
import googleplayHover from '../../assets/stores/googleplay-hover.svg'
import appstoreFooter from '../../assets/stores/appstore-footer.svg'
import appstoreFooterHover from '../../assets/stores/appstore-footer-hover.svg'
import googleplayFooter from '../../assets/stores/googleplay-footer.svg'
import googleplayFooterHover from '../../assets/stores/googleplay-footer-hover.svg'

const sources = {
  apple: { default: [appstore, appstoreHover], footer: [appstoreFooter, appstoreFooterHover] },
  google: { default: [googleplay, googleplayHover], footer: [googleplayFooter, googleplayFooterHover] },
}

type StoreBadgeProps = {
  store: 'apple' | 'google'
  variant?: 'default' | 'footer'
  className?: string
}

export default function StoreBadge({ store, variant = 'default', className = '' }: StoreBadgeProps) {
  const [normal, hover] = sources[store][variant]
  const label = store === 'apple' ? 'Disponível na App Store' : 'Disponível no Google Play'
  return (
    <a
      href="#"
      aria-label={label}
      className={`group relative block aspect-[180/55] shrink-0 ${className}`}
    >
      <img src={normal} alt="" className="absolute inset-0 size-full" />
      <img
        src={hover}
        alt=""
        className="absolute inset-0 size-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
    </a>
  )
}
