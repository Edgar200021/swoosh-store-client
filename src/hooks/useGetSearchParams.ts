import {useSearchParams} from "react-router-dom";


export const useGetSearchParams = ( ...keys: string[]) => {
	const [searchParams] = useSearchParams()

	return keys.reduce((obj, key) => {
			const isExist = searchParams.has(key)
			if (!isExist) return obj

			obj[key] = searchParams.get(key)!

			return obj

	}, {} as Record<string, string>)

}