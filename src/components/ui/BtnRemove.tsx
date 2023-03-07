import React from 'react';
import { addToCart, removeFromCard } from '../../features/card/userCardSlice';
import { useAppDispatch } from '../../features/store';
import { IProduct } from '../../models/product';

function BtnRemove(props: { product: IProduct}) {
    
    const dispatch = useAppDispatch();
    return (
        <div onClick={() => dispatch(removeFromCard(props.product))} className="button button--outline button--remove">
            <span>Удалить</span>
        </div>
    );
}

export default BtnRemove;