import {cn} from "../../utils/cn.ts";
import {Address} from "../Address.tsx";

interface Props {
  className?: string
}

export const AddressList = ({className}: Props) => {
  return (
      <ul className={cn('', className)}>
        <Address/>
      </ul>
  );
};
