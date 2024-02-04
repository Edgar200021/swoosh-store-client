import {appApi} from "@/store/appApi.ts";
import {CreateReviewRequest, GetAllReviewsRequest, Review} from "@/store/review/interfaces.ts";
import {BaseApiResponse} from "@/types/types.ts";


export const reviewApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getAllReviews: builder.query< BaseApiResponse<Review[]>, GetAllReviewsRequest>({
			query: ({productId, filter}) => ({
				url: `/review/${productId}`,
				params: {...filter}
			}),
			providesTags: ['review']
		}),

		createReview: builder.mutation<Review, CreateReviewRequest>({
			query: ({productId,data}) => ({
				url: `/review/${productId}`,
				body: data,
				method: "POST"
			}),
			invalidatesTags: ['review']
		})
	})
})

export const {useGetAllReviewsQuery, useCreateReviewMutation} = reviewApi