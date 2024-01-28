import {ForgotPasswordForm} from '../../components/Forms/ForgotPasswordForm'
import {useForgotPasswordMutation} from '../../store/auth/authApi'
import {cn} from '../../helpers/cn'

import i from '../../assets/icons/i.svg'
import {FormEvent} from 'react'
import {validateError} from '../../helpers/validateError'

interface Props {
  className?: string
}

export const ForgotPasswordPage = ({className}: Props) => {
  const [forgotPassword, {isLoading, isSuccess}] = useForgotPasswordMutation()

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const formData = new FormData(e.target as HTMLFormElement),
          data = Object.fromEntries(formData)

      await forgotPassword(data as { email: string }).unwrap()
    } catch (err) {
      validateError(err)
    }
  }

  return (
      <main className={cn('container pt-40 mb-44 tablet:mb-20', className)}>
        <h1 className="mb-14 text-5xl font-medium">Восстановление пароля</h1>
        <div className="max-w-[544px] mx-auto p-10 border-[1px] border-[#EAEAEA] ">
          {isSuccess === true ? (
              <div className="flex flex-col items-center justify-center gap-y-4 text-center">
                <img className="w-7 h-7" src={i} alt="I."/>
                <p>
                  Ссылка для сброса пароля и дальнейших инструкций отправлена вам на
                  почту. Перейдите по ссылке и следуйте дальнейшим инструкциям.
                </p>
              </div>
          ) : (
              <>
                <p className="text-black/40 font-bold text-center mb-4">
                  <span className="text-[#515151]">Забыли свой пароль?</span>{' '}
                  Укажите свой Email или имя пользователя. Ссылку на создание нового
                  пароля вы получите по электронной почте.
                </p>
                <ForgotPasswordForm isLoading={isLoading} onSubmit={onSubmit}/>
              </>
          )}
        </div>
      </main>
  )
}
