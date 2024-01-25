export const localStorageApi = (key: string) => {
  function getItem() {
    try {
      const value = localStorage.getItem(key)

      return value ? JSON.parse(value) : undefined
    } catch (error) {
      console.log(error)
    }
  }

  function setItem<T>(value: T, k?: string) {
    try {
      localStorage.setItem(k || key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  function removeItem() {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  return { getItem, setItem, removeItem }
}
