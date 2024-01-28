import {cn} from '../../helpers/cn'

interface Props {
  className?: string
  img: string
  text: string
  title: string
}

export const Benefit = ({className, img, title, text}: Props) => {
  return (
      <li className={cn('flex gap-x-5 md-tablet:gap-x-4 max-w-[410px]', className)}>
        <div className="w-[75px] h-[75px] shrink-0 phone:w-[60px] ">
          <img src={img} alt={title}/>
        </div>
        <div>
          <h2 className="mb-2 uppercase text-lg font-medium md-tablet:text-[15px]">{title}</h2>
          <span className="text=[#4B4B4B] md-tablet:text-sm">{text}</span>
        </div>
      </li>
  )
}
