import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./CartSlice";

const store = configureStore({
        reducer:{
            Cart: cartreducer
        }
    
})
export default store