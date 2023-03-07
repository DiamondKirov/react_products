import {configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsListSlice from "../features/products/productListSlice";
import cardSlice from "../features/card/userCardSlice";
import productSlice from '../features/products/productSlice';

const store  = configureStore({
    reducer: {
        productsList: productsListSlice,
        cartList: cardSlice,
        product: productSlice
    }
});


export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;