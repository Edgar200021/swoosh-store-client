import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'

interface Props {
  className?: string
}

export const Nav = ({ className }: Props) => {
  return (
    <nav>
      <ul
        className={cn(
          ' flex flex-col gap-x-10  gap-y-7 text-[#585858] text-sm lg-tablet:gap-x-4  ',
          className
        )}
      >
        <li className="hover:text-black hover:scale-110 transition-all duration-300 ease">
          <Button variant="clear" to="about">
            О магазине
          </Button>
        </li>
        <li className="hover:text-black hover:scale-110 transition-all duration-300 ease">
          <Button variant="clear" to="blog">
            Наш блог
          </Button>
        </li>
        <li className="hover:text-black hover:scale-110 transition-all duration-300 ease">
          <Button variant="clear" to="delivery">
            Доставка
          </Button>
        </li>
        <li className="hover:text-black hover:scale-110 transition-all duration-300 ease">
          <Button variant="clear" to="payment">
            Оплата
          </Button>
        </li>
        <li className="hover:text-black hover:scale-110 transition-all duration-300 ease">
          <Button variant="clear" to="contacts">
            Контакты
          </Button>
        </li>
        <li className="hover:text-black hover:scale-110 transition-all duration-300 ease">
          <Button variant="clear" to="individual-order">
            Индивидуальный заказ
          </Button>
        </li>
      </ul>
    </nav>
  )
}
