import { cn } from '@/lib/utils'
import type {
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react'

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & ComponentPropsWithRef<T>

const Container = <T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: PropsWithChildren<ContainerProps<T>>) => {
  const Component = as || 'div'
  return (
    <Component {...props} className={cn('w-11/12 max-w-384', className)}>
      {children}
    </Component>
  )
}

export default Container
