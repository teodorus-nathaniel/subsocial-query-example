import { invalidateGetPost } from '../services/subsocial/queries'

const invalidatedIds = ['22', '2', '23', '3']

export default function Invalidation() {
  const onClick = () => {
    invalidatedIds.forEach((id) => {
      invalidateGetPost({
        postId: id,
      })
    })
  }
  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Query Invalidation</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Invalidation works same as usual react-query, but because of pool-query,
        refetch for invalidated queries are pooled together again
      </p>
      <button className='button' onClick={onClick}>
        Invalidate
      </button>
    </div>
  )
}
