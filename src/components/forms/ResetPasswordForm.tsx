import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

import { cn } from '../../utils/cn'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateError } from '../../utils/validateError'

import eye from '../../assets/icons/eye.svg'
import { useState } from 'react'
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from '../../schemas/resetPasswordSchema'
import { useResetPasswordMutation } from '../../store/auth/authApi'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface Props {
  className?: string
}

export const ResetPasswordForm = ({ className }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  })
  const [searchParams] = useSearchParams(),
    navigate = useNavigate(),
    [resetPassword, { isLoading }] = useResetPasswordMutation(),
    [isPasswordVisible, setIsPasswordVisible] = useState(false),
    [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  const email = searchParams.get('email')!,
    passwordResetToken = searchParams.get('token')!

  const onSubmit: SubmitHandler<
    ResetPasswordSchema
  > = async resetPasswordData => {
    try {
      await resetPassword({
        email,
        passwordResetToken,
        password: resetPasswordData.password,
        passwordConfirm: resetPasswordData.passwordConfirm,
      }).unwrap()

      toast.success(
        'Сброс пароля прошла успешно. Войдите в аккаунт для дальнейших действий',
        {
          duration: 3000,
        }
      )

      navigate('/auth/sign-in')
    } catch (err) {
      validateError(err)
    }
  }

  return (
    <form
      //@ts-expect-error ...
      onSubmit={handleSubmit(onSubmit)}
      className={cn('max-w-[464px]', className)}
    >
      <fieldset disabled={isLoading}>
        <div className="flex flex-col items-start gap-y-[5px] mb-4 relative">
          <Button
            variant="clear"
            type="button"
            className={cn(
              "w-[18px] h-3 absolute right-5 bottom-[15px] cursor-pointer after:content-[''] after:absolute after:-left-[2px] after:opacity-0 after:top-[50%] after:translate-y-[-50%] after:-rotate-45 after:w-6 after:h-px after:bg-[#C1C1C1] after:transition-opacity after:duration-300 after:ease",
              { 'after:opacity-100': isPasswordVisible }
            )}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <img src={eye} alt="Eye icon" />
          </Button>
          <span className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
            Пароль
          </span>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                type={isPasswordVisible ? 'text' : 'password'}
                required
                placeholder="Придумайте новый пароль"
                {...field}
              />
            )}
          />
        </div>
        <div className="flex flex-col items-start gap-y-[5px] mb-4 relative">
          <Button
            type="button"
            variant="clear"
            className={cn(
              "w-[18px] h-3 absolute right-5 bottom-[15px] cursor-pointer after:content-[''] after:absolute after:-left-[2px] after:opacity-0 after:top-[50%] after:translate-y-[-50%] after:-rotate-45 after:w-6 after:h-px after:bg-[#C1C1C1] after:transition-opacity after:duration-300 after:ease",
              { 'after:opacity-100': isConfirmPasswordVisible }
            )}
            onClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
          >
            <img src={eye} alt="Eye icon" />
          </Button>
          <span className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
            Повторите пароль
          </span>
          <Controller
            control={control}
            name="passwordConfirm"
            render={({ field }) => (
              <Input
                type={isConfirmPasswordVisible ? 'text' : 'password'}
                required
                placeholder="Повторите пароль"
                {...field}
              />
            )}
          />
        </div>

        <Button>{isLoading ? 'Загрузка' : 'Сбросить пароль'}</Button>
      </fieldset>
    </form>
  )
}
