import { useState, type ReactNode } from 'react'
import Sidebar from '@/components/SideBarAdmin'

interface IAdminLayoutProps {
  activeMenu: string
  children: ReactNode
}

export function AdminLayout({ activeMenu, children }: IAdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='flex'>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} activeMenu={activeMenu} />
      <div
        className='flex-1 flex flex-col bg-gray-50 transition-all duration-300'
        style={{ marginLeft: collapsed ? 64 : 256 }}
      >
        <main className='flex-1 overflow-auto p-0'>{children}</main>
      </div>
    </div>
  )
}
