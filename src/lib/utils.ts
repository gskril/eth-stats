import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(
  num: number | undefined,
  options?: { showSign: boolean }
) {
  if (!num) return 'n/a'

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

export function getLastUpdated(dateString: string | undefined) {
  if (!dateString) return 'n/a'

  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `Updated ${days}d ago`
  if (hours > 0) return `Update ${hours}h ago`
  if (minutes > 0) return `Update ${minutes}m ago`
  return `Updated just now`
}
