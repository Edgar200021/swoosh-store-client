import {RouterProvider} from 'react-router-dom'
import {routerConfig} from './config/router'
import {LOCAL_STORAGE_FAVORITES_KEY} from './config/constants.tsx'
import {useEffect} from 'react'
import {useAppDispatch} from './store/store'
import {addFavoriteSneakers} from './store/sneaker/sneakerSlice'
import {Sneaker} from './store/sneaker/interfaces'
import {localStorageApi} from './helpers/localStorageApi'
import {useRefreshQuery} from "./store/auth/authApi.ts";
import {Loader} from "@/components/ui/Loader.tsx";

function App() {
  const {isLoading} = useRefreshQuery(null)
  const dispatch = useAppDispatch()
  const {getItem} = localStorageApi(LOCAL_STORAGE_FAVORITES_KEY)

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


  if (isLoading) return <Loader/>
  return <>
    <RouterProvider router={routerConfig}/>
  </>
}

export default App
