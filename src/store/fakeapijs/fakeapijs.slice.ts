import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface FakeApiState{
    posts: any
}

const initialState: FakeApiState = {
    posts: []
}
export const fakeApiSlice = createSlice({
    name: 'fakeapi',
    initialState,
    reducers: {
        
    }   
})

export const fakeapiActions = fakeApiSlice.actions
export const fakeApiReducer = fakeApiSlice.reducer