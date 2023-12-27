import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'
import {  MoviesState } from '@/types/interfaces'

const initialState: MoviesState = {
  movies: [],
  movie: null,
  skip: 0
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setMovie: (state, action) => {
          state.movie = action.payload
        },
        setLimitOfSkip: (state, action) => {
          state.skip = action.payload
        }
    },
})

export const { setMovies, setMovie, setLimitOfSkip } = moviesSlice.actions

export const allMovies = (state: RootState) => state.movies.movies
export const oneMovie = (state: RootState) => state.movies.movie
export const skip = (state: RootState) => state.movies.skip

export default moviesSlice.reducer
