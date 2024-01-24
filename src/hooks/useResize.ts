import { useEffect, useState } from 'react'

export const useResize = <T extends HTMLElement>(
  element: React.MutableRefObject<T | null>
) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const cb = (entries: ResizeObserverEntry[]) => {
      const [entry] = entries
      setWidth(entry.target.clientWidth)
    }

    let observerRefValue: null | HTMLElement = null

    const resizeObserver = new ResizeObserver(cb)

    if (element.current) {
      observerRefValue = element.current
      resizeObserver.observe(element.current)
    }

    return () => {
      if (observerRefValue) {
        resizeObserver.unobserve(observerRefValue)
      }
    }
  }, [])

  return width
}
