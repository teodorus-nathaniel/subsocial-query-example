import { useQuery } from '@tanstack/react-query'
import { mergeQueryConfig, QueryConfig, queryWrapper } from 'subsocial-query1'

export type SquidParam<T> = { data: T }

export function useSquidQuery<ReturnValue, Data>(
  params: { key: string; data: Data | null },
  func: (data: SquidParam<Data>) => Promise<ReturnValue>,
  config?: QueryConfig<any, any>,
  defaultConfig?: QueryConfig<ReturnValue, Data>
) {
  const mergedConfig = mergeQueryConfig(config, defaultConfig)
  return useQuery(
    [params.key, params.data],
    queryWrapper(func, async () => null),
    mergedConfig
  )
}
