import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter.slice'
import name from './slices/name.slice'

export default configureStore({
    reducer:{
        counter: counter,
        name: name
    }
})
    
