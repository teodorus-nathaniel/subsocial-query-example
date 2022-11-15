import './App.css'
import Invalidation from './containers/Invalidation'
import PostsMultipleLoading from './containers/PostsMultipleLoading'
import PostsSingleLoading from './containers/PostsSingleLoading'
import SpaceForm from './containers/SpaceForm'

function App() {
  return (
    <div className='App'>
      <p style={{ marginBottom: '2rem' }}>
        Notes: <br />
        - To track api calls, you can see logs in console <br />
        - Current example is using Subsocial SDK. You can try to use squid by
        changing `useGetPost` to `useGetPostSquid` <br />
      </p>

      <div style={{ marginBottom: '5rem' }}>
        <PostsSingleLoading />
      </div>
      <div style={{ marginBottom: '5rem' }}>
        <PostsMultipleLoading />
      </div>

      <div style={{ marginBottom: '5rem' }}>
        <Invalidation />
      </div>

      <div style={{ marginBottom: '5rem' }}>
        <SpaceForm />
      </div>
    </div>
  )
}

export default App
