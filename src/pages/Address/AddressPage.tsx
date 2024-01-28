import {cn} from "../../helpers/cn.ts";
import {AddressList} from "../../components/Lists/AddressList.tsx";

interface Props {
  className?: string
}

export const AddressPage = ({className}: Props) => {

  return <main className={cn('', className)}>
    <h2 className='text-[28px] font-medium mb-[30px]'>Мой адрес доставки</h2>
    <AddressList/>
  </main>
};
