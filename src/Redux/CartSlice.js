import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name:"Cart",
     initialState:[],
     reducers:{
        add(state, action){
         const  x = state.find(ele => ele.id === action.payload.id);
         if (x){
            x.quantity += 1;
            
         }
         else{
          
          state.push({...action.payload,quantity:1})         
        }
        console.log(action.payload);
        
        // if(y){
        //   if(y.quantity > 1){
        //     y.quantity -= 1;
        //   }else{
        //     state.splice(state.indexOf(y), 1);
        //   } 
        // }
       
        },
        remove(state, action){
         console.log(action);
         return state.filter((ele)=> ele.id !== action.payload)
         
        },
        minus(state, action){
         const  y = state.findIndex((ele) => ele.id === action.payload.id);
         if(y !== -1){
            if(state[y].quantity>1){
             state[y].quantity -= 1;
            }else{
             state.splice(y, 1);
            }
           
         }
        }
      }
})
export const {add, remove,minus} = cartSlice.actions
export default cartSlice.reducer