import { ReactNode, useState } from 'react'
import { cn } from '../../utils/cn'

interface Props {
  className?: string
  collapsed?: boolean
  renderTrigger?: (
    fn: React.Dispatch<React.SetStateAction<boolean>>,
    isCollapsed?: boolean
  ) => ReactNode | void
  children: ReactNode
}

export const Collapsible = ({
  className,
  children,
  collapsed,
  renderTrigger,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  console.log(collapsed)

  return (
    <>
      {renderTrigger?.(setIsCollapsed, isCollapsed)}
      <div
        className={cn(
          'grid grid-rows-[0fr] transition-all duration-300 ease [&>*]:min-h-0 overflow-hidden',
          className,
          { 'grid-rows-[1fr]': collapsed !== undefined ? collapsed : isCollapsed }
        )}
      >
        {children}
      </div>
    </>
  )
}