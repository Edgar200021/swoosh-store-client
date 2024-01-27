import {Order} from "../Order/Order.tsx";

interface Props {
  className?: string
}

export const OrdersList = ({className}: Props) => {
  return (
      <div className='border-[#EAEAEA] border-[1px]  max-w-[1015px] w-full lg-phone:border-0'>
        <div
            className="px-5 py-5 border-b-[1px] border-b-[#EAEAEA] grid grid-cols-4 gap-x-2 font-bold text-[18px] text-[#1F1E31] lg-phone:hidden">
          <span>Номер</span>
          <span>Дата</span>
          <span>Статус</span>
          <span>Итого</span>
        </div>
        <ul className='divide-y-[1px] divide-[#EAEAEA] lg-phone:flex lg-phone:flex-col lg-phone:gap-y-4 lg-phone:divide-y-0 '>
          <Order/>
          <Order/>
        </ul>
      </div>
  );
};
