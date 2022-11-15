import { graphql } from './gql'

export const POST_SIMPLE = graphql(`
  fragment PostSimple on Post {
    content
    createdAtBlock
    createdAtTime
    createdByAccount {
      id
    }
    title
    summary
    image
    link
    downvotesCount
    hidden
    id
    isComment
    kind
    repliesCount
    sharesCount
    upvotesCount
    updatedAtTime
    canonical
    tagsOriginal
    ownedByAccount {
      id
    }
    space {
      id
    }
    parentPost {
      id
    }
    sharedPost {
      id
    }
  }
`)

export const POST_FULL = graphql(`
  fragment PostFull on Post {
    ...PostSimple
  }
`)

// Post queries
// ------------------------------------------------------------------------------------

export const GET_POSTS_DATA = graphql(`
  query GetPostsData($where: PostWhereInput) {
    posts(where: $where) {
      ...PostFull
      sharedPost {
        ...PostFull
      }
      parentPost {
        ...PostFull
      }
    }
  }
`)
