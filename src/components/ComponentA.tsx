import { useGetPost } from '../services/squid/queries'

export default function ComponentA({ id }: { id: string }) {
  const { data: post, isLoading } = useGetPost({ postId: id })
  return <div>{isLoading ? 'loading...' : JSON.stringify(post)}</div>
}
