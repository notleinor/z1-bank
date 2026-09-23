import type { HTMLAttributes, ReactNode } from 'react'

export default function Container({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={`mx-auto w-full max-w-[90rem] px-5 tablet:px-10 desktop:px-16 wide:px-28 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
