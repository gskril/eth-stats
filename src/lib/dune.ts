import { Dune } from 'dune-api-client'
import * as fs from 'fs'

import { DailyEthereumParticipants, EthFinancialMetrics } from './types'
import { dailyEthereumParticipants } from './static/daily-ethereum-participants'
import { ethFinancialMetrics } from './static/eth-financial-metrics'

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
  // return data.result.rows

  return ethFinancialMetrics.result.rows
}

export async function getEthStaked() {
  // https://dune.com/queries/1933035
  // const queryId = 1933035
  // const executionId = '01HM50G2DXAVRZ6F7M27KTJWE1'
  // const data = await dune.results<{ total_eth_deposited: number }>(executionId)
  // return data.result.rows[0].total_eth_deposited

  return 28906022.342018582
}
