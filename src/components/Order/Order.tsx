import {cn} from "../../utils/cn.ts";
import {Button} from "../ui/Button.tsx";

import arrowIcon from '../../assets/icons/arrow.svg'

interface Props {
  className?: string
}

export const Order = ({className}: Props) => {
  return (
      <li className={cn('grid grid-cols-4 items-center gap-x-3 py-6 px-5 w-full lg-phone:flex lg-phone:flex-col lg-phone:items-stretch lg-phone:gap-y-3 lg-phone:!border-[1px] lg-phone:!border-[#EAEAEA] lg-phone:!border-solid', className)}>
        <div className='lg-phone:flex lg-phone:justify-between lg-phone:items-center'>
          <span className='hidden   text-[15px] font-medium uppercase  lg-phone:inline-block'>Номер</span>
          <span>#2365341-11</span>
        </div>
        <div className='lg-phone:flex lg-phone:justify-between lg-phone:items-center'>
          <span className='hidden   text-[15px] font-medium uppercase lg-phone:inline-block'>Дата</span>
          <span>16 Августа 2023</span>
        </div>
        <div className='lg-phone:flex lg-phone:justify-between lg-phone:items-center'>
          <span className='hidden  text-[15px] font-medium uppercase  lg-phone:inline-block'>Статус</span>
          <span
              className='py-[5px] px-3 flex items-center gap-x-2 max-w-[120px] text-[#FB5A00]  border-[1px] border-orange-500 '>
            <span className='bg-orange-500 inline-block w-[5px] h-[5px] rounded-full shrink-0'></span>
            <span className='uppercase font-medium text-[11px]'>Обработка</span>
          </span>
        </div>
        <div className='lg-phone:flex lg-phone:justify-between lg-phone:items-center'>
          <span className='hidden text-[15px] font-medium uppercase  lg-phone:inline-block'>Итого</span>
          <span className='flex items-center justify-between text-lg text-black'>36 829 ₽
            <Button
                className='w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#EAEAEA] border-solid lg-phone:hidden'
                variant='clear' to='/'>
             <img className='w-2 h-2 -rotate-90' src={arrowIcon} alt='Arrow'/>

            </Button>
          </span>
        </div>
        <Button variant='clear'
                className='hidden lg-phone:flex text-[#FF6915] py-2 px-3 border-[1px] border-solid border-[#EAEAEA]  items-center justify-center gap-x-2'>Просмотр
          заказа
          <img className='w-2 h-2 -rotate-90 translate-y-[2px]' src={arrowIcon} alt='icon'/></Button>
      </li>
  );
};
