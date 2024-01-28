import {cn} from "../helpers/cn.ts";
import {AccountNavbar} from "../components/AccountNavbar/AccountNavbar.tsx";
import {Outlet} from "react-router-dom";


interface Props {
  className?: string
}

export const PersonalAccountLayout = ({className}: Props) => {
  return (
      <div className={cn('container pt-40 md-tablet:pt-20 mb-[120px]', className)}>
        <h2 className='max-w-[400px] font-medium text-[39px] mb-[51px] tablet:text-2xl uppercase md-tablet:text-2xl'>
          Личный кабинет
        </h2>
        <div className="flex gap-x-5 md-tablet:flex-col md-tablet:gap-x-0 md-tablet:gap-y-5">
          <AccountNavbar/>
          <Outlet/>
        </div>
      </div>
  );
};
