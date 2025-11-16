export function createURLChuyenMon(
  location: string,
  soTrang: number,
  soLuongHienThi: number,
  trangThai: string,
  keyword?: string
) {
  let url = `${location}?soTrang=${soTrang}&soLuong=${soLuongHienThi}&trangThai=${trangThai}`

  if (keyword) {
    url += `&tuKhoa=${encodeURIComponent(keyword)}`
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
