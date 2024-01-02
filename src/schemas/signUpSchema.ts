import { z } from 'zod'
import validator from 'validator'

export const signUpSchema = z
  .object({
    email: z.string().refine(validator.isEmail, 'Не корректный эл.адрес'),
    password: z
      .string()
      .min(8, 'Минимальная длина пароль 8 символов')
      .refine(validator.isStrongPassword, 'Придумайте более сложный пароль'),
    passwordConfirm: z.string(),
    policy: z.boolean(),
  })
  .refine(obj => obj.password === obj.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
  })

export type SignUpSchema = z.infer<typeof signUpSchema>
