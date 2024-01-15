import {
  Clock4Icon,
  CoinsIcon,
  DollarSignIcon,
  ShieldCheckIcon,
} from 'lucide-react'
import { Metadata } from 'next'

import { Overview } from '@/components/overview'
import { RecentSales } from '@/components/recent-sales'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getValidatorMetrics } from '@/lib/beaconchain'
import {
  getDailyEthereumParticipants,
  getEthFinancialMetrics,
  getEthSupplyAndStakingMetrics,
} from '@/lib/dune'
import { formatNumber } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Ethereum Dashboard',
  description: 'Unbiased dashboard of Ethereum metrics.',
}

export default async function DashboardPage() {
  const dailyEthereumParticipants = await getDailyEthereumParticipants()
  const validatorMetrics = await getValidatorMetrics()
  const ethSupplyAndStakingMetrics = await getEthSupplyAndStakingMetrics()
  const ethFinancialMetric = await getEthFinancialMetrics()

  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Ethereum</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ether Price
                </CardTitle>
                <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(ethFinancialMetric('B) Current Price ($)'))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(ethFinancialMetric('C) Daily Return (%)'), {
                    showSign: true,
                  })}
                  % since yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ether Supply
                </CardTitle>
                <CoinsIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(ethSupplyAndStakingMetrics.cir_supply)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(ethSupplyAndStakingMetrics.supply_change_24hr, {
                    showSign: true,
                  })}{' '}
                  since yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ether Staked
                </CardTitle>
                <Clock4Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(ethSupplyAndStakingMetrics.current_staked)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(ethSupplyAndStakingMetrics.stake_ratio)}% of
                  supply
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Validators
                </CardTitle>
                <ShieldCheckIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(validatorMetrics.validatorscount)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {validatorMetrics.beaconchain_entering} entering,{' '}
                  {validatorMetrics.beaconchain_exiting} exiting
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
