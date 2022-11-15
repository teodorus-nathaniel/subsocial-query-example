import { request } from 'graphql-request'
import { poolQuery } from 'subsocial-query1'
import { GetPostData } from '../types'
import { SquidParam } from './base'
import * as q from './templates'

export const getPost = poolQuery({
  multiCall: async (allParams: SquidParam<GetPostData>[]) => {
    const res = await request(
      'https://squid.subsquid.io/subsocial/graphql',
      q.GET_POSTS_DATA,
      { where: { id_in: allParams.map(({ data: { postId } }) => postId) } }
    )
    return res.posts
  },
  // resultMapper: {
  //   paramToKey: (param) => param.params.postId,
  //   resultToKey: (result) => result.
  // }
})
