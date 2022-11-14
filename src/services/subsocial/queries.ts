import {
  createQueryInvalidation,
  QueryConfig,
  useSubsocialQuery,
} from 'subsocial-query1'
import queryClient from '../client'
import { GetPostData } from '../types'
import { getPost } from './api'

export const getPostKey = 'getPost'
export const invalidateGetPost = createQueryInvalidation<GetPostData>(
  queryClient,
  getPostKey
)
export function useGetPost(data: GetPostData, config?: QueryConfig) {
  return useSubsocialQuery({ data, key: getPostKey }, getPost, config)
}
