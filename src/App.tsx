import './App.css'
import ComponentA from './components/ComponentA'
import { invalidateGetPost } from './services/subsocial/queries'

function App() {
  return (
    <div className='App'>
      <ComponentA id='100' />
      <ComponentA id='200' />
      <ComponentA id='300' />
      <ComponentA id='4' />
      <ComponentA id='5' />
      <ComponentA id='6' />

      <button
        onClick={() => {
          invalidateGetPost({ postId: 'dialga' })
          invalidateGetPost({ postId: 'bulbasaur' })
        }}>
        invalidate
      </button>
    </div>
  )
}

export default App
