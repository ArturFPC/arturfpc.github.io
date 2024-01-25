import { cn } from '@/app/lib/utils'

type HorizontalSplitterProps = {
  className?: string
}
export const HorizontalSplitter = ({ className }: HorizontalSplitterProps) => {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}
