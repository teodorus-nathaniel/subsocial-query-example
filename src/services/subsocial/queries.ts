import { createQueryInvalidation } from '../common/base'
import { QueryConfig } from '../common/types'
import { GetPostParam } from '../types'
import { getPost } from './api'
import { useSubsocialQuery } from './base'

export const getPostKey = 'getPost'
export const invalidateGetPost =
  createQueryInvalidation<GetPostParam>(getPostKey)
export function useGetPost(data: GetPostParam, config?: QueryConfig) {
  return useSubsocialQuery({ data, key: getPostKey }, getPost, config)
}
