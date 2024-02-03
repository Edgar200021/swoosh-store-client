import {SneakerFilter} from "../../components/Filters/SneakerFilter.tsx";
import {SneakersList} from "@/components/Lists/SneakersList.tsx";
import {useGetSearchParams} from "@/hooks/useGetSearchParams.ts";
import {Collapsible} from "@/components/Collapsible/Collapsible.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {cn} from "@/helpers/cn.ts";
import {useState} from "react";
import {Notification} from "@/components/Notification/Notification.tsx";


export const SneakersPage = () => {
  const filterObj = useGetSearchParams('size', 'colors', 'limit', 'page', 'price>=', 'price<=', 'color', 'material', 'for', 'sort')
  const [isError, setIsError] = useState(false)



  return (
      <main className='pt-48 md-tablet:pt-24 mb-44 tablet:mb-20'>
        <div className="container">
          <h2 className=' block text-5xl font-medium mb-10'>Продукты</h2>
        </div>
        { isError ? <Notification className='max-w-[350px]' variant='error'/> : <>
          <Collapsible  renderTrigger={(fn, isCollapsed) =>
              <Button
                  className='hidden desktop:flex justify-center items-center gap-x-3 py-5 border-[1px] border-solid border-[#EAEAEA]  w-full '
                  onClick={() => fn(prev => !prev)} variant='clear'>
          <span
              className={cn('w-4 h-4 border-y-[3px] border-black relative before:content-[""] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]  before:h-[3px] before:w-full  before:bg-black transition-transform duration 500 ease before:transition-transform before:duration-500 before:ease ', {
                '-rotate-45 before:-rotate-90 border-t-[0px] before:top-[100%] before:translate-y-0 -translate-y-1 ': isCollapsed
              })}></span>
                <span>Показать фильтры</span>
              </Button>}>
            <SneakerFilter onError={setIsError}  className='mb-20 overflow-hidden hidden desktop:block'/>
          </Collapsible>
          <SneakerFilter   onError={setIsError} className='desktop:hidden mb-20'/>
          <div className="container">
            <SneakersList  withPaginate={true} filter={{limit: 18, ...filterObj}}/>
          </div>
        </>}
      </main>
  );
};
