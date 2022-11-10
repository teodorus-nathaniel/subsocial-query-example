import { request } from 'graphql-request'
import { poolFunctionWrapper } from '../../packages/base'
import { GetPostParam } from '../types'
import * as q from './gql'

export const getPost = poolFunctionWrapper(
  async ({ params }: { params: GetPostParam }) => {
    const res = await request(
      'https://squid.subsquid.io/subsocial/graphql',
      q.GET_POSTS_DATA,
      { where: { id_in: [params.postId] } }
    )
    return res.posts[0]
  },
  async (allParams) => {
    const res = await request(
      'https://squid.subsquid.io/subsocial/graphql',
      q.GET_POSTS_DATA,
      { where: { id_in: allParams.map(({ params: { postId } }) => postId) } }
    )
    return res.posts
  },
  250
)
