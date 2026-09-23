import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'dark' | 'light' | 'outline'
type ButtonIcon = 'down' | 'up-right'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  icon?: ButtonIcon
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  dark: 'bg-ink text-white border border-ink hover:bg-white hover:text-ink',
  light: 'bg-white text-ink border border-white hover:bg-ink hover:text-white',
  outline:
    'bg-white text-ink border border-neutral-100 hover:bg-ink hover:text-white hover:border-ink',
}

const iconRotation: Record<ButtonIcon, string> = {
  down: 'rotate-[135deg]',
  'up-right': 'rotate-45',
}

export default function Button({
  variant = 'dark',
  icon = 'up-right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`group inline-flex items-baseline gap-4 rounded px-6 py-4 text-lg font-medium leading-[1.4] transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className={`size-[0.625rem] shrink-0 ${iconRotation[icon]} transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
      >
        <path
          d="M1 9L9 1M9 1H2.5M9 1V7.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
