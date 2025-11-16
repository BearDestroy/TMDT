import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Settings,
  ChevronDown,
  ChevronUp,
  LogOut
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  activeMenu: string
}

interface MenuItem {
  label: string
  icon: React.ReactNode
  active?: boolean
  children?: { label: string; active?: boolean }[]
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Quản lý'])

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard className='h-5 w-5' />
    },
    {
      label: 'Quản lý',
      icon: <BookOpen className='h-5 w-5' />,
      children: [
        { label: 'Chuyên môn', active: true },
        { label: 'Danh mục', active: false },
        { label: 'Khóa học', active: false }
      ]
    },
    {
      label: 'Người dùng',
      icon: <Users className='h-5 w-5' />,
      children: [
        { label: 'Danh sách', active: false },
        { label: 'Phân quyền', active: false }
      ]
    },
    {
      label: 'Báo cáo',
      icon: <FileText className='h-5 w-5' />
    },
    {
      label: 'Cài đặt',
      icon: <Settings className='h-5 w-5' />
    }
  ]

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 bg-gray-100 border-r border-gray-200 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className='flex flex-col h-full'>
        {/* Toggle button */}
        <div className='flex justify-end p-2 border-b border-gray-200'>
          <Button variant='ghost' size='icon' onClick={onToggle} className='hover:bg-gray-200'>
            {collapsed ? (
              <ChevronRight className='h-5 w-5 text-gray-700' />
            ) : (
              <ChevronLeft className='h-5 w-5 text-gray-700' />
            )}
          </Button>
        </div>

        {/* MENU */}
        <nav className='flex-1 overflow-y-auto p-2'>
          <ul className='space-y-1'>
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => item.children && toggleExpanded(item.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    item.active ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    {item.icon}
                    {!collapsed && <span>{item.label}</span>}
                  </div>

                  {!collapsed && item.children && (
                    <span>
                      {expandedItems.includes(item.label) ? (
                        <ChevronUp className='h-4 w-4' />
                      ) : (
                        <ChevronDown className='h-4 w-4' />
                      )}
                    </span>
                  )}
                </button>

                {/* SUBMENU */}
                {!collapsed && item.children && expandedItems.includes(item.label) && (
                  <ul className='mt-1 ml-8 space-y-1'>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            child.active ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* USER + LOGOUT */}
        <div className='border-t border-gray-200 p-4'>
          {/* User Info */}
          <div className='flex items-center gap-3'>
            <Avatar className='h-10 w-10'>
              <AvatarImage src='https://api.dicebear.com/7.x/avataaars/svg?seed=Admin' />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>

            {!collapsed && (
              <div className='flex flex-col'>
                <span className='font-medium text-black'>Nguyễn Văn A</span>
                <span className='text-sm text-gray-600'>Quản trị viên</span>
              </div>
            )}
          </div>

          {/* Logout */}
          <button className='flex items-center gap-3 w-full mt-4 px-3 py-2 rounded-lg text-red-600 hover:bg-red-100 transition-colors'>
            <LogOut className='h-5 w-5' />
            {!collapsed && <span>Đăng xuất</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}
