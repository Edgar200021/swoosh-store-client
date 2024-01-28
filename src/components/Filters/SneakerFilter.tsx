import {useGetFiltersQuery} from "../../store/sneaker/sneakerApi.ts";
import {cn} from "../../helpers/cn.ts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../@/components/ui/select.tsx";
import Slider from 'react-slider'
import {useState} from "react";

interface Props {
  className?: string
}

export const SneakerFilter = ({className}: Props) => {
  const {data} = useGetFiltersQuery(null)
  const [price, setPrice] = useState([data?.minPrice || 0, data?.maxPrice || 500])


  if (!data) return

  const size = [...data.size].sort((a, b) => a - b)

  return (
      <div className={cn('border-y-[1px]  border-[#EAEAEA] mt-48', className)}>
        <div className="container h-[70px]  flex items-center  ">
          <div className='flex items-center gap-x-3 pr-[45px] border-r-[1px] h-full'>
            <span>Размер</span>
            <Select>
              <SelectTrigger className="w-[120px] text-[#B5B5B5]">
                <SelectValue placeholder="Размер"/>
              </SelectTrigger>
              <SelectContent className=''>
                {size.map(size => <SelectItem key={size}
                                              value={String(size)}>{size} (EU)</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center px-[45px] gap-x-[30px] border-r-[1px] h-full'>
            <span>Цена:</span>
            <Slider
                minDistance={100}
                className='slider w-[180px] h-[2px] bg-[#DFDFDF] px-[15px]'
                defaultValue={[data.minPrice, data.maxPrice]} value={price}
                min={data.minPrice}
                max={data.maxPrice}
                onChange={setPrice}/>
            <div className='flex gap-x-3 items-center justify-between'>
              <span className='pb-3 border-b-[1px] border-b-[#B5B5B5] min-w-[68px] text-center'>{price[0]} ₽</span>
              <span className='w-4 h-px bg-[#B5B5B5] opacity-40'></span>
              <span className='pb-3 border-b-[1px] border-b-[#B5B5B5] min-w-[68px] text-center'>{price[1]} ₽</span>
            </div>
          </div>
          <div className='flex items-center gap-x-3 px-[45px] border-r-[1px] h-full'>
            <span>Цвет</span>
            <Select>
              <SelectTrigger className="w-[120px] text-[#B5B5B5]">
                <SelectValue placeholder="Цвет"/>
              </SelectTrigger>
              <SelectContent>
                {data.colors.map(color => <SelectItem key={color}
                                                      value={String(color)}>{color}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center gap-x-3 px-[45px] border-r-[1px] h-full'>
            <span>Материал</span>
            <Select>
              <SelectTrigger className="w-[120px] text-[#B5B5B5]">
                <SelectValue placeholder="Материал"/>
              </SelectTrigger>
              <SelectContent>
                {data.material.map(material => <SelectItem key={material}
                                                           value={String(material)}>{material}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>
  );
};
