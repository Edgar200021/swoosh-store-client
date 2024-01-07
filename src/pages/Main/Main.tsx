import { Hero } from '../../components/Hero/Hero'
import { cn } from '../../utils/cn'

interface Props {
  className?: string
}

export const Main = ({ className }: Props) => {
  return (
    <main className={cn(' pt-40 md-tablet:pt-20', className)}>
      <Hero />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eos
        totam amet ipsum? Nulla aliquam eius praesentium quod corporis nemo.s
      </p>
    </main>
  )
}
