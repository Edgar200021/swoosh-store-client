export interface BaseFilter {
  sort: string
  fields: string
  page: number
  limit: number
}

export interface BaseApiResponse<T> {
  quantity: number
  data: T
}
