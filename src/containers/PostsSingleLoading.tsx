import { useIsAnyQueriesLoading } from 'subsocial-query1'
import Post from '../components/Post'
import { useGetPosts } from '../services/subsocial/queries'

const ids = ['1', '2', '3', '4', '5']

export default function PostsSingleLoading() {
  const results = useGetPosts(ids.map((id) => ({ postId: id })))
  const isLoading = useIsAnyQueriesLoading(results)

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Posts Single Loading</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Posts are queried in a single <code>useQueries</code> in the parent
        component, so you can get the <code>isLoading</code> status of the
        fetches, and render accordingly
      </p>
      <div className='post-container'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          results.map(({ data }, index) => (
            <Post key={data?.id || `index-${index}`} id={data?.id ?? ''} />
          ))
        )}
      </div>
    </div>
  )
}
