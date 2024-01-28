import {SwiperSlide, Swiper} from 'swiper/react'
import {Benefit} from '../../components/Benefit/Benefit'
import {Hero} from '../../components/Hero/Hero'
import {SneakersList} from '../../components/Lists/SneakersList'
import {HitSneaker} from '../../components/Sneaker/Sneaker'
import {BENEFITS, PUBLICATIONS} from '../../config/constants'
import {cn} from '../../helpers/cn'

import {Publication} from '../../components/Publication/Publication'
import {SwiperButtons} from '../../components/ui/Button'
import {NewCollection} from '../../components/NewCollection/NewCollection'

import hitSneaker from '../../assets/img/hit-sneaker.png'
import hitSneakerLogo from '../../assets/icons/nike-logo.svg'
import newCollection1 from '../../assets/img/new-collection/img-1.jpg'
import newCollection2 from '../../assets/img/new-collection/img-2.jpg'
import {About} from '../../components/About/About'

interface Props {
  className?: string
}

export const Main = ({className}: Props) => {
  return (
      <main className={cn(' pt-40 md-tablet:pt-20', className)}>
        <Hero/>
        <section className="py-[50px] border-[1px] border-[#EAEAEA] mb-[90px] tablet:mb-[60px]">
          <div className="container">
            <ul className="flex flex-wrap justify-center gap-5 ">
              {BENEFITS.map(benefit => (
                  <Benefit key={benefit.title} {...benefit} />
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-[115px] tablet:mb-[60px]">
          <div className="container relative">
            <h2 className="max-w-[305px] font-medium text-[39px] mb-[60px] uppercase tablet:text-2xl">
              Последние поступления
            </h2>
            <SneakersList
                withSlider={true}
                filter={{sort: 'createdAt', limit: 12}}
            />
          </div>
        </section>
        <section className="mb-[115px] tablet:mb-[60px]">
          <div className="container relative">
            <h2 className="max-w-[305px] font-medium text-[39px] mb-[60px] tablet:text-2xl uppercase">
              самые продаваемые
            </h2>
            <SneakersList
                withSlider={true}
                filter={{limit: 12, sort: 'price'}}
            />
          </div>
        </section>

        <section className="mb-[90px] tablet:mb-[60px]">
          <div className="container">
            <HitSneaker
                brand="nike"
                title="Nike Air Max Alpha Trainer 5"
                brandIcon={hitSneakerLogo}
                img={hitSneaker}
                price={7899}
            />
          </div>
        </section>

        <section className="overflow-hidden mb-[90px] tablet:mb-[60px]">
          <div className=" container  relative ">
            <h2 className="max-w-[305px] font-medium text-[39px] mb-[60px] tablet:text-2xl uppercase">
              Последние публикации
            </h2>
            <Swiper
                className="static !overflow-visible  "
                spaceBetween={40}
                slidesPerView={'auto'}
            >
              <SwiperButtons
                  className=" absolute right-8 top-8 tablet:right-[25px] phone:right-[15px]  "
                  length={PUBLICATIONS.slice(0, 7).length}
              />
              {PUBLICATIONS.slice(0, 7).map((publication, i) => (
                  <SwiperSlide className="!w-auto" key={i}>
                    <Publication {...publication} />
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="mb-[90px] tablet:mb-[60px]">
          <div className="container">
            <div className="flex gap-x-10 lg-phone:flex-col lg-phone:gap-x-0 lg-phone:gap-y-5">
              <NewCollection
                  img={newCollection1}
                  title="Новая коллекция в каталоге Nike Air Max Solo"
                  className="tablet:min-h-[500px] md-phone:min-h-[300px]"
              />
              <NewCollection
                  img={newCollection2}
                  title="Новая коллекция в каталоге Nike Air Max Solo"
                  className="tablet:min-h-[500px] md-phone:min-h-[300px]"
              />
            </div>
          </div>
        </section>

        <section className="mb-44 tablet:mb-20">
          <About/>
        </section>
      </main>
  )
}
