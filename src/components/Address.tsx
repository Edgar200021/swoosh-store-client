import {cn} from "../utils/cn.ts";

import sprites from '../assets/icons/sprite.svg'
import deleteIcon from '../assets/icons/delete.svg'
import penIcon from '../assets/icons/pen.svg'
import {Button} from "./ui/Button.tsx";

interface Props {
  className?: string
}

export const Address = ({className}: Props) => {
  return (
      <li className={cn('max-w-[1013px] border-[1px] border-[#EAEAEA]', className)}>
        <div
            className="mb-[14px] pl-[30px] flex items-center justify-between font-medium gap-x-4 md-phone:flex-col md-phone:gap-y-3 md-phone:pr-[30px]">
          <span className='text-[19px]'>Василий Иванов</span>
          <div
              className='px-[22px] py-5 bg-slate-200 flex items-center gap-x-[10px] uppercase text-[13px] text-[#FB5A00] md-phone:-order-1 '>

            <svg stroke={'#FB5A00'}
                 className='w-4 h-4  stroke-[#FB5A00]'>
              <use xlinkHref={`${sprites}#address`}/>
            </svg>
            <span>адрес доставки</span>
          </div>
        </div>
        <div
            className='px-[30px] mb-[44px] flex justify-between gap-x-6 flex-wrap gap-y-2 md-phone:flex-col md-phone:gap-y-4'>
          <span className='max-w-[280px]'>056734, Mосква, Poccия, улица Варшавская, 37/5, кв.574</span>
          <span>
              <span className="block text-[#87878D]">Телефон</span>
              <span className='text-[15px] font-medium whitespace-nowrap'>+7 (956) 373-46-33</span>
            </span>
          <span>
              <span className="block text-[#87878D]">Email</span>
              <span className='text-[15px] font-medium'>exampleofemail@gmail.com</span>
            </span>
        </div>
        <div
            className='max-w-xs  py-[18px] px-[30px] border-r-[1px] border-r-[#EAEAEA] border-t-[1px] border-t-[#EAEAEA] flex items-center gap-x-[30px] shrink'>
          <Button
              className='flex items-center gap-x-2 text-uppercase font-medium pr-[30px] border-r-[1px] border-r-[#D7D7D7] border-dashed'
              variant='clear'>
            <img className='w-4 h-4' src={penIcon} alt='pen'/>
            Редактировать
          </Button>

          <Button className='flex items-center gap-x-2 text-uppercase font-medium' variant='clear'>
            <img className='w-4 h-4' src={deleteIcon} alt='delete'/>
            Удалить
          </Button>
        </div>

      </li>
  );
};
