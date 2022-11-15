import { QueryClient } from '@tanstack/react-query'
import { createQueryInvalidation, setSubsocialConfig } from 'subsocial-query1'

setSubsocialConfig('staging')
// setSubsocialConfig('prod', {
//   postConnectConfig: (api) => {
//     const mnemonic = '' // CRUST MNEMONIC
//     const authHeader = generateCrustAuthToken(mnemonic)
//     api.ipfs.setWriteHeaders({
//       authorization: 'Basic ' + authHeader,
//     })
//   },
// })

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Infinity,
    },
  },
})

export const queryInvalidation = <Data>(key: string) =>
  createQueryInvalidation<Data>(queryClient, key)

export default queryClient
