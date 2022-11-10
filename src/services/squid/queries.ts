import { createQueryInvalidation } from '../../packages/base'
import { QueryConfig } from '../common/types'
import { GetPostParam } from '../types'
import { getPost } from './api'
import { useSquidQuery } from './base'

export const getPostKey = 'getPost'
export const invalidateGetPost =
  createQueryInvalidation<GetPostParam>(getPostKey)
export function useGetPost(data: GetPostParam, config?: QueryConfig) {
  return useSquidQuery({ data, key: getPostKey }, getPost, config)
}
