import poolQuery from 'pool-query'
import { SubsocialParam } from 'subsocial-query1'
import { GetPostData } from '../types'

export const getPost = poolQuery({
  singleCall: async ({ api, data }: SubsocialParam<GetPostData>) => {
    console.log('Subsocial Service: getPost: singleCall')
    return api.findPost({ id: data.postId })
  },
  multiCall: async (allParams) => {
    console.log('Subsocial Service: getPost: multiCall')
    const [{ api }] = allParams
    const postIds = allParams.map(({ data: { postId } }) => postId)
    const res = await api.findPublicPosts(postIds)
    return res
  },
  resultMapper: {
    paramToKey: (param) => param.data.postId,
    resultToKey: (result) => result?.id ?? '',
  },
})
