import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './config/router'
import { LOCAL_STORAGE_FAVORITES_KEY } from './config/constants'
import { useEffect } from 'react'
import { useAppDispatch } from './store/store'
import { addFavoriteSneakers } from './store/sneaker/sneakerSlice'
import { Sneaker } from './store/sneaker/interfaces'
import { localStorageApi } from './utils/localStorageApi'

function App() {
  const dispatch = useAppDispatch()
  const { getItem } = localStorageApi(LOCAL_STORAGE_FAVORITES_KEY)

  useEffect(() => {
    const favoriteProducts = getItem()
    if (favoriteProducts) {
      dispatch(
        addFavoriteSneakers(
          favoriteProducts as Omit<
            Sneaker,
            'rating' | 'size' | 'material' | 'description'
          >[]
        )
      )
    }
  }, [])

  return <RouterProvider router={routerConfig} />
}

export default App
