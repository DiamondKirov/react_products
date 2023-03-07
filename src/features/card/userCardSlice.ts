import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { json } from "stream/consumers"
import { IProduct } from "../../models/product"

export interface ICardList {
    count: number,
    price: number,
    products: Array<number>
}

const initState: ICardList = {
    count: 0,
    price: 0,
    products: [],
}

const cartSlice = createSlice({
    name: 'card',
    initialState: initState,
    reducers: {
        initCard: (state) => {
            const cartInStorage = JSON.parse(localStorage.getItem("cart") || '[]');
            cartInStorage?.forEach(function(item: IProduct){
                state.count++;
                state.price+= item.price;
                state.products.push(item.id);
            })
        },
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const cartInStorage = JSON.parse(localStorage.getItem("cart") || '[]');
            state.count++;
            state.price+=action.payload.price;
            state.products.push(action.payload.id);
            localStorage.setItem('cart', JSON.stringify([...cartInStorage, action.payload]));
        },
        removeFromCard: (state, action: PayloadAction<IProduct>) => {
            const cartInStorage = JSON.parse(localStorage.getItem("cart") || '[]');
            state.count--;
            state.price-=action.payload.price;
            state.products = state.products.filter((item) => item != action.payload.id);
            localStorage.setItem('cart', JSON.stringify(cartInStorage.filter((item:IProduct) => item.id != action.payload.id)));
        },
        clearCart: (state) => {
            localStorage.setItem('cart', '[]');
            state.count = 0;
            state.price = 0;
            state.products = [];
        }
    }
});

export const {addToCart, removeFromCard, initCard, clearCart} = cartSlice.actions;
export default cartSlice.reducer;