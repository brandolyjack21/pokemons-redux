import { createSlice } from "@reduxjs/toolkit";

export const userName = createSlice({
    name: 'userName',
    initialState: 'patito',
    reducers:{
        renameUser: () => {

        }
    }


})

export const { renameUser } = userName.actions
export default userName.reducer