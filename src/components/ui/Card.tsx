import z1Logo from '../../assets/logos/card-z1-logo.svg'
import mastercardLogo from '../../assets/logos/card-mastercard.svg'

export default function Card({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[474/304] overflow-hidden rounded-[10%] bg-gradient-to-br from-[#FF2D78] via-[#EE54EA] to-[#FFFB5C] shadow-[0_1.5rem_3rem_-1rem_rgba(235,85,234,0.45)] ${className}`}
    >
      <div className="absolute left-[8%] top-[10%] h-[16%] w-[11%] rounded-[20%] bg-gradient-to-br from-neutral-200 to-white" />
      <img
        src={z1Logo}
        alt=""
        className="absolute bottom-[8%] left-[6%] h-[11%] w-auto brightness-0 invert"
      />
      <img
        src={mastercardLogo}
        alt=""
        className="absolute bottom-[7%] right-[6%] h-[14%] w-auto"
      />
    </div>
  )
}
