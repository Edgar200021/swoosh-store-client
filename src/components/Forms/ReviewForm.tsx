import {cn} from "@/helpers/cn.ts";
import {Stars} from "@/components/Stars/Stars.tsx";
import {FormEvent, useState} from "react";
import {FileUploader} from "@/components/FileUploader/FileUploader.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {Sneaker} from "@/store/sneaker/interfaces.ts";
import {useCreateReviewMutation} from "@/store/review/reviewApi.ts";
import {validateError} from "@/helpers/validateError.ts";
import toast from "react-hot-toast";

interface Props {
	className?: string
	sneakerId: Sneaker['_id']
	closeModal?: () => void
}


export const ReviewForm = ({className, sneakerId, closeModal}: Props) => {
	const [rating, setRating] = useState(0)
	const [createReview, {isLoading}] = useCreateReviewMutation()

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const files: File[] = Array.from(form.image.files)

		if (files.length && files.every(f => !f.name.startsWith('image') || f.size > 1024 * 1024)) return
		if (!rating) return

		const formData = new FormData()
			formData.append('text', form.text.value)
			formData.append('rating', String(rating))

		if (files.length) {
			for (const file of files) {
				formData.append('images', file)
			}
		}

		try {
			await createReview({productId: sneakerId, data: formData}).unwrap()
			closeModal?.()
			toast.success('Отзыв успешно сохранен')
		} catch(e) {
			validateError(e)
		}
	}


	return <form onSubmit={onSubmit} className={cn('max-w-[625px] w-full', className)}>
		<h1 className='text-[35px] text-[#2c2f30] text-center mb-6 tablet:text-[22px] mini-phone:max-w-[200px] mini-phone:mx-auto tablet:mb-6 phone:5 '>Оставить отзыв к товару</h1>
		<fieldset disabled={isLoading}>
		<div className='flex items-center justify-center gap-x-2 mb-5 tablet:mb-4'>
			<span >Ваша оценка</span>
			<Stars onRating={setRating} initialRating={rating} fill='#d3d3d3'/>
		</div>
		<div className='mb-5 tablet:mb-5'>
			<span className="block text-[15px] mb-1">Текст отзыва</span>
			<textarea  name='text'  className='w-full border-[1px] p-5 border-[#d6d6d6] resize-none' minLength={20} maxLength={400} required placeholder='Текст'></textarea>
		</div>
		<FileUploader  name='image' accept='image/*'  multiple className='mb-5 ' />
		<Button>Оставить отзыв</Button>
		</fieldset>
	</form>
}