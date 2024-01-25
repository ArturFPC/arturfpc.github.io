import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TbArrowBigRight, TbArrowBigRightLine } from 'react-icons/tb'
type NavItemsProps = {
  label: string
  href: string
}
export const NavItem = ({ label, href }: NavItemsProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono p-5 rounded bg-blue-900 hover:bg-blue-800 transition-colors',
        isActive && 'text-gray-50',
      )}
    >
      <TbArrowBigRightLine />
      {label}
    </Link>
  )
}
