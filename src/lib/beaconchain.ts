export async function getValidatorCount() {
  const res = await fetch('https://beaconcha.in/api/v1/validators/queue')
  const json = await res.json()

  const data = json as {
    status: string
    data: {
      beaconchain_entering: number
      beaconchain_exiting: number
      validatorscount: number
    }
  }

  return data.data.validatorscount
}
