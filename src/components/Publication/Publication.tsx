import {cn} from '../../helpers/cn'

import plusIcon from '../../assets/icons/plus.svg'
import {Button} from '../ui/Button'
import {formatDate} from '../../helpers/date'

interface Props {
  className?: string
  category: string
  title: string
  subTitle: string
  date: Date
  image: string
}

export const Publication = ({
                              className,
                              category,
                              title,
                              subTitle,
                              date,
                              image,
                            }: Props) => {
  return (
      <li
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(${image}), lightgray  `,
          }}
          className={cn('max-w-2xl  p-10 text-white relative !bg-no-repeat !bg-cover !bg-center  ', className)}
      >
      <span className="block bg-[#DBE5EB] w-fit py-4 px-[10px] text-black font-medium uppercase text-xs mb-6 ">
        {category}
      </span>
        <h2 className="max-w-md font-medium text-[27px] mb-20">{title}</h2>
        <span className="flex mb-6 gap-x-[14px] max-w-80">
        <img className="w-[18px] h-[18px] translate-y-1" src={plusIcon} alt="Plus"/>
        <span>{subTitle}</span>
      </span>
        <div className="flex items-center justify-between">
          <Button
              variant="clear"
              className="font-medium text-lg pb-2 border-b-2 border-solid border-b-white"
          >
            Подробнее
          </Button>
          <span>{formatDate(date)}</span>
        </div>
      </li>
  )
}
