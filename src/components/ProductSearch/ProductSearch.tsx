import { useState } from 'react'
import { Button } from '../ui/Button'

import search from '../../assets/icons/search.svg'
import { Input } from '../ui/Input'
import { cn } from '../../utils/cn'
import { Collapsible } from '../Collapsible/Collapsible'

interface Props {
  className?: string
  collapsible?: boolean
}

export const ProductSearch = ({ className, collapsible = true }: Props) => {
  const [isOpened, setIsOpened] = useState(false)
  return collapsible ? (
    <>
      <Button
        className={cn(
          'inline-flex items-center justify-center w-full h-full ',
          {}
        )}
        variant="clear"
        onClick={() => setIsOpened(!isOpened)}
      >
        <img
          className={cn('w-4 h-4', { 'filter-white': isOpened })}
          src={search}
          alt="search"
        />
      </Button>
      <Collapsible
        collapsed={isOpened}
        className={cn('absolute -z-10 border-none border-0  ', className, {
          'z-10': isOpened,
        })}
      >
        <Input
          className={cn(
            'py-0 border-none border-0 h-full block transition-all',
            {
              'py-4': isOpened,
            }
          )}
          placeholder="Поиск по каталогу товаров..."
        />
      </Collapsible>
    </>
  ) : (
    <label
      className={cn(
        'w-full flex items-center h-[70px] bg-[#F9F9F9] border-b-[1px] border-b-[#EAEAEA] pl-4',
        className
      )}
    >
      <Input
        className={cn(
          'border-none border-0 h-full block transition-all focus:outline-none  bg-[#F9F9F9]  py-3 px-0'
        )}
        placeholder="Поиск по каталогу товаров..."
      />
      <div className='w-[70px] flex justify-center items-center border-l-[1px] h-full border-l-[#EAEAEA]'>
        <img className={cn('w-4 h-4')} src={search} alt="search" />
      </div>
    </label>
  )
}
