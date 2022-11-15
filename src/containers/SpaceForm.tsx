import { useCreateSpace } from '../services/subsocial/mutations'

const dummySpace = {
  name: 'DUMMY SPACE',
}

export default function SpaceForm() {
  const { mutate: createSpace } = useCreateSpace()

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Create Form</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        When you submit, website will try to connect to your first polkadotjs
        wallet. This is not good for production, please change the code for that
        according to your needs.
      </p>
      <button onClick={() => createSpace(dummySpace)}>
        Create Dummy Space
      </button>
    </div>
  )
}
