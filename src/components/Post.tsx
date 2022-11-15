import { useGetPost } from '../services/subsocial/queries'

export default function Post({ id }: { id: string }) {
  const { data: post, isLoading } = useGetPost({ postId: id })
  return (
    <div className={`post ${isLoading ? 'skeleton' : ''}`}>
      {post && (
        <div className='flex flex-col'>
          <h2>{post.content?.title}</h2>
          <p>{post.content?.body}</p>
        </div>
      )}
    </div>
  )
}
