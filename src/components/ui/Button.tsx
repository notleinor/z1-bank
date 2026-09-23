import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'
type Icon = 'down' | 'right' | 'none'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  icon?: Icon
  tight?: boolean
  children: ReactNode
}

// Bordas como inset shadow: no Figma o stroke é interno e não muda o tamanho do botão.
const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-white text-[1.125rem] hover:bg-white hover:text-ink hover:shadow-[inset_0_0_0_1px_var(--color-ink)]',
  secondary:
    'bg-white text-ink text-[1rem] shadow-[inset_0_0_0_1px_var(--color-neutral-100)] hover:bg-ink hover:text-white hover:shadow-[inset_0_0_0_1px_var(--color-ink)]',
}

export default function Button({
  variant = 'primary',
  icon = 'right',
  tight = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex shrink-0 items-baseline whitespace-nowrap rounded-[0.25rem] px-[1.5rem] py-[1rem] font-medium leading-[1.4] transition-[background-color,color,box-shadow] duration-300 ease-out ${tight ? 'gap-[0.8125rem]' : 'gap-[1rem]'} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon !== 'none' && (
        <span className="flex size-[0.8839rem] items-center justify-center self-center">
          <svg
            viewBox="0 0 11.5 11.5"
            fill="none"
            className={`size-[0.71875rem] ${icon === 'down' ? 'rotate-[135deg]' : 'rotate-45'}`}
            aria-hidden
          >
            <path
              d="M10.6997 0.800252L0.75 10.75M10.75 7.78518L10.6997 0.800252L3.71482 0.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </a>
  )
}
