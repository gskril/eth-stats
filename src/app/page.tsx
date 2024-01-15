import { Metadata } from 'next'

import { ActiveAddresses } from '@/components/active-addresses'
import { L2Tvl } from '@/components/l2-tvl'
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
  getL2Summary,
} from '@/lib/dune'
import { formatNumber, getLastUpdated } from '@/lib/utils'

export const revalidate = 3600 // revalidate at most every hour

export const metadata: Metadata = {
  title: 'Ethereum Dashboard',
  description: 'Unbiased dashboard of Ethereum metrics.',
  metadataBase: new URL('https://eth-stats.vercel.app/'),
  openGraph: {
    images: ['/sharing.jpg'],
  },
}

export default async function DashboardPage() {
  const dailyEthereumParticipants = await getDailyEthereumParticipants()
  const validatorMetrics = await getValidatorMetrics()
  const { ethSupplyAndStakingMetricsExec, ethSupplyAndStakingMetrics } =
    await getEthSupplyAndStakingMetrics()
  const { ethFinancialMetrics, ethFinancialMetric } =
    await getEthFinancialMetrics()
  const l2Summary = await getL2Summary()

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
                <p className="text-xs text-muted-foreground">
                  {getLastUpdated(ethFinancialMetrics.execution_ended_at)}
                </p>
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
                <p className="text-xs text-muted-foreground">
                  {getLastUpdated(ethSupplyAndStakingMetricsExec)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(ethSupplyAndStakingMetrics?.cir_supply)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(
                    ethSupplyAndStakingMetrics?.supply_change_24hr,
                    {
                      showSign: true,
                    }
                  )}{' '}
                  since yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ether Staked
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {getLastUpdated(ethSupplyAndStakingMetricsExec)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(ethSupplyAndStakingMetrics?.current_staked)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(ethSupplyAndStakingMetrics?.stake_ratio)}% of
                  supply
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Validators
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {getLastUpdated(new Date().toISOString())}
                </p>
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
              <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
                <CardTitle>Daily Active Addresses (L1)</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {getLastUpdated(dailyEthereumParticipants.execution_ended_at)}
                </p>
              </CardHeader>
              <CardContent className="pl-2">
                <ActiveAddresses
                  dailyParticipants={dailyEthereumParticipants.result?.rows}
                />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
                <div className="grid gap-1">
                  <CardTitle>Ethereum L2 TVL</CardTitle>
                  <CardDescription>
                    Scaling solutions built on Ethereum.
                  </CardDescription>
                </div>
                <p className="text-xs text-muted-foreground">
                  {getLastUpdated(l2Summary.execution_ended_at)}
                </p>
              </CardHeader>
              <CardContent>
                <L2Tvl data={l2Summary.result?.rows} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
