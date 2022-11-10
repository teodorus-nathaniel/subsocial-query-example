import { useQuery } from 'react-query'
import { generateQueryWrapper, mergeQueryConfig } from '../common/base'
import { QueryConfig } from '../common/types'

export const squidQueryWrapper = generateQueryWrapper(async () => null)

export function useSquidQuery<ReturnValue, Params>(
  params: { key: string; data: Params | null },
  func: (data: { params: Params }) => Promise<ReturnValue>,
  config?: QueryConfig<any, any>,
  defaultConfig?: QueryConfig<ReturnValue, Params>
) {
  const mergedConfig = mergeQueryConfig(config, defaultConfig)
  return useQuery(
    [params.key, params.data],
    squidQueryWrapper(func, () => Promise.resolve()),
    mergedConfig as any
  )
}
