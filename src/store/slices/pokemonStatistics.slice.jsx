import { createSlice } from "@reduxjs/toolkit"

export const pokemonStatistics = createSlice({
    name: 'pokemonStatistics',
    initialState: '',
    reducers:{
        pokemonDescriptionStatistics: (state, action) => {
          return action.payload
        }
    }
})

export const { pokemonDescriptionStatistics } = pokemonStatistics.actions
export default pokemonStatistics.reducer
