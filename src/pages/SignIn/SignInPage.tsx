import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import { AccountExist } from '../../components/AccountExist/AccountExist'
import { SignInForm } from '../../components/Forms/SignInForm'

interface Props {
  className?: string
}

export const SignInPage = ({ className }: Props) => {
  return (
    <main className={cn('container pt-40', className)}>
      <h1 className="mb-14 text-5xl font-medium">Авторизации</h1>
      <Link to={'/'}>Home</Link>
      <div className="flex justify-between p-10 gap-x-10 border-[1px] border-[#EAEAEA] lg-tablet:p-4 tablet:flex-col tablet:gap-x-0 tablet:gap-y-4 tablet:items-center ">
        <SignInForm className="w-full" />
        <AccountExist type="sign-in" />
      </div>
    </main>
  )
}
