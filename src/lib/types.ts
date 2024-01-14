export type DailyEthereumParticipants = {
  '# Receiving Addresses (R)': number
  '# Sending Addresses (S)': number
  '# Total Addresses': number
  Baseline: number
  Day: string
  'S/R Ratio': number
}

type FinancialMetricTypes =
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

export type EthFinancialMetrics = {
  ethereum: number
  metrics: FinancialMetricTypes
}
