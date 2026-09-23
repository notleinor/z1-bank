type StoreBadgeProps = {
  store: 'apple' | 'google'
  variant?: 'filled' | 'outline'
  className?: string
}

export default function StoreBadge({
  store,
  variant = 'filled',
  className = '',
}: StoreBadgeProps) {
  const isApple = store === 'apple'
  return (
    <a
      href={isApple ? '#' : '#'}
      className={`flex h-[3.38rem] w-[11.25rem] items-center justify-center gap-3 rounded bg-white transition-transform hover:scale-[1.03] ${
        variant === 'outline' ? 'border-2 border-ink' : 'border border-neutral-100'
      } ${className}`}
    >
      {isApple ? (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
          <path
            fill="#060613"
            d="M18.2 13.77c-.03-2.76 2.26-4.08 2.36-4.14-1.29-1.88-3.3-2.14-4.02-2.17-1.71-.17-3.35 1.01-4.22 1.01-.88 0-2.2-.98-3.63-.96-1.86.03-3.6 1.09-4.56 2.74-1.96 3.4-.5 8.4 1.4 11.15.93 1.35 2.05 2.86 3.5 2.8 1.4-.06 1.93-.9 3.63-.9 1.68 0 2.17.9 3.65.87 1.51-.02 2.47-1.37 3.4-2.72 1.07-1.55 1.51-3.06 1.53-3.13-.03-.02-2.94-1.13-2.97-4.5ZM15.44 5.6c.77-.94 1.3-2.24 1.15-3.55-1.12.05-2.49.75-3.29 1.68-.71.82-1.35 2.16-1.18 3.42 1.24.1 2.5-.63 3.32-1.55Z"
          />
        </svg>
      ) : (
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
          <path fill="#00D5FF" d="M1 1.5 15 12 1 22.5V1.5Z" />
          <path fill="#00F076" d="m1 1.5 12 6.5 3.3-1.9L1 1.5Z" />
          <path fill="#FF3A44" d="m1 22.5 12-6.5 3.3 1.9L1 22.5Z" />
          <path fill="#FFCE00" d="m16.3 9.1 4 2.3a1.2 1.2 0 0 1 0 2.1l-4 2.3-3.7-3.35 3.7-3.35Z" />
        </svg>
      )}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.6rem] text-neutral-700">
          Disponível na
        </span>
        <span className="text-base font-bold text-ink">
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </span>
    </a>
  )
}
