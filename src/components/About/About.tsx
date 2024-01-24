import nikeVector from '../../assets/icons/nike-vector.svg'
import aboutSneaker from '../../assets/img/about-sneaker.png'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'

interface Props {
  className?: string
}

export const About = ({ className }: Props) => {
  return (
    <div className={cn('flex items-center justify-between gap-x-10 padding md-tablet:gap-x-0 md-tablet:gap-y-5 lg-phone:flex-col', className)}>
      <div className="max-w-[785px] w-full tablet:pr-[25px] phone:pr-[15px]">
        <h2 className="uppercase text-[39px] font-medium mb-7 lg-tablet:text-[24px] tablet:text-[21px] mini-phone:text-[24px]  lg-tablet:mb-4">
          Интернет-магазин
          <span className="flex items-center gap-x-7 ">
            Swoosh store
            <span className="h-[2px] block w-[120px] phone:w-[90px] bg-black"></span>
          </span>
        </h2>

        <p className="text-[#2E2E2E mb-[18px]">
          Добро пожаловать в <b>Swoosh Store</b> – ваш источник подлинных
          кроссовок Nike и непревзойденного стиля! Мы рады представить вам
          уникальную онлайн-платформу, где вы сможете окунуться в мир инноваций
          и моды от легендарного бренда спортивной обуви.
          <br />
          <br />
          <b className="block mb-2">Легендарное наследие Nike:</b>
          Swoosh Store - это место, где история и стиль сливаются воедино. Мы
          гордимся тем, что предлагаем вам только оригинальные кроссовки Nike,
          продукцию, которая воплощает более чем полувековое наследие инноваций,
          комфорта и качества. Каждая пара кроссовок – это не просто спортивная
          обувь, это произведение искусства, воплощающее дух победы и страстную
          преданность активному образу жизни.
        </p>

        <Button className='max-w-64'>Подробнее</Button>
      </div>
      <div className="relative w-full max-h-[600px] max-w-[calc(100% - 785px - 40px)] ">
        <img
          src={aboutSneaker}
          className="h-full object-contain object-top"
          alt=""
        />
        <img
          className="absolute w-full h-full top-0 -z-10"
          src={nikeVector}
          alt=""
        />
      </div>
    </div>
  )
}
