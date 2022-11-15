import { graphql } from './gql'

export const POST_SIMPLE_FRAGMENT = graphql(`
  fragment PostSimpleFragment on Post {
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

export const POST_FRAGMENT = graphql(`
  fragment PostFragment on Post {
    ...PostSimpleFragment
  }
`)

// Post queries
// ------------------------------------------------------------------------------------

export const GET_POSTS_DATA = graphql(`
  query GetPostsData($where: PostWhereInput) {
    posts(where: $where) {
      ...PostFragment
      sharedPost {
        ...PostFragment
      }
      parentPost {
        ...PostFragment
      }
    }
  }
`)
