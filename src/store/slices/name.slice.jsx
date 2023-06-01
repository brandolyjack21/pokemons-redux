import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: 'name',
    initialState: '',
    reducders:{
       rename: (state) =>{
          return state = 'jack'
       }
    }

})

export const { rename } = nameSlice.actions
export default nameSlice.reducer