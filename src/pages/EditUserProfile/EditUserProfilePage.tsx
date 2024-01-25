import {EditUserProfileForm} from "../../components/Forms/EditUserProfileForm.tsx";
import {cn} from "../../utils/cn.ts";

interface Props {
    className?: string
}
export const EditUserProfilePage = ({className}: Props) => {
    return (
        <main className={cn('', className)}>
            <h2 className='text-[28px] font-medium mb-[30px]'>Редактировать профиль</h2>
            <div className="p-10 border-[1px] border-[#EAEAEA] md-tablet:p-4">
                <EditUserProfileForm className='md-tablet:max-w-full'  />
            </div>
        </main>
    );
};
