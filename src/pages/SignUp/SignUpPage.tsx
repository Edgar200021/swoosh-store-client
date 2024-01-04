import { Link } from 'react-router-dom'
import { SignUpForm } from '../../components/Forms/SignUpForm'
import { cn } from '../../utils/cn'
import { AccountExist } from '../../components/AccountExist/AccountExist'

interface Props {
  className?: string
}

export const SignUpPage = ({ className }: Props) => {
  return (
    <main className={cn('container pt-40 md-tablet:pt-20 ', className)}>
      <h1 className="mb-14 text-5xl font-medium">Регистрация</h1>
      <Link to={'/'}>Home</Link>
      <div className="flex justify-between p-10 gap-x-10 border-[1px] border-[#EAEAEA] lg-tablet:p-4 tablet:flex-col tablet:gap-x-0 tablet:gap-y-4 tablet:items-center ">
        <SignUpForm className="w-full" />
        <AccountExist type="sign-up" />
      </div>
    </main>
  )
}
