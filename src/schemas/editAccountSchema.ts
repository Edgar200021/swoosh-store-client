import {z} from "zod";
import validator from "validator";


export const editAccountSchema = z.object({
    email: z.string().optional().refine(val => val && validator.isEmail(val), 'Не корректный эл.адрес'),
    name: z.coerce.string().optional()})

export type EditAccountSchema = z.infer<typeof editAccountSchema>