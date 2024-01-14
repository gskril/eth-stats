import { Dune } from 'dune-api-client'

import { DailyEthereumParticipants } from './types'
import { dailyEthereumParticipants } from './static/daily-ethereum-participants'

const dune = new Dune(process.env.DUNE_API_KEY)

export async function getDailyEthereumParticipants() {
  // https://dune.com/queries/41840
  // const queryId = 41840
  // const executionId = '01HM4RQ061AABE5B04ANSVWWJT'
  // const data = await dune.results<DailyEthereumNetworkParticipants>(executionId)
  // return data.result

  return dailyEthereumParticipants.result
}

export async function getEthStaked() {
  // https://dune.com/queries/1933035
  // const queryId = 1933035
  // const executionId = '01HM50G2DXAVRZ6F7M27KTJWE1'
  // const data = await dune.results<{ total_eth_deposited: number }>(executionId)
  // return data.result.rows[0].total_eth_deposited

  return 28906022.342018582
}
