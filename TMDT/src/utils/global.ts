export {}

declare global {
  interface IBackendRes<T> {
    statusCode: number
    message: string
    data?: T
  }
  interface PhanTrang<T> {
    trangTruoc: number
    trangTiepTheo: number
    ketQua: T[]
    tongSoLuong: number
  }
}
