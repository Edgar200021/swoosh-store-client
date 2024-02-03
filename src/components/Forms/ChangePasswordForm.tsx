import {useForm, Controller, SubmitHandler} from 'react-hook-form'
import {useState} from 'react'

import {cn} from '../../helpers/cn'
import {Input} from '../ui/Input'
import {Button} from '../ui/Button'
import {useChangePasswordMutation} from '../../store/auth/authApi'
import {validateError} from '../../helpers/validateError'

import eye from '../../assets/icons/eye.svg'
import {changePasswordSchema, ChangePasswordSchema} from "../../schemas/сhangePasswordSchema.ts";
import {Collapsible} from "../Collapsible/Collapsible.tsx";
import toast from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";

interface Props {
  className?: string
}

export const ChangePasswordForm = ({className}: Props) => {
  const {control, handleSubmit, reset, formState: {errors}} = useForm<ChangePasswordSchema>(
      {resolver: zodResolver(changePasswordSchema)}
  )
  const [changePassword, {isLoading,}] = useChangePasswordMutation()
  const [isVisible, setIsVisible] = useState({
    oldPassword: false,
    password: false,
    passwordConfirm: false
  })


  const onSubmit: SubmitHandler<ChangePasswordSchema> = async ({oldPassword, password, passwordConfirm}) => {
    try {
      await changePassword({
        oldPassword, password, passwordConfirm
      }).unwrap()
      reset({oldPassword: "", password: "", passwordConfirm: ""})
      toast.success('Пароль успешно обновлен')
    } catch (err) {
      validateError(err)
    }
  }

  return (
      <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn('max-w-[475px] w-full', className)}
      >
        <fieldset disabled={isLoading}>
          <div className="flex flex-col items-start gap-y-[5px] mb-4 relative">
          <span
              className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
            Текущий пароль
          </span>
            <Controller
                control={control}
                name="oldPassword"
                render={({field}) => (
                    <label className=" w-full relative">
                      <Input
                          type={isVisible.oldPassword ? 'text' : 'password'}
                          required
                          placeholder="Введите текущий пароль"
                          {...field}
                          className="pr-14"
                      />
                      <Button
                          variant="clear"
                          type="button"
                          className={cn(
                              "w-[18px] h-3 absolute right-5 bottom-[15px] cursor-pointer after:content-[''] after:absolute after:-left-[2px] after:opacity-0 after:top-[50%] after:translate-y-[-50%] after:-rotate-45 after:w-6 after:h-px after:bg-[#C1C1C1] after:transition-opacity after:duration-300 after:ease",
                              {'after:opacity-100': !isVisible.oldPassword}
                          )}
                          onClick={() => setIsVisible(prev => ({...prev, oldPassword: !isVisible.oldPassword}))}
                      >
                        <img src={eye} alt="Eye icon"/>
                      </Button>
                    </label>
                )}
            />
            <Collapsible collapsed={!!errors?.oldPassword?.message}>
            <span className="text-red-600">
              {errors?.oldPassword && errors?.oldPassword.message}
            </span>
            </Collapsible>
          </div>
          <div className="flex flex-col items-start gap-y-[5px] mb-4 relative">
          <span
              className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
            Новый пароль
          </span>
            <Controller
                control={control}
                name="password"
                render={({field}) => (
                    <label className='w-full relative'>
                      <Input
                          type={isVisible.password ? 'text' : 'password'}
                          required
                          placeholder="Придумайте пароль"
                          {...field}
                      />
                      <Button
                          type="button"
                          variant="clear"
                          className={cn(
                              "w-[18px] h-3 absolute right-5 bottom-[15px] cursor-pointer after:content-[''] after:absolute after:-left-[2px] after:opacity-0 after:top-[50%] after:translate-y-[-50%] after:-rotate-45 after:w-6 after:h-px after:bg-[#C1C1C1] after:transition-opacity after:duration-300 after:ease",
                              {'after:opacity-100': !isVisible.password}
                          )}
                          onClick={() => setIsVisible(prev => ({...prev, password: !isVisible.password}))}

                      >
                        <img src={eye} alt="Eye icon"/>
                      </Button>
                    </label>
                )}
            />
            <Collapsible collapsed={!!errors?.password?.message}>
            <span className="text-red-600">
              {errors?.password && errors?.password.message}
            </span>
            </Collapsible>
          </div>
          <div className="flex flex-col items-start gap-y-[5px] mb-4 relative">
          <span
              className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
            Повторите пароль
          </span>
            <Controller
                control={control}
                name="passwordConfirm"
                render={({field}) => (
                    <label className='w-full relative'>
                      <Input
                          type={isVisible.passwordConfirm ? 'text' : 'password'}
                          required
                          placeholder="Повторите новый пароль"
                          {...field}
                      />
                      <Button
                          type="button"
                          variant="clear"
                          className={cn(
                              "w-[18px] h-3 absolute right-5 bottom-[15px] cursor-pointer after:content-[''] after:absolute after:-left-[2px] after:opacity-0 after:top-[50%] after:translate-y-[-50%] after:-rotate-45 after:w-6 after:h-px after:bg-[#C1C1C1] after:transition-opacity after:duration-300 after:ease",
                              {'after:opacity-100': !isVisible.passwordConfirm}
                          )}
                          onClick={() => setIsVisible(prev => ({...prev, passwordConfirm: !isVisible.passwordConfirm}))}

                      >
                        <img src={eye} alt="Eye icon"/>
                      </Button>
                    </label>
                )}
            />
            <Collapsible collapsed={!!errors?.passwordConfirm?.message}>
            <span className="text-red-600">
              {errors?.passwordConfirm && errors?.passwordConfirm.message}
            </span>
            </Collapsible>
          </div>


          <Button>{isLoading ? 'Загрузка' : 'Сменить пароль'}</Button>
        </fieldset>
      </form>
  )
}
