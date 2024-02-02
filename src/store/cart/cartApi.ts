import {appApi} from "@/store/appApi.ts";
import {BaseApiResponse, BaseFilter} from "@/types/types.ts";
import {AddCartSneaker, CartRequest, UpdateCartSneaker} from "@/store/cart/interfaces.ts";


export const cartApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getCartProducts: builder.query<BaseApiResponse<CartRequest>, Partial<BaseFilter>>({
			query: filters => ({
				url: '/cart',
				params: {...filters},
			}),
			providesTags: ["cart"]
		}),

		addCartProduct: builder.mutation<null, AddCartSneaker>({
			query: body => ({
				url: '/cart',
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body
			}),
			invalidatesTags: ['cart']
		}),

		updateCartProduct: builder.mutation<null, UpdateCartSneaker>({
			query: body => ({
				url: '/cart',
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'PUT',
				body
			}),
			invalidatesTags: ['cart']
		}),

		deleteCartProduct: builder.mutation<null, string>({
			query: id => ({
				url: `/cart/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['cart']
		})

	}),
})


export const {useGetCartProductsQuery, useAddCartProductMutation, useUpdateCartProductMutation, useDeleteCartProductMutation}  = cartApi