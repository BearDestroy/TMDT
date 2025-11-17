import { useRoutes } from 'react-router'

import HomePage3 from 'src/pages/Home/HomePage3'
import AdminLayout from 'src/layouts/Admin'
import QuanLyChuyenMon from '@/pages/Admin/ChuyenMon'
import QuanLyDanhMuc from '@/pages/Admin/DanhMuc'
import QuanLyDoKho from '@/pages/Admin/DoKho'
import QuanLyHocVan from '@/pages/Admin/HocVan'
import QuanLyLoaiBaiTap from '@/pages/Admin/LoaiBaiTap'
import QuanLyLoaiCauHoi from '@/pages/Admin/LoaiCauHoi'
import QuanLyLoaiDanhGia from '@/pages/Admin/LoaiDanhGia'
import QuanLyMucDich from '@/pages/Admin/MucDich'
import QuanLyNgheNghiep from '@/pages/Admin/NgheNghiep'
import QuanLyPhuongThucThanhToan from '@/pages/Admin/PhuongThucThanhToan'
import QuanLyTrinhDo from '@/pages/Admin/TrinhDo'
import QuanLyVaiTro from '@/pages/Admin/VaiTro'
import QuanLyTheLoai from '@/pages/Admin/TheLoai'
import QuanLyChuDe from '@/pages/Admin/ChuDe'

function App() {
  const element = useRoutes([
    {
      path: '/chuyen-mon',
      element: (
        <AdminLayout activeMenu='chuyenmon'>
          <QuanLyChuyenMon />
        </AdminLayout>
      )
    },
    {
      path: '/danh-muc',
      element: (
        <AdminLayout activeMenu='danhmuc'>
          <QuanLyDanhMuc />
        </AdminLayout>
      )
    },
    {
      path: '/do-kho',
      element: (
        <AdminLayout activeMenu='dokho'>
          <QuanLyDoKho />
        </AdminLayout>
      )
    },
    {
      path: '/hoc-van',
      element: (
        <AdminLayout activeMenu='hocvan'>
          <QuanLyHocVan />
        </AdminLayout>
      )
    },
    {
      path: '/loai-bai-tap',
      element: (
        <AdminLayout activeMenu='loaibaitap'>
          <QuanLyLoaiBaiTap />
        </AdminLayout>
      )
    },
    {
      path: '/loai-cau-hoi',
      element: (
        <AdminLayout activeMenu='loaicauhoi'>
          <QuanLyLoaiCauHoi />
        </AdminLayout>
      )
    },
    {
      path: '/loai-danh-gia',
      element: (
        <AdminLayout activeMenu='loaidanhgia'>
          <QuanLyLoaiDanhGia />
        </AdminLayout>
      )
    },
    {
      path: '/muc-dich',
      element: (
        <AdminLayout activeMenu='mucdich'>
          <QuanLyMucDich />
        </AdminLayout>
      )
    },
    {
      path: '/nghe-nghiep',
      element: (
        <AdminLayout activeMenu='nghenghiep'>
          <QuanLyNgheNghiep />
        </AdminLayout>
      )
    },
    {
      path: '/phuong-thuc-thanh-toan',
      element: (
        <AdminLayout activeMenu='phuongthucthanhtoan'>
          <QuanLyPhuongThucThanhToan />
        </AdminLayout>
      )
    },
    {
      path: '/the-loai',
      element: (
        <AdminLayout activeMenu='the-loai'>
          <QuanLyTheLoai />
        </AdminLayout>
      )
    },
    {
      path: '/trinh-do',
      element: (
        <AdminLayout activeMenu='trinhdo'>
          <QuanLyTrinhDo />
        </AdminLayout>
      )
    },
    {
      path: '/vai-tro',
      element: (
        <AdminLayout activeMenu='vaitro'>
          <QuanLyVaiTro />
        </AdminLayout>
      )
    },
    {
      path: '/chu-de',
      element: (
        <AdminLayout activeMenu='chude'>
          <QuanLyChuDe />
        </AdminLayout>
      )
    },
    {
      path: '/home2',
      element: <HomePage3 />
    }
  ])

  return element
}

export default App
