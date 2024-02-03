import {cn} from '../../helpers/cn'

import {ResetPasswordForm} from '@/components/Forms/ResetPasswordForm'

interface Props {
  className?: string
}

export const ResetPasswordPage = ({className}: Props) => {
  return (
      <main className={cn('container pt-40 mb-44 tablet:mb-20', className)}>
        <h1 className="mb-14 text-5xl font-medium">Сброс пароля</h1>
        <div className="max-w-[544px] mx-auto p-10 border-[1px] border-[#EAEAEA] ">
          <ResetPasswordForm/>
        </div>
      </main>
  )
}
