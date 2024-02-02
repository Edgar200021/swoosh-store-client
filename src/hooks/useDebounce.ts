import {useEffect, useState} from "react";

export const useDebounce = <T>(value: T, timerMs = 1000) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const timerId = setTimeout(() => {
				setDebouncedValue(value)
		}, timerMs)

		return () => clearTimeout(timerId)

	},[value, timerMs])


	return debouncedValue

}