import {ComponentProps} from 'react'
import {cn} from '../../helpers/cn'
import {Button} from '../ui/Button'
import {Input} from '../ui/Input'

interface Props extends ComponentProps<'form'> {
  className?: string
  isLoading: boolean
}

export const ForgotPasswordForm = ({
                                     className,
                                     isLoading,
                                     ...otherProps
                                   }: Props) => {
  return (
      <form className={cn('', className)} {...otherProps}>
        <div className="flex flex-col items-start gap-y-[5px] mb-4">
        <span
            className='relative after:content-["*"] after:absolute after:top-0 after:right-[-4px] after:w-px after:h-px after:text-[#FF1515]'>
          Email
        </span>
          <Input
              name="email"
              type="email"
              required
              placeholder="Введите email адрес"
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Сбросит пароль'}
        </Button>
      </form>
  )
}
