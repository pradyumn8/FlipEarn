import {configureStore} from '@reduxjs/toolkit'
import listingReducer from './feature/listingSlice.js'
import chatReducer from './feature/chatSlice.js'

export const store = configureStore({
 reducer: {
     listing: listingReducer,
     chat: chatReducer
 },
})