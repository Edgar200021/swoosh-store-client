import { ComponentProps } from 'react'
import { cn } from '../../utils/cn'
import { NavLink } from 'react-router-dom'

const buttonVariants = {
  primary:
    'flex justify-between relative w-full py-6 px-6 text-center text-white bg-[#1E1E1E] font-medium hover:-translate-y-2 active:-translate-y-1 transition-transform duration-300 ease disabled:cursor-not-allowed ',
  clear: 'p-0 m-0 border-none ',
}

interface Props extends ComponentProps<'button'> {
  className?: string
  color?: 'orange' | 'black'
  variant?: keyof typeof buttonVariants
  to?: string
}

export const Button = ({
  className,
  children,
  color = 'black',
  variant = 'primary',
  to,
  ...otherProps
}: Props) => {
  if (variant === 'primary') {
    return !to ? (
      <button
        className={cn(buttonVariants[variant], className, {
          'bg-[#FF6915] [&>span[data-decor]]:bg-[#FB5A00]': color === 'orange',
        })}
        {...otherProps}
      >
        <span className="w-[90%]">{children}</span>
        <span
          data-decor
          className="absolute w-[65px] h-full  right-0 top-0 flex justify-center items-center text-white bg-black text-3xl"
        >
          &#8594;
        </span>
      </button>
    ) : (
      <NavLink
        to={to}
        className={cn(buttonVariants[variant], className, {
          'bg-[#FF6915] [&>span[data-decor]]:bg-[#FB5A00]': color === 'orange',
        })}
      >
        {' '}
        <span className="w-[90%]">{children}</span>
        <span
          data-decor
          className="absolute w-[65px] h-full  right-0 top-0 flex justify-center items-center text-white bg-black text-3xl"
        >
          &#8594;
        </span>
      </NavLink>
    )
  }

  if (to)
    return (
      <NavLink className={cn(buttonVariants[variant], className, {})} to={to}>
        {children}
      </NavLink>
    )

  return (
    <button
      className={cn(buttonVariants[variant], className, {})}
      {...otherProps}
    >
      {children}
    </button>
  )
}
