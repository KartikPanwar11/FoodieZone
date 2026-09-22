//redux store to get cart functionality
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const foodStore = configureStore({
    reducer:{
        cart: cartReducer,
    }
});


export default foodStore;