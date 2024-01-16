import { Dune } from 'dune-api-client'

import {
  DailyEthereumParticipants,
  EthFinancialMetrics,
  EthSupplyAndStakingMetrics,
  L2Summary,
} from './types'

const dune = new Dune(process.env.DUNE_API_KEY)

export async function getDailyEthereumParticipants() {
  // https://dune.com/queries/41840
  return await dune.results<DailyEthereumParticipants>(41840)
}

export async function getEthFinancialMetrics() {
  // https://dune.com/queries/2352666
  const ethFinancialMetrics = await dune.results<EthFinancialMetrics>(2352666)
  const rows = ethFinancialMetrics.result?.rows

  function ethFinancialMetric(metric: EthFinancialMetrics['metrics']) {
    if (!rows) return 0
    const metricIndex = rows.findIndex((row) => row.metrics === metric)
    return rows[metricIndex].ethereum
  }

  return { ethFinancialMetrics, ethFinancialMetric }
}

export async function getEthSupplyAndStakingMetrics() {
  // https://dune.com/queries/2418750
  const data = await dune.results<EthSupplyAndStakingMetrics>(2418750)

  return {
    ethSupplyAndStakingMetrics: data.result?.rows[0],
    ethSupplyAndStakingMetricsExec: data.execution_ended_at,
  }
}

export async function getL2Summary() {
  // https://dune.com/queries/2858858
  return await dune.results<L2Summary>(2858858)
}
