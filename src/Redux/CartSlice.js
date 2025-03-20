import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name:"Cart",
     initialState:[],
     reducers:{
        add(state, action){
        state.push(action.payload)
        },
        remove(state, action){
         console.log(action);
         return state.filter((ele)=> ele.id !== action.payload)
        }
      }
})
export const {add, remove} = cartSlice.actions
export default cartSlice.reducer