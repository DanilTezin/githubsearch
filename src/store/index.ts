import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { githubReducer } from "./github/github.slice";
import { fakeapiApi } from './fakeapijs/fakeapijs.api';
import { fakeApiReducer } from './fakeapijs/fakeapijs.slice';



export const store = configureStore({
    reducer:{
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer ,

        [fakeapiApi.reducerPath]: fakeapiApi.reducer,
        fakeapi: fakeApiReducer

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware, fakeapiApi.middleware)

})

export type RootStates = ReturnType<typeof store.getState>