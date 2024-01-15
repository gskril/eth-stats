export type DailyEthereumParticipants = {
  '# Receiving Addresses (R)': number
  '# Sending Addresses (S)': number
  '# Total Addresses': number
  Baseline: number
  Day: string
  'S/R Ratio': number
}

export type EthFinancialMetrics = {
  ethereum: number
  metrics:
    | 'A) Asset Age (Years)'
    | 'B) Current Price ($)'
    | 'C) Daily Return (%)'
    | 'D) YTD Return (%)'
    | 'E) Circulating Supply (ETH)'
    | 'F) Market Cap ($)'
    | 'G) Annual Inflation Rate (%)'
    | 'H) BTC VS ETH correlation (%)'
    | 'I) All Time High Price ($)'
    | 'J) Distance from All Time High (%)'
    | 'K) 200-Day MA Price ($)'
    | 'L) Current Price vs 200-Day MA Price (%)'
    | 'M) Annualized 30-Day Volatility (%)'
    | 'N) 1-Year Sharpe Ratio'
    | 'O) 3-Year Sharpe Ratio'
}

export type EthSupplyAndStakingMetrics = {
  day: string
  cir_supply: number
  current_staked: number
  non_staked: number
  stake_ratio: number
  staking_ratio_raw: number
  consensus_apr: number
  consensus_apr_percent: number
  validators: number
  daily_supply_change: number
  daily_issuance: number
  daily_burn: number
  daily_inflation_annual: number
  market_cap: number
  staked_usd: number
  burn_24hr: number
  supply_change_24hr: number
  inflation_annual_24hr: number
  daily_issuance_usd: number
  post_merge_change: number
  post_merge_percent: number // this might actually be a string, tbd
  cir_sup_million: number
  mcap_billion: number
}

export type L2Summary = {
  day: string
  entity: string
  ranking: number
  revenue?: number
  stack: string
  technology: string
  tvl: number
  tvl_180d_change?: number
  tvl_1d_change: number
  tvl_30d_change?: number
  tvl_365d_change?: number
  tvl_7d_change: number
  tvl_90d_change?: number
}
