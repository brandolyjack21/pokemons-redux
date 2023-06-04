import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: 'name',
    initialState: 'brandoly',
    reducers:{
       rename: (state, action) => {
        console.log(action.payload, 'action.payload')
        return action.payload
       }
    }

})

export const { rename } = nameSlice.actions
export default nameSlice.reducer