import { SubsocialApi } from '@subsocial/api'
import poolQuery from 'pool-query'
import { GetPostParam } from '../types'

export const getPost = poolQuery({
  singleCall: async ({
    api,
    data,
  }: {
    data: GetPostParam
    api: SubsocialApi
  }) => {
    return api.findPost({ id: data.postId })
  },
  multiCall: async (allParams) => {
    const [{ api }] = allParams
    const postIds = allParams.map(({ data: { postId } }) => postId)
    return api.findPublicPosts(postIds)
  },
  resultMapper: {
    paramToKey: (param) => param.data.postId,
    resultToKey: (result) => result?.id ?? '',
  },
})
