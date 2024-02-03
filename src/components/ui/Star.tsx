import {ComponentProps} from "react";

interface Props extends ComponentProps<'svg'> {
	full: boolean
}
export const Star = ({width = 20, height = 20, fill = "#45454C", stroke = "#454A4C", full, ...otherProps}: Props) => {

	if (full) return <svg {...otherProps} width={width} height={height} viewBox="0 0 14 14" fill="#454A4C" xmlns="http://www.w3.org/2000/svg">
		<path
				d="M7 1.96449L8.22522 5.3375L8.34052 5.65493L8.67804 5.6665L12.2646 5.78943L9.43527 7.997L9.16901 8.20475L9.26231 8.52933L10.2537 11.9783L7.27986 9.96966L7 9.78063L6.72014 9.96966L3.74631 11.9783L4.7377 8.52933L4.83099 8.20475L4.56473 7.997L1.73542 5.78943L5.32196 5.6665L5.65948 5.65493L5.77478 5.3375L7 1.96449Z"
				stroke={stroke}/>
	</svg>

	return <svg {...otherProps} width={width} height={height} viewBox="0 0 14 14" fill={fill} xmlns="http://www.w3.org/2000/svg">
		<path
				d="M7 1.96449L8.22522 5.3375L8.34052 5.65493L8.67804 5.6665L12.2646 5.78943L9.43527 7.997L9.16901 8.20475L9.26231 8.52933L10.2537 11.9783L7.27986 9.96966L7 9.78063L6.72014 9.96966L3.74631 11.9783L4.7377 8.52933L4.83099 8.20475L4.56473 7.997L1.73542 5.78943L5.32196 5.6665L5.65948 5.65493L5.77478 5.3375L7 1.96449Z"
				stroke={stroke}/>
	</svg>

}