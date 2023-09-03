import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Osama'
    },
    {
        id: '2',
        name: 'Huzaifa'
    },
    {
        id: '3',
        name: 'Hanzala'
    },

]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}   
    
})

export const selectAllUsers = (state) => state.users


export default userSlice.reducer;
