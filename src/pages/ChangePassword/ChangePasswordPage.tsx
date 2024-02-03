import {cn} from "../../helpers/cn.ts";
import {ChangePasswordForm} from "@/components/Forms/ChangePasswordForm.tsx";

interface Props {
  className?: string
}

export const ChangePasswordPage = ({className}: Props) => {
  return (
      <main className={cn('', className)}>
        <h2 className='text-[28px] font-medium mb-[30px]'>Сменить пароль</h2>
        <div className="">
          <ChangePasswordForm
              className='p-10 border-[1px] border-[#EAEAEA] md-tablet:p-4 max-w-[550px] w-full md-tablet:max-w-full'/>
        </div>
      </main>
  );
};
