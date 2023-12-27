
import { moviesSlice } from '@/features/movies/moviesSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
    movies:  moviesSlice.reducer
    },
})

export default store;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
