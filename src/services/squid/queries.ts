import { createQueryInvalidation, QueryConfig } from 'subsocial-query1'
import queryClient from '../client'
import { GetPostData } from '../types'
import { getPost } from './api'
import { useSquidQuery } from './base'

export const getPostKey = 'getPost'
export const invalidateGetPost = createQueryInvalidation<GetPostData>(
  queryClient,
  getPostKey
)
export function useGetPost(data: GetPostData, config?: QueryConfig) {
  return useSquidQuery({ data, key: getPostKey }, getPost, config)
}
