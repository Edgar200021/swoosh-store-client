import {useState} from 'react'
import {Button} from '../ui/Button'
import {cn} from '../../helpers/cn'
import {CATALOG} from '../../config/constants'
import {Collapsible} from '../Collapsible/Collapsible'

import img from '../../assets/img/new-collection/img-1.jpg'
import {NewCollection} from '../NewCollection/NewCollection'

interface Props {
  className?: string
}

export const Catalog = ({className}: Props) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
      <>
        <Button
            className={cn(
                'pl-[52px] relative before:absolute before:w-9 before:h-[2px] before:bg-black before:left-0 before:bottom-1 after:absolute after:w-7 after:h-[2px] after:bg-black after:left-2 after:top-2 ',
                {
                  'text-[#FB5A00] after:bg-[#FB5A00] before:bg-[#FB5A00]': isOpened,
                }
            )}
            variant="clear"
            onClick={() => setIsOpened(!isOpened)}
        >
          Каталог
        </Button>
        <Collapsible
            collapsed={isOpened}
            className={cn(
                'shadow-lg absolute z-20 w-full py-0 bg-white  transition-all',
                className,
                {
                  'py-10': isOpened,
                }
            )}
        >
          <div className="container flex gap-x-20 gap-y-5 flex-wrap md-desktop:justify-center lg-tablet:gap-x-10 ">
            {CATALOG.map(({label, values}) => {
              return (
                  <div key={label}>
                <span className="block font-medium text-lg capitalize mb-3">
                  {label}
                </span>
                    <ul className="space-y-1">
                      {values.map(value => (
                          <li key={value}>
                            <Button
                                className="hover:text-orange-500 transition-colors ease duration-300"
                                variant="clear"
                                to="/products"
                            >
                              {value}
                            </Button>
                          </li>
                      ))}
                    </ul>
                  </div>
              )
            })}
            <NewCollection
                img={img}
                title={'Новая коллекция в каталоге Nike Air Max Solo'}
                className="max-w-[440px] ml-auto max-h-[346px] md-desktop:hidden min-h-[300px]"
            />
          </div>
        </Collapsible>
      </>
  )
}
