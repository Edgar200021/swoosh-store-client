import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './config/router'
import { useLazyFindAllUsersQuery } from './store/user/userApi'

function App() {
  const [trigger, { error, data }] = useLazyFindAllUsersQuery()

  if (error) console.log(error)

  console.log(data)

  return (
    <>
      {/*<button onClick={() => trigger({})} className="text-5xl text-red-500">
        Fetch products
      </button>*/}
      <RouterProvider router={routerConfig} />
    </>
  )
}

export default App
