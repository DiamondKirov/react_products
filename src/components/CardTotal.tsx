import React, { useEffect } from 'react';
import { removeFromCard } from '../features/card/userCardSlice';
import { useAppDispatch, useAppSelector } from '../features/store';
import { IProduct } from '../models/product';


function CardTotal() {

    const cartList = useAppSelector((state) => state.cartList);
    const dispatch = useAppDispatch();

    return(
        <div className="cart__bottom">
            <div className="cart__bottom-details">
            <span> Всего пицц: <b>{cartList.count} шт.</b> </span>
            <span> Сумма заказа: <b>{cartList.price} ₽</b> </span>
            </div>
            <div className="cart__bottom-buttons">
            <a href="/" className="button button--outline button--add go-back-btn">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>

                <span>Вернуться назад</span>
            </a>
            <div className="button pay-btn">
                <span>Оплатить сейчас</span>
            </div>
            </div>
        </div>
    )
}

export default CardTotal;