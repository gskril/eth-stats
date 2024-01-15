import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { L2Summary } from '@/lib/types'
import { formatNumber } from '@/lib/utils'

export function L2Tvl({ data }: { data: L2Summary[] }) {
  return (
    <div className="space-y-8">
      {data.slice(0, 5).map((l2) => {
        return (
          <div className="flex items-center" key={l2.entity}>
            <Avatar className="h-9 w-9">
              <AvatarImage
                src={`https://l2beat.com/icons/${l2.entity.toLowerCase()}.png`}
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{l2.entity}</p>
              <p className="text-sm text-muted-foreground">{l2.technology}</p>
            </div>
            <div className="ml-auto font-medium">${formatNumber(l2.tvl)}</div>
          </div>
        )
      })}
    </div>
  )
}
