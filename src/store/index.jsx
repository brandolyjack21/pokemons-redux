import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter.slice'
import name from './slices/name.slice'
import userName from './slices/userName.slice'
import pokemonStatistics from './slices/pokemonStatistics.slice'

export default configureStore({
    reducer:{
        counter: counter,
        name: name,
        userName:userName,
        pokemonStatistics: pokemonStatistics
    }
})
    
