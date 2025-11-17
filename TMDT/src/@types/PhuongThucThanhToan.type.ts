export interface PhuongThucThanhToan {
  id: number
  maPhuongThucThanhToan: string
  tenPhuongThucThanhToan: string
  thoiGianTao: string
  trangThai: boolean
}

export interface PhuongThucThanhToanRequest {
  maPhuongThucThanhToan?: string
  tenPhuongThucThanhToan: string
  trangThai?: boolean
}
