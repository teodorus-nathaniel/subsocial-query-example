import { SubsocialApi } from '@subsocial/api'
import { poolFunctionWrapper } from '../common/base'
import { GetPostParam } from '../types'

export const getPost = poolFunctionWrapper(
  async ({
    additionalData: api,
    params,
  }: {
    params: GetPostParam
    additionalData: SubsocialApi
  }) => {
    return api.findPost({ id: params.postId })
  },
  async (allParams) => {
    const [{ additionalData: api }] = allParams
    const postIds = allParams.map(({ params: { postId } }) => postId)
    return api.findPublicPosts(postIds)
  },
  250
)
