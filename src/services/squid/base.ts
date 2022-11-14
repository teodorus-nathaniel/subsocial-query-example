import { useQuery } from '@tanstack/react-query'
import { mergeQueryConfig, QueryConfig, queryWrapper } from 'subsocial-query1'

export function useSquidQuery<ReturnValue, Params>(
  params: { key: string; data: Params | null },
  func: (data: { data: Params }) => Promise<ReturnValue>,
  config?: QueryConfig<any, any>,
  defaultConfig?: QueryConfig<ReturnValue, Params>
) {
  const mergedConfig = mergeQueryConfig(config, defaultConfig)
  return useQuery(
    [params.key, params.data],
    queryWrapper(func, () => Promise.resolve()),
    mergedConfig
  )
}
