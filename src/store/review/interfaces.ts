import {Sneaker} from "@/store/sneaker/interfaces.ts";
import {BaseFilter} from "@/types/types.ts";


export interface Review {
	_id: string
	text: string
	rating: number
	images?: string[]
	user: { name?: string, id: string }
	createdAt: string
}

export interface GetAllReviewsRequest {
	productId: Sneaker['_id'],
	filter?: Partial<BaseFilter>
}

export interface CreateReviewRequest {
	productId: Sneaker['_id'],
	data: FormData
}