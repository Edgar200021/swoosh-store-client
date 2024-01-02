import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

import { cn } from '../../utils/cn'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema, signUpSchema } from '../../schemas/signUpSchema'
import { useSignUpMutation } from '../../store/auth/authApi'
import { validateError } from '../../utils/validateError'

import eye from '../../assets/icons/eye.svg'
import { useState } from 'react'

interface Props {
  className?: string
}

export const SignUpForm = ({ className }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  })

  const [signUp, { isLoading }] = useSignUpMutation()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)

  const onSubmit: SubmitHandler<SignUpSchema> = async signUpData => {
    try {
      await signUp({
        email: signUpData.email,
        password: signUpData.password,
        passwordConfirm: signUpData.passwordConfirm,
      }).unwrap()

      toast.success('Регистрация прошла успешно', {
        duration: 3000,
      })
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
        <div className="flex flex-col items-start gap-y-[5px] mb-4">
          <span className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
            Email
          </span>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                type="email"
                required
                placeholder="Введите email адрес"
                {...field}
              />
            )}
          />
        </div>
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
                placeholder="Придумайте пароль"
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
        <label className="flex gap-x-[10px] items-start max-w-[400px] mb-6">
          <input
            {...register('policy')}
            className="accent-black cursor-pointer mt-[6px]"
            type="checkbox"
            required
          />
          <span className="text-[#474747] cursor-pointer">
            Я соглашаюсь на обработку персональных данных в соответствии с
            политикой конфиденциальности
          </span>
        </label>
        <Button>{isLoading ? 'Загрузка' : 'Создать аккаунт'}</Button>
      </fieldset>
    </form>
  )
}
