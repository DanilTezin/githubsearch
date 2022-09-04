import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../models/models';


export const fakeapiApi = createApi({
    reducerPath: 'fakeapi/api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints: build=>({
        getFakePosts: build.query<IPost[], string>({
            query: (all: string)  =>({
                url: 'posts'
            })  
        })
    })
})


export const {useGetFakePostsQuery} = fakeapiApi