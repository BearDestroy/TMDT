import { useRoutes } from 'react-router'

import HomePage2 from 'src/pages/Home/HomePage2'
import HomePage3 from 'src/pages/Home/HomePage3'
import AdminLayout from 'src/layouts/Admin'
import QuanLyChuyenMon from '@/pages/Admin/ChuyenMon'

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <AdminLayout activeMenu='chuyenmon'>
          <QuanLyChuyenMon />
        </AdminLayout>
      )
    },
    {
      path: '/home1',
      element: <HomePage2 />
    },
    {
      path: '/home2',
      element: <HomePage3 />
    }
  ])

  return element
}

export default App
