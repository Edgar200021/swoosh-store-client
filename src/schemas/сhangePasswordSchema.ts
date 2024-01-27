import {z} from 'zod'
import validator from 'validator'

export const changePasswordSchema = z
    .object({
      oldPassword: z
          .string(),
      password: z.string()
          .min(8, 'Минимальная длина пароль 8 символов')
          .refine(validator.isStrongPassword, 'Придумайте более сложный пароль'),
      passwordConfirm: z.string(),
    })
    .refine(obj => obj.password === obj.passwordConfirm, {
      path: ['passwordConfirm'],
      message: 'Пароли не совпадают',
    })

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>
