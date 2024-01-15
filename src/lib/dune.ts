import { Dune } from 'dune-api-client'

import { dailyEthereumParticipants } from './static/daily-ethereum-participants'
import { ethFinancialMetrics } from './static/eth-financial-metrics'
import {
  DailyEthereumParticipants,
  EthFinancialMetrics,
  EthSupplyAndStakingMetrics,
} from './types'

const dune = new Dune(process.env.DUNE_API_KEY)

export async function getDailyEthereumParticipants() {
  // https://dune.com/queries/41840
  // const queryId = 41840
  // const executionId = '01HM4RQ061AABE5B04ANSVWWJT'
  // const data = await dune.results<DailyEthereumNetworkParticipants>(executionId)
  // return data.result

  return dailyEthereumParticipants.result
}

export async function getEthFinancialMetrics() {
  // https://dune.com/queries/2352666
  // const queryId = 2352666
  // const executionId = '01HM51ZDDD7CGPBC3CJ9C5CR1N'
  // const data = await dune.results<EthFinancialMetrics>(executionId)
  // const rows = data.result.rows

  const rows = ethFinancialMetrics.result.rows

  return function (metric: EthFinancialMetrics['metrics']) {
    const metricIndex = rows.findIndex((row) => row.metrics === metric)
    return rows[metricIndex].ethereum
  }
}

export async function getEthSupplyAndStakingMetrics() {
  // https://dune.com/queries/2418750
  // const queryId = 2418750
  // const executionId = '01HM5HPHJNMEE7SZENKF00EY43'
  // const status = await dune.status(executionId)
  // const data = await dune.results<EthSupplyAndStakingMetrics>(executionId)
  // return data.result?.rows[0]

  return {
    day: new Date(),
    cir_supply: 120229152.83637705,
    current_staked: 28906659.999999974,
    non_staked: 91322492.83637708,
    stake_ratio: 24.042970708892703,
    staking_ratio_raw: 0.24042970708892702,
    consensus_apr: 0.03093530572507312,
    consensus_apr_percent: 3.093530572507312,
    validators: 903333,
    daily_supply_change: -199.92039877687057,
    daily_issuance: 2449.944857295276,
    daily_burn: 2649.8652560721466,
    daily_inflation_annual: -0.0006069312017438712,
    market_cap: 304592142670.2627,
    staked_usd: 73232999643.79993,
    burn_24hr: 3157.352427716855,
    supply_change_24hr: -707.4075704215788,
    inflation_annual_24hr: -0.0021475843245594606,
    daily_issuance_usd: 6206763.7998175705,
    post_merge_change: -292477,
    post_merge_percent: -0.24,
    cir_sup_million: 120.22915283637705,
    mcap_billion: 304.5921426702627,
  }
}
