import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { Noun } from '@utils/getGraph'

export const nounApi = createApi({
  reducerPath: 'nounApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Noun'],
  endpoints: (builder) => ({
    getNoun: builder.query<Noun<string, any>, string>({
      query: (noun) => `/${noun}`,
    }),
    search: builder.query<any, any>({
      query: ({ noun, q }: any) => {
        console.log('q', noun, q)
        return `/${noun}?query=${q}`
      },
    }),
  }),
})
