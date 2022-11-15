import {
  QueryConfig,
  useSubsocialQueries,
  useSubsocialQuery,
} from 'subsocial-query1'
import { queryInvalidation } from '../client'
import { GetPostData } from '../types'
import { getPost } from './api'

export const getPostKey = 'getPost'
export const invalidateGetPost = queryInvalidation<GetPostData>(getPostKey)
export function useGetPost(data: GetPostData, config?: QueryConfig) {
  return useSubsocialQuery({ data, key: getPostKey }, getPost, config)
}
export function useGetPosts(data: GetPostData[], config?: QueryConfig) {
  return useSubsocialQueries({ key: getPostKey, data }, getPost, config)
}
