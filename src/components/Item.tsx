import React from 'react';
import { IProduct } from '../models/product';

import BtnAdd from './ui/BtnAdd';
import BtnRemove from './ui/BtnRemove';

function Item(props: { product: IProduct, productsInCard: Array<Number> }) {
    return(
        <div className="pizza-block">
            <a href={"/product/"+props.product.id}>
                <img
                    className="pizza-block__image"
                    src={props.product.thumbnail}
                    alt={props.product.title}
                />
                <h4 className="pizza-block__title">{props.product.title}</h4>
            </a>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{props.product.price} руб.</div>
                {(!props.productsInCard.includes(props.product.id) ? <BtnAdd product={props.product} /> : <BtnRemove product={props.product}/>)}
            </div>
        </div>
    );
}

export default Item;