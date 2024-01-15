'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { DailyEthereumParticipants } from '@/lib/types'
import { formatNumber } from '@/lib/utils'

export function ActiveAddresses({
  dailyParticipants,
}: {
  dailyParticipants: DailyEthereumParticipants[]
}) {
  const data = dailyParticipants
    .slice(0, 12)
    .reverse()
    .map((day) => ({
      date: new Date(day.Day).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
      }),
      total: day['# Total Addresses'],
    }))

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => formatNumber(value)}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
