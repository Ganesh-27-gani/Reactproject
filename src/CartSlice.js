import { createSlice } from "@reduxjs/toolkit";

const createslice = createSlice({
     name:"Cart",
     initialState:[],
     reducers:{
        add(state, action){
         state.push(action.payload)
        }
     }
})