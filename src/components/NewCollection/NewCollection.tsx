import { cn } from '../../utils/cn'

import { Button } from '../ui/Button'

interface Props {
  className?: string
  img: string
  title: string
}

export const NewCollection = ({ className, img, title }: Props) => {
  return (
    <div
      className={cn(
        'min-h-[600px]  p-[30px]  max-w-[670px] w-full relative flex flex-col items-start justify-between font-medium text-white',
        className
      )}
    >
      <img className="object-cover absolute inset-0 w-full h-full -z-10" src={img} alt="img" />
      <span className="block max-w-[220px]  text-2xl">{title}</span>
      <Button className="text-lg underline  " to="products" variant="clear">
        Перейти в каталог
      </Button>
    </div>
  )
}
