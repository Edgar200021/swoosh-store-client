import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/@/components/ui/select.tsx";
import {cn} from "@/helpers/cn.ts";
import {useSearchParams} from "react-router-dom";


interface Props {
	placeholder?: string
	values: {value: string | number, label: string }[]
	className?: string
}
export const SortBy = ({values, placeholder = 'Сортировка по:', className}: Props) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const onChange = (value: string) => {
		searchParams.set('sort', value)
		setSearchParams(searchParams)
	}

	return <Select onValueChange={onChange} >
		<SelectTrigger  className={cn("w-[120px] text-[#B5B5B5]", className)}>
			<SelectValue placeholder={placeholder}/>
		</SelectTrigger>
		<SelectContent  >
			{values.map(({value, label}) => <SelectItem key={value} value={String(value)}>{label}</SelectItem>)}
	</SelectContent>
	</Select>
}