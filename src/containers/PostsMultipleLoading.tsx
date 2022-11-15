import Post from '../components/Post'

export default function PostsMultipleLoading() {
  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Posts Multiple Loading</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Posts are queried in a multiple <code>useQuery</code> in each child
        component. <code>isLoading</code> status of the fetches are all
        controlled inside each child component. Because of this, it's
        recommended to render skeleton of the UI in the component.
        <br />
        Even if the useQuery call instance are different, because of poolQuery,
        all calls in certain interval (default: 250ms) are all pooled together,
        which results in only 1 call.
      </p>
      <div className='post-container'>
        <Post id='21' />
        <Post id='22' />
        <Post id='23' />
        <Post id='24' />
        <Post id='25' />
        <Post id='26' />
      </div>
    </div>
  )
}
