import {Sneaker} from "@/store/sneaker/interfaces.ts";

export interface CartSneaker {
	size: string
	color: string
	quantity: number
	title: Sneaker['title']
	price: Sneaker['price']
	image: Sneaker['image']
	_id: string
}


export interface AddCartSneaker {
	productId: Sneaker['_id']
	size: string
	color: string
	quantity: number
}

export interface UpdateCartSneaker {
	cartProductId: Sneaker['_id']
	quantity: number
}

export interface CartRequest {
	cartProducts: CartSneaker[]
	totalPrice: number
	totalQuantity: number
}