import { EthFinancialMetrics } from '../types'

export const ethFinancialMetrics = {
  execution_id: '01HM51ZDDD7CGPBC3CJ9C5CR1N',
  query_id: 2352666,
  state: 'QUERY_STATE_COMPLETED',
  submitted_at: '2024-01-14T22:37:46.797588Z',
  expires_at: '2024-04-13T22:39:24.87885Z',
  execution_started_at: '2024-01-14T22:37:46.82399Z',
  execution_ended_at: '2024-01-14T22:39:24.878849Z',
  result: {
    rows: [
      { ethereum: 8, metrics: 'A) Asset Age (Years)' },
      { ethereum: 2528.7, metrics: 'B) Current Price ($)' },
      { ethereum: -1.7602884215679193, metrics: 'C) Daily Return (%)' },
      { ethereum: 10.654069831045444, metrics: 'D) YTD Return (%)' },
      { ethereum: 120228588.74619271, metrics: 'E) Circulating Supply (ETH)' },
      { ethereum: 304022032362.4975, metrics: 'F) Market Cap ($)' },
      { ethereum: -0.262714133053916, metrics: 'G) Annual Inflation Rate (%)' },
      {
        ethereum: 0.6605502904677513,
        metrics: 'H) BTC VS ETH correlation (%)',
      },
      { ethereum: 4864.11, metrics: 'I) All Time High Price ($)' },
      {
        ethereum: -48.013100032688406,
        metrics: 'J) Distance from All Time High (%)',
      },
      { ethereum: 1899.783137031273, metrics: 'K) 200-Day MA Price ($)' },
      {
        ethereum: 33.104666038436044,
        metrics: 'L) Current Price vs 200-Day MA Price (%)',
      },
      {
        ethereum: 47.01814549856248,
        metrics: 'M) Annualized 30-Day Volatility (%)',
      },
      { ethereum: 1.5302486836619402, metrics: 'N) 1-Year Sharpe Ratio' },
      { ethereum: 2.650468468317875, metrics: 'O) 3-Year Sharpe Ratio' },
    ] as EthFinancialMetrics[],
    metadata: {
      column_names: ['metrics', 'ethereum'],
      result_set_bytes: 659,
      total_row_count: 15,
      datapoint_count: 30,
      pending_time_millis: 26,
      execution_time_millis: 98054,
    },
  },
} as const
