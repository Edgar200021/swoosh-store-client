import { ForgotPasswordForm } from '../../components/Forms/ForgotPasswordForm'
import { useForgotPasswordMutation } from '../../store/auth/authApi'
import { cn } from '../../utils/cn'

import i from '../../assets/icons/i.svg'
import { FormEvent } from 'react'
import { validateError } from '../../utils/validateError'
import { ResetPasswordForm } from '../../components/Forms/ResetPasswordForm'
import { useSearchParams } from 'react-router-dom'

interface Props {
  className?: string
}

export const ResetPasswordPage = ({ className }: Props) => {
  return (
    <main className={cn('container pt-40', className)}>
      <h1 className="mb-14 text-5xl font-medium">Сброс пароля</h1>
      <div className="max-w-[544px] mx-auto p-10 border-[1px] border-[#EAEAEA] ">
        <ResetPasswordForm />
      </div>
    </main>
  )
}
