import { useEffect, useRef } from 'react'

export const useOutsideClick = <T extends HTMLElement>(
  close: () => void,
  capture: boolean = true
) => {
  const ref = useRef<T>()

  useEffect(() => {
    function clickEvent(e: MouseEvent<T>) {
      if (ref.current?.contains(e.target)) return

      close()
    }
    document.addEventListener('click', clickEvent, { capture })

    return () => document.removeEventListener('click', clickEvent, { capture })
  }, [close, capture])

  return { ref }
}
