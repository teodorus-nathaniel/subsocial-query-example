import { QueryClient } from '@tanstack/react-query'
import { createQueryInvalidation, setSubsocialConfig } from 'subsocial-query1'

setSubsocialConfig('staging')

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
