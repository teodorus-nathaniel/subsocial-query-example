import { useGetPost } from '../services/subsocial/queries'

export default function Post({ id }: { id: string }) {
  const { data: post, isLoading } = useGetPost({ postId: id })
  const title = post?.content?.title
  const body = post?.content?.body
  return (
    <div className={`post ${isLoading ? 'skeleton' : ''}`}>
      <div className='flex flex-col'>
        {title && <h2 style={{ marginBottom: body ? '.5rem' : 0 }}>{title}</h2>}
        {body && <p>{body}</p>}
      </div>
    </div>
  )
}
