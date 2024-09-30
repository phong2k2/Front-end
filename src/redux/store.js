import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/cuonterSlide'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})