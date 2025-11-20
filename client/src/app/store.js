import {configureStore} from '@reduxjs/toolkit'
import listingReducer from './feature/listingSlice.js'

export const store = configureStore({
 reducer: {
     listing: listingReducer
 },
})