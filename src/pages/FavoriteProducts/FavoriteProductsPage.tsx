import {cn} from "../../helpers/cn.ts";
import {FavoriteSneakerList} from "../../components/Lists/SneakersList.tsx";


interface Props {
  className?: string
}

export const FavoriteProductsPage = ({className}: Props) => {
  return (
      <main className={cn('', className)}>
        <h2 className='text-[28px] font-medium mb-[30px]'>Избранные товары</h2>
        <FavoriteSneakerList className='justify-items-start'/>
      </main>
  );
};
