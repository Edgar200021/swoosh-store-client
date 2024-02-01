import {useGetFiltersQuery} from "../../store/sneaker/sneakerApi.ts";
import {cn} from "../../helpers/cn.ts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../@/components/ui/select.tsx";
import Slider from 'react-slider'
import {useCallback, useState} from "react";
import {Button} from "@/components/ui/Button.tsx";
import {Input} from "@/components/ui/Input.tsx";
import {FILTER_LIMIT, SNEAKER_SORT} from "@/config/constants.ts";
import {useSearchParams} from "react-router-dom";
import {SortBy} from "@/components/SortBy/SortBy.tsx";

interface Props {
  className?: string
}

export const SneakerFilter = ({className}: Props) => {
  const {data} = useGetFiltersQuery(null)
  const [searchParams, setSearchParams ] = useSearchParams()
  const [filters, setFilters] = useState({
    price: [data?.minPrice || 0, data?.maxPrice || 500],
    size: '',
    colors: '',
    material: '',
  })

  const onChange = useCallback(<T extends keyof typeof filters>(fieldName:T) =>
      (val: T extends 'price' ?  number[] : string) =>
          setFilters(prev => ({...prev, [fieldName]:  val})), [])


  const onAddFilter = () => {
     Object.entries(filters).map(([key, value]) => {
       if (!value) return

       if (key === 'price') {
         searchParams.set('price>=', String((value as number[])[0]))
         searchParams.set('price<=', String((value as number[])[1]))
       } else searchParams.set(key, value as string)

       setSearchParams(searchParams)
     })
  }

  if (!data) return

  const size = [...data.size].sort((a, b) => a - b)


  return (
      <div className={cn(' border-[#EAEAEA] ', className)}>
        <div className='border-[#EAEAEA] border-[1px] desktop:border-0  mb-5'>
        <div className="container h-[70px]  flex items-center desktop:flex-col desktop:h-auto desktop:items-start desktop:gap-y-5 ">
          <div className='flex items-center gap-x-3 pr-[25px]  border-r-[1px] h-full desktop:border-0 desktop:pt-4 desktop:px-0'>
            <span>Размер</span>
            <Select defaultValue={String(size[0])} onValueChange={onChange('size')}>
              <SelectTrigger className="max-w-[120px] w-full ">
                <SelectValue placeholder="Размер"/>
              </SelectTrigger>
              <SelectContent >
                {size.map(size => <SelectItem key={size}
                                              value={String(size)}>{size} (EU)</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center px-[25px]  gap-x-[30px] border-r-[1px] h-full  desktop:border-0 desktop:px-0 lg-phone:gap-x-3  lg-phone:flex-wrap'>
            <span>Цена:</span>
            <Slider
                minDistance={100}
                className='slider w-[180px] h-[2px] bg-[#DFDFDF] px-[15px]'
                defaultValue={[data.minPrice, data.maxPrice]} value={filters.price}
                min={data.minPrice}
                max={data.maxPrice}
                onChange={onChange('price')}/>
            <div className='flex gap-x-3 lg-phone:gap-x-0  items-center justify-between lg-phone:px-14'>
              <span className='pb-3 border-b-[1px] border-b-[#B5B5B5] min-w-[68px] text-center'>{filters.price[0]} ₽</span>
              <span className='w-4 h-px bg-[#B5B5B5] opacity-40'></span>
              <span className='pb-3 border-b-[1px] border-b-[#B5B5B5] min-w-[68px] text-center'>{filters.price[1]} ₽</span>
            </div>
          </div>
          <div className='flex items-center gap-x-3 px-[25px] desktop:border-0 desktop:px-0 border-r-[1px] h-full'>
            <span>Цвет</span>
            <Select defaultValue={data.colors[0]} onValueChange={onChange('colors')}>
              <SelectTrigger className="max-w-[120px] w-full">
                <SelectValue placeholder="Цвет"/>
              </SelectTrigger>
              <SelectContent>
                {data.colors.map(color => <SelectItem key={color}
                                                      value={String(color)}>{color}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center gap-x-3 px-[25px]  desktop:border-0 desktop:px-0 border-r-[1px] h-full'>
            <span>Материал</span>
            <Select defaultValue={data.material[0]} onValueChange={onChange('material')}>
              <SelectTrigger className="max-w-[120px] w-full ">
                <SelectValue placeholder="Материал"/>
              </SelectTrigger>
              <SelectContent>
                {data.material.map(material => <SelectItem key={material}
                                                           value={String(material)}>{material}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button className='bg-black text-white desktop:py-4 block grow px-4 h-full' onClick={onAddFilter} variant='clear'>Применить фильтры</Button>
        </div>
        </div>
        <div className='flex  items-center justify-between container gap-5 flex-wrap '>
          <div className='flex items-center gap-x-3'>
            <span>Показывать по:</span>
            <div className='flex gap-x-3'>
              {FILTER_LIMIT.map(({name, value }) => {
                const limit = Number(searchParams.get('limit')) || 18

                return <label
                    className={cn('min-w-10 h-10 flex items-center justify-center border-[1px] border-[#EAEAEA] border-solid cursor-pointer grow ', {'border-black': limit == value})}
                    key={value}>
                  <Input onChange={e => {
                    searchParams.set('limit', e.target.value)
                    setSearchParams(searchParams)
                  }} value={value} className='appearance-none p-0 border-0 hidden' type='radio' name={name}/>{
                  value}
                </label>
              })}
            </div>

          </div>
          <div className='flex gap-x-20 items-center justify-between'><span>Сортировка:</span>
            <SortBy className='min-w-[200px]' values={SNEAKER_SORT}/>
          </div>
        </div>
      </div>
  );
};

