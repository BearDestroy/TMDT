export function createURLDM(
  location: string,
  soTrang: number,
  soLuongHienThi: number,
  trangThai: string,
  tuKhoa?: string
) {
  let url = `${location}?soTrang=${soTrang}&soLuong=${soLuongHienThi}&trangThai=${trangThai}`

  if (tuKhoa) {
    url += `&tuKhoa=${encodeURIComponent(tuKhoa)}`
  }
  return url
}

export function createURLTheLoai(
  location: string,
  soTrang: number,
  soLuongHienThi: number,
  trangThai: string,
  tuKhoa?: string,
  idDanhMuc?: number | string
) {
  let url = `${location}?soTrang=${soTrang}&soLuong=${soLuongHienThi}&trangThai=${trangThai}&idDanhMuc=${idDanhMuc}`

  if (tuKhoa) {
    url += `&tuKhoa=${encodeURIComponent(tuKhoa)}`
  }
  return url
}

export function createURLChuDe(
  location: string,
  soTrang: number,
  soLuongHienThi: number,
  trangThai: string,
  tuKhoa?: string,
  idDanhMuc?: number | string
) {
  let url = `${location}?soTrang=${soTrang}&soLuong=${soLuongHienThi}&trangThai=${trangThai}&idTheLoai=${idDanhMuc}`

  if (tuKhoa) {
    url += `&tuKhoa=${encodeURIComponent(tuKhoa)}`
  }
  return url
}

export function formatDate(dateString: string | Date) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}
