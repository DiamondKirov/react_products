import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetch from "../../api/fetchData";
import { IProduct } from "../../models/product";

export interface productDetail {
    product: IProduct
}


const initialState:productDetail = {
    product: {
        id: 0,
        title: '',
        description: '',
        thumbnail: '',
        price: 0
    }
};

const productDetailt = createSlice({
    name: "productList",
    initialState: initialState,
    reducers: {
        setItem: (state, actions: PayloadAction<IProduct>) => {
            state.product = actions.payload;
        },
    }
})

export const {setItem} = productDetailt.actions;
export default productDetailt.reducer;

export const fetchProduct = (id: any) => async (dispatch: any) => {
    const productItem = await fetch.fetchProduct(id);
    dispatch(setItem(productItem));
}
