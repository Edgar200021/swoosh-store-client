import { Button } from '../ui/Button'

import sneaker from '../../assets/img/sneaker.png'
import nikeIcon from '../../assets/icons/nike.svg'
import { cn } from '../../utils/cn'

interface Props {
  className?: string
}

export const Hero = ({ className }: Props) => {
  return (
    <section className={cn('h-hero md-tablet:h-mobile-hero', className)}>
      <div className="container relative overflow-hidden">
        <div className="max-w-[500px] w-full relative z-10 md-tablet:flex md-tablet:items-center md-tablet:flex-col md-tablet:mx-auto md-tablet:justify-center">
          <h1 className="uppercase text-[60px] font-medium mb-5 md-tablet:text-[34px] mini-phone:text-[26px]">
            <span className="flex items-center gap-x-7">
              Air max <span className="h-[2px] block w-[120px] bg-black"></span>
            </span>
            Flyknit Racers
          </h1>
          <p className="text-lg mb-5 md-tablet:text-[15px] md-tablet:text-center mini-phone:text-[13px]">
            <span className="phone:self-start block mb-5 md-tablet:mb-[300px]">
              Усиленный носок и прочный пластиковый каркас. Инновационная
              технология раскрывается через перфорированную стельку
            </span>

            <span className="block">
              от <span className="text-[22px] font-medium pl-2"> 7 899 ₽</span>
            </span>
          </p>
          <Button to="products" className="max-w-64">
            Подробнее
          </Button>
        </div>
        <img
          className=" w-[800px] object-contain absolute top-2 right-0 h-[650px] desktop:w-[600px] desktop:h-[600px] md-tablet:w-[500px] md-tablet:top-28 md-tablet:right-[55%] md-tablet:-translate-x-[-50%] min-w-[400px] "
          src={sneaker}
        />
        <img
          className="absolute top-40 right-0 filter max-h-[194px] w-[750px] desktop:h-[100px] desktop:w-[393px] md-tablet:top-[260px] md-tablet:right-[50%]  md-tablet:-translate-x-[-60%] md-phone:top-[280px] lg-phone:h-[88px] mini-phone:-translate-x-[-50%] "
          src={nikeIcon}
          alt="Icon"
        />
      </div>
    </section>
  )
}
