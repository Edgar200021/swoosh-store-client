import { z } from 'zod'
import validator from 'validator'

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Минимальная длина пароль 8 символов')
      .refine(validator.isStrongPassword, 'Придумайте более сложный пароль'),
    passwordConfirm: z.string(),
  })
  .refine(obj => obj.password === obj.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
  })

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>
