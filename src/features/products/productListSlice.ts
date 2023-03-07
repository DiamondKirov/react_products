import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetch from "../../api/fetchData";
import { IProduct } from "../../models/product";

export interface IProductList {
    products: IProduct[],
    pageCount: number,
    limit: number,
    total: number,
    curPage: number
}

const initialState: IProductList = {
    products: [],
    pageCount: 0,
    limit: 16,
    total: 0,
    curPage: 1
}

const productList = createSlice({
    name: "productList",
    initialState: initialState,
    reducers: {
        setList: (state, actions: PayloadAction<IProductList>) => {
            state.products = actions.payload.products;
            if (state.total == 0){
                state.total = actions.payload.total;
                state.pageCount = Math.ceil(actions.payload.total / actions.payload.limit);
            }
        },
        setCurPage: (state, actions: PayloadAction<number>) => {
            state.curPage = actions.payload;
        }
    }
})

export const {setList, setCurPage} = productList.actions;
export default productList.reducer;

export const fetchList = (page: number, limit: number) => async (dispatch: any) => {
    const productList = await fetch.fetchData(page, limit);
    dispatch(setList(productList));
}
