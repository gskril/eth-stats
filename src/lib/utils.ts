import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number, options?: { showSign: boolean }) {
  // if a number if positive, prepend a plus sign
  const sign = num && options?.showSign && num > 0 ? '+' : ''

  return (
    sign +
    new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(num)
  )
}
