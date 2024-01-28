import {ComponentProps} from 'react'
import {cn} from '../../helpers/cn'

interface Props extends ComponentProps<'input'> {
  className?: string
}

export const Input = ({className, ...otherProps}: Props) => {
  return (
      <input
          className={cn(
              'py-[10px] px-5 border-[1px] border-[#D6D6D6] placeholder:text-[##C1C1C1] w-full',
              className
          )}
          {...otherProps}
      />
  )
}
