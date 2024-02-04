import {cn} from "@/helpers/cn.ts";
import {SIZE_TABLE} from "@/config/constants.tsx";

interface Props {
	className?: string
}


export const SizeTable = ({className}: Props) => {

	return <div className={cn('max-w-[820px] ', className)}>
		<h2 className='text-[#2c2f30] text-[35px] font-medium text-center tablet:text-[22px] mb-6'>Размерная таблица</h2>
		<p className='text-[15px] text-[#2e2e2e] mb-8'>
			<span className="block mb-5">
					Вам понадобится сделать измерения с помощью линейки или сантиметровой ленты. Для определения нужного размера необходимо соотнести полученную длину с размерами в таблице.
			</span>
			<span className="block mb-5">
				Поставьте ногу на чистый лист бумаги. Отметьте крайние границы ступни и измерьте расстояние между самыми дальними
			точками стопы.
			</span>
			<span className="block">
					Округление производится в большую сторону. Например если у вас получился результат 27,7 см, то его
			нужно округлить до длины которая есть в таблице - в данном случае до 28 см.
			</span>

		</p>

		<span className="block font-bold text-[#2e2e2e] text-[17px] mb-6">Таблица соответствия размеров</span>

		<table className='border-[1px] border-[#EAEAEA] flex divide-x-[1px] lg-tablet:flex-col lg-tablet:divide-x-0 lg-tablet:divide-y-[1px] '>
			<thead className='font-medium lg-tablet:text-sm'>
			<tr className='flex flex-col divide-y-[1px]  lg-tablet:grid lg-tablet:grid-cols-4 lg-tablet:divide-y-0 lg-tablet:divide-x-[1px]  '>
				{SIZE_TABLE.map(({heading}) => <th className='h-[45.7px] lg-tablet:h-auto lg-tablet:py-3 flex items-center justify-center px-[18px] bg-[#f9f9f9]'>{heading}</th>)}
			</tr>
			</thead>
			<tbody className=' text-[#4b4646] text-sm divide-y-[1px] lg-tablet:divide-y-0 lg-tablet:divide-x-[1px] lg-tablet:grid lg-tablet:grid-cols-4  '>
				{SIZE_TABLE.map(({values}) => <tr className='flex lg-tablet:flex-col divide-x-[1px] lg-tablet:divide-x-0 lg-tablet:divide-y-[1px] '>
						{ values.map(val => <td className='w-[60px] lg-tablet:w-full flex items-center justify-center  h-[45px] bg-[#f9f9f9]'>{val}</td>)}
				</tr>)}
			</tbody>
		</table>
	</div>
}