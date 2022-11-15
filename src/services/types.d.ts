export type GetPostData = {
  postId: string
}

// Mutation Params
export type CreateSpacePayload = {
  name: string
  about?: string
  image?: File
}
