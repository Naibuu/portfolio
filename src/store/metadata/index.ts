import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './consts'

export type MetadataState = {
    language: 'en' | 'gr'
}

export const metadataSlice = createSlice({
    name: 'metadata',
    initialState: initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        },
    },
})

export const { setLanguage } = metadataSlice.actions

export default metadataSlice.reducer
