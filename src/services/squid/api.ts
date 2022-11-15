import { request } from 'graphql-request'
import { poolQuery } from 'subsocial-query1'
import { GetPostData } from '../types'
import { SquidParam } from './base'
import { PostSimpleFragment } from './gql/graphql'
import * as q from './templates'

const GRAPHQL_URL = 'https://squid.subsquid.io/subsocial/graphql'

export const getPostSquid = poolQuery({
  multiCall: async (allParams: SquidParam<GetPostData>[]) => {
    const res = await request(GRAPHQL_URL, q.GET_POSTS_DATA, {
      where: { id_in: allParams.map(({ data: { postId } }) => postId) },
    })
    return res.posts
  },
  resultMapper: {
    paramToKey: (param) => param.data.postId,
    resultToKey: (result) => (result as PostSimpleFragment).id,
  },
})
