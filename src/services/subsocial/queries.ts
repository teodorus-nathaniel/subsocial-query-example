import {
  createQueryInvalidation,
  QueryConfig,
  useSubsocialQuery,
} from 'subsocial-query1'
import queryClient from '../client'
import { GetPostParam } from '../types'
import { getPost } from './api'

export const getPostKey = 'getPost'
export const invalidateGetPost = createQueryInvalidation<GetPostParam>(
  queryClient,
  getPostKey
)
export function useGetPost(data: GetPostParam, config?: QueryConfig) {
  return useSubsocialQuery({ data, key: getPostKey }, getPost, config)
}
