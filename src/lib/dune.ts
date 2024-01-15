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
  // const queryId = 41840
  const executionId = '01HM4RQ061AABE5B04ANSVWWJT'
  const data = await dune.results<DailyEthereumParticipants>(executionId)
  return data
}

export async function getEthFinancialMetrics() {
  // https://dune.com/queries/2352666
  // const queryId = 2352666
  const executionId = '01HM51ZDDD7CGPBC3CJ9C5CR1N'
  const ethFinancialMetrics =
    await dune.results<EthFinancialMetrics>(executionId)
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
  // const queryId = 2418750
  const executionId = '01HM5HPHJNMEE7SZENKF00EY43'
  const data = await dune.results<EthSupplyAndStakingMetrics>(executionId)
  return {
    ethSupplyAndStakingMetrics: data.result?.rows[0],
    ethSupplyAndStakingMetricsExec: data.execution_ended_at,
  }
}

export async function getL2Summary() {
  // https://dune.com/queries/2858858
  // const queryId = 2858858
  const executionId = '01HM5SX8Q76PM6PVRQ8AHTDPTG'
  const data = await dune.results<L2Summary>(executionId)
  return data
}
