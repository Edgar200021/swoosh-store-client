import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

import { cn } from '../../utils/cn'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { useSignInMutation } from '../../store/auth/authApi'
import { validateError } from '../../utils/validateError'

import eye from '../../assets/icons/eye.svg'

interface Props {
  className?: string
}

export const SignInForm = ({ className }: Props) => {
  const { control, handleSubmit } = useForm<{
    email: string
    password: string
  }>()
  const [signIn, { isLoading }] = useSignInMutation()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onSubmit: SubmitHandler<{
    email: string
    password: string
  }> = async signInData => {
    try {
      await signIn({
        email: signInData.email,
        password: signInData.password,
      }).unwrap()
    } catch (err) {
      validateError(err)
    }
  }

  return (
    <form
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
                required
                type="email"
                placeholder="Введите данные для авторизации"
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
              { 'after:opacity-100': !isPasswordVisible }
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
                placeholder="Введите пароль от аккаунта"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Button
            to="/auth/forgot-password"
            className="underline w-full text-center p-3 block bg-[#F9F9F9] mb-4"
            variant="clear"
          >
            Восстановить пароль
          </Button>
        </div>

        <Button>{isLoading ? 'Загрузка' : 'Войти в кабинет'}</Button>
      </fieldset>
    </form>
  )
}
