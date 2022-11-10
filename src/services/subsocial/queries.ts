import { createQueryInvalidation } from '../../packages/base'
import { useSubsocialQuery } from '../../packages/subsocial/base'
import { QueryConfig } from '../../packages/types'
import { GetPostParam } from '../types'
import { getPost } from './api'

export const getPostKey = 'getPost'
export const invalidateGetPost =
  createQueryInvalidation<GetPostParam>(getPostKey)
export function useGetPost(data: GetPostParam, config?: QueryConfig) {
  return useSubsocialQuery({ data, key: getPostKey }, getPost, config)
}
