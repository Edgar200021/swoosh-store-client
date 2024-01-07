import { Benefit } from '../../components/Benefit/Benefit'
import { Hero } from '../../components/Hero/Hero'
import { SneakersList } from '../../components/Lists/SneakersList'
import { Sneaker } from '../../components/Sneaker/Sneaker'
import { BENEFITS } from '../../config/constants'
import { cn } from '../../utils/cn'

interface Props {
  className?: string
}

export const Main = ({ className }: Props) => {
  return (
    <main className={cn(' pt-40 md-tablet:pt-20', className)}>
      <Hero />
      <section className="py-[50px] border-[1px] border-[#EAEAEA] mb-[90px]">
        <div className="container">
          <ul className="flex flex-wrap justify-center gap-5 ">
            {BENEFITS.map(benefit => (
              <Benefit key={benefit.title} {...benefit} />
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <SneakersList />
        </div>
      </section>
    </main>
  )
}
