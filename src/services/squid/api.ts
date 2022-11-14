import { request } from 'graphql-request'
import { poolQuery } from 'subsocial-query1'
import { GetPostParam } from '../types'
import * as q from './gql'

export const getPost = poolQuery({
  multiCall: async (allParams: { params: GetPostParam }[]) => {
    const res = await request(
      'https://squid.subsquid.io/subsocial/graphql',
      q.GET_POSTS_DATA,
      { where: { id_in: allParams.map(({ params: { postId } }) => postId) } }
    )
    return res.posts
  },
  // resultMapper: {
  //   paramToKey: (param) => param.params.postId,
  //   resultToKey: (result) => result.
  // }
})
