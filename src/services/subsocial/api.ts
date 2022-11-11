import { SubsocialApi } from '@subsocial/api'
import poolQuery from 'pool-query'
import { GetPostParam } from '../types'

export const getPost = poolQuery({
  singleCall: async ({
    additionalData: api,
    params,
  }: {
    params: GetPostParam
    additionalData: SubsocialApi
  }) => {
    return api.findPost({ id: params.postId })
  },
  multiCall: async (allParams) => {
    const [{ additionalData: api }] = allParams
    const postIds = allParams.map(({ params: { postId } }) => postId)
    return api.findPublicPosts(postIds)
  },
  resultMapper: {
    paramToKey: (param) => param.params.postId,
    resultToKey: (result) => result?.id ?? '',
  },
})
