import * as z from 'zod'

export const phuongThucThanhToanSchema = z.object({
  maPhuongThucThanhToan: z
    .string()
    .min(4, 'Mã phương thức thanh toán phải ít nhất 4 ký tự')
    .max(50, 'Mã phương thức thanh toán không vượt quá 50 ký tự')
    .optional()
    .or(z.literal('')),
  tenPhuongThucThanhToan: z
    .string()
    .min(1, 'Tên phương thức thanh toán bắt buộc')
    .max(255, 'Tên phương thức thanh toán không vượt quá 255 ký tự'),
  trangThai: z.boolean().optional()
})

export type phuongThucThanhToanFormData = z.infer<typeof phuongThucThanhToanSchema>
