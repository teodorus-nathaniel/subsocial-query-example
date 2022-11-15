import { createQueryInvalidation, QueryConfig } from 'subsocial-query1'
import queryClient from '../client'
import { GetPostData } from '../types'
import { getPostSquid } from './api'
import { useSquidQuery } from './base'

export const getPostKey = 'getPostSquid'
export const invalidateGetPost = createQueryInvalidation<GetPostData>(
  queryClient,
  getPostKey
)
export function useGetPostSquid(data: GetPostData, config?: QueryConfig) {
  return useSquidQuery({ data, key: getPostKey }, getPostSquid, config)
}
