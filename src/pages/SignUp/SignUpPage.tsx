import { Link } from 'react-router-dom'
import { SignUpForm } from '../../components/forms/SignUpForm'
import { cn } from '../../utils/cn'
import { AccountExist } from '../../components/AccountExist/AccountExist'

interface Props {
  className?: string
}

export const SignUpPage = ({ className }: Props) => {
  return (
    <main className={cn('container', className)}>
      <h1 className="mb-14 text-5xl font-medium">Регистрация</h1>
      <Link to={'/'}>Home</Link>
      <div className="flex justify-between p-10 ">
        <SignUpForm className='w-full' />
        <AccountExist type="sign-up" />
      </div>
    </main>
  )
}
