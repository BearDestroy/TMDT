import * as z from 'zod'

export const danhMucSchema = z.object({
  maDanhMuc: z
    .string()
    .min(4, 'Mã chuyên môn phải ít nhất 4 ký tự')
    .max(50, 'Mã chuyên môn không vượt quá 50 ký tự')
    .optional()
    .or(z.literal('')),
  tenDanhMuc: z.string().min(1, 'Tên chuyên môn bắt buộc').max(255, 'Tên chuyên môn không vượt quá 255 ký tự'),
  trangThai: z.boolean().optional()
})

export type DanhMucFormData = z.infer<typeof danhMucSchema>
