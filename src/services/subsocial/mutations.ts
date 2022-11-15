import { IpfsContent } from '@subsocial/api/substrate/wrappers'
import { MutationConfig, useSubsocialMutation } from 'subsocial-query1'
import { getWallet } from '../../utils/wallet'
import { CreateSpacePayload } from '../types'

export function useCreateSpace(config?: MutationConfig<CreateSpacePayload>) {
  return useSubsocialMutation(
    getWallet,
    async (data, api) => {
      const { image, name, about } = data
      let imageCid: string | undefined
      if (image) {
        imageCid = await api.ipfs.saveFile(image)
      }
      const spaceCid = await api.ipfs.saveContent({
        name,
        about,
        image: imageCid,
      })
      const substrateApi = await api.substrateApi
      const tx = substrateApi.tx.spaces.createSpace(IpfsContent(spaceCid), null)
      return { tx, summary: `Creating Space ${name}` }
    },
    config
  )
}
