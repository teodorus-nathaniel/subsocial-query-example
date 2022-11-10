import { ApiPromise } from '@polkadot/api'
import { getSubstrateApi, SubsocialApi } from '@subsocial/api'

let subsocialApi: Promise<SubsocialApi> | null = null
export const getSubsocialApi = async () => {
  if (subsocialApi) return subsocialApi
  const api = connectToSubsocialApi()
  subsocialApi = api
  return subsocialApi
}

async function connectToSubsocialApi() {
  const substrateApi = await getSubstrateApi('wss://para.f3joule.space')
  return newSubsocialApi(substrateApi)
}

export const newSubsocialApi = (substrateApi: ApiPromise): SubsocialApi => {
  const subsocial: SubsocialApi = new SubsocialApi({
    substrateApi,
    ipfsNodeUrl: 'https://staging-ipfs.subsocial.network',
    offchainUrl: 'https://staging-api.subsocial.network',
    useServer: {
      httpRequestMethod: 'get',
    },
  })

  return subsocial
}
