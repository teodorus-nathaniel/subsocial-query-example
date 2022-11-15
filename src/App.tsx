import './App.css'
import Invalidation from './containers/Invalidation'
import PostsMultipleLoading from './containers/PostsMultipleLoading'
import PostsSingleLoading from './containers/PostsSingleLoading'

function App() {
  return (
    <div className='App'>
      <p style={{ marginBottom: '2rem' }}>
        Note: To track api calls, you can see logs in console
      </p>

      <div style={{ marginBottom: '5rem' }}>
        <PostsSingleLoading />
      </div>
      <div style={{ marginBottom: '5rem' }}>
        <PostsMultipleLoading />
      </div>

      <Invalidation />
    </div>
  )
}

export default App
