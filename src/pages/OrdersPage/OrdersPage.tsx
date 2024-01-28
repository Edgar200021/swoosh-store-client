import {cn} from "../../helpers/cn.ts";
import {OrdersList} from "../../components/Lists/OrdersList.tsx";

interface Props {
  className?: string
}

export const OrdersPage = ({className}: Props) => {

  return <main className={cn('', className)}>
    <h2 className='text-[28px] font-medium mb-[30px]'>История заказов</h2>
    <OrdersList/>
  </main>
};
