import type { PhuongThucThanhToan } from '@/@types/PhuongThucThanhToan.type'
import { http } from '@/utils/interceptor'
import type { phuongThucThanhToanFormData } from '@/validations/phuongthucthanhtoan.schema'

export const layDSPhuongThucThanhToan = (
  soTrang: number | string,
  soLuong: number | string,
  trangThai: number | string,
  tuKhoa: string | null
) => {
  return http.get<PhanTrang<PhuongThucThanhToan>>('/phuongthucthanhtoans', {
    params: { soTrang, soLuong, trangThai, tuKhoa }
  })
}

export const themPhuongThucThanhToan = (request: phuongThucThanhToanFormData) => {
  return http.post<null>('/phuongthucthanhtoans', request)
}

export const suaPhuongThucThanhToan = (request: phuongThucThanhToanFormData, id: number) => {
  return http.put<null>(`/phuongthucthanhtoans/${id}`, request)
}

export const xoaPhuongThucThanhToan = (id: number) => {
  return http.delete<null>(`/phuongthucthanhtoans/${id}`)
}
