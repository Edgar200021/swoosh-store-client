import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import { AccountExist } from '../../components/AccountExist/AccountExist'
import { SignInForm } from '../../components/forms/SignInForm'

interface Props {
  className?: string
}

export const SignInPage = ({ className }: Props) => {
  return (
    <main className={cn('container', className)}>
      <h1 className="mb-14 text-5xl font-medium">Авторизации</h1>
      <Link to={'/'}>Home</Link>
      <div className="flex justify-between p-10 ">
        <SignInForm className="w-full" />
        <AccountExist type="sign-in" />
      </div>
    </main>
  )
}
