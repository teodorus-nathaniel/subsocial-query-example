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
        <Post id='6' />
        <Post id='7' />
        <Post id='8' />
        <Post id='9' />
        <Post id='10' />
      </div>
    </div>
  )
}
