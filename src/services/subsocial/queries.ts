import { QueryConfig, useSubsocialQuery } from 'subsocial-query1'
import { queryInvalidation } from '../client'
import { GetPostData } from '../types'
import { getPost } from './api'

export const getPostKey = 'getPost'
export const invalidateGetPost = queryInvalidation<GetPostData>(getPostKey)
export function useGetPost(data: GetPostData, config?: QueryConfig) {
  return useSubsocialQuery({ data, key: getPostKey }, getPost, config)
}
