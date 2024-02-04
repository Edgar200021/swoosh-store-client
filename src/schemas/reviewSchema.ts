import {z} from "zod";

export const reviewSchema = z.object({
	text: z.string().min(20, 'Минимальная длина текста 20 символов').max(400, 'Максимальная длина текста 400 символов'),
	rating: z.number().min(1, 'Минимальный рейтинг 1').max(5, 'Максимальный рейтинг 2').int('Рейтинг должно быть целым числом'),
	images: z.array(z.instanceof(File)).optional()
})


export type ReviewSchema = z.infer<typeof reviewSchema>