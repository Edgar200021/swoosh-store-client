import { SneakerFilter } from '../../store/sneaker/interfaces'
import { useGetAllProductsQuery } from '../../store/sneaker/sneakerApi'
import { cn } from '../../utils/cn'
import { isCustomError, validateError } from '../../utils/validateError'
import { Sneaker } from '../Sneaker/Sneaker'

interface Props {
  className?: string
  filter?: Partial<SneakerFilter>
}

export const SneakersList = ({ className, filter }: Props) => {
  return null
  const { data, error } = useGetAllProductsQuery({
    ...filter,
    fields: '-description -size -rating -material',
  })

  if (error) {
    if (isCustomError(error)) validateError(error)
  }

  console.log(data)

  return (
    <ul
      className={cn(
        'grid grid-cols-sneaker-list gap-10 justify-items-center',
        className
      )}
    >
      {data?.map(sneaker => (
        <Sneaker key={sneaker._id} sneaker={sneaker} />
      ))}
    </ul>
  )
}
