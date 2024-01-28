import accountExist from '../../assets/icons/accountexist.svg'
import {cn} from '../../helpers/cn'
import {Button} from '../ui/Button'

interface Props {
  className?: string
  type: 'sign-up' | 'sign-in'
}

export const AccountExist = ({className, type}: Props) => {
  return (
      <div
          className={cn(
              'pl-[50px] border-l-[1px] border-l-[#EAEAEA] grid grid-cols-[40px_1fr] gap-x-7 items-start max-w-[650px] lg-tablet:pl-0 lg-tablet:border-none lg-tablet:text-center lg-tablet:flex lg-tablet:flex-col lg-tablet:items-center tablet:max-w-[400px]',
              className
          )}
      >
        <img className='w-10 h-[45px]' src={accountExist} alt="User icon"/>
        <div className='lg-tablet:flex lg-tablet:flex-col lg-tablet:items-center'>
        <span className="text-[28px] font-medium mb-[38px] block lg-tablet:mb-3">
          {type === 'sign-up' ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
        </span>
          <p className="mb-[10px]">
            {type === 'sign-up' ? (
                'Перейдите к авторизации если у вас уже есть зарегистрированный аккаунт.'
            ) : (
                <span>
              'Регистрация на сайте позволяет получить доступ к статусу и
              истории вашего заказа. Просто заполните поля ниже, и вы получите
              учетную запись. <br/> <br/>
              Мы запрашиваем у вас только информацию, необходимую для того,
              чтобы сделать процесс покупки более быстрым и легким.
            </span>
            )}
          </p>
          <Button
              className="max-w-[280px]"
              to={type === 'sign-up' ? '/auth/sign-in' : '/auth/sign-up'}
              color="orange"
          >
            {type === 'sign-up' ? 'Авторизоваться' : 'Зарегистрироваться'}
          </Button>
        </div>
      </div>
  )
}
