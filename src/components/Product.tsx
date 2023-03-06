import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import fetch from "../api/fetchData";
import { fetchProduct } from '../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../features/store';
import BtnAdd from './ui/BtnAdd';
import BtnRemove from './ui/BtnRemove';
import Title from './ui/Title';

function Product() {
    const { id } = useParams();
    const productDetail = useAppSelector((state) => state.product.product);
    const dispatch = useAppDispatch();
    const productsInCart = useAppSelector((state) => state.cartList.products);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, []);

    return(
        <div className='container'>
            <Title title={productDetail.title}/>
            <img src={productDetail.thumbnail} className="imgdetail" alt="" />
            <br />
            <p>{productDetail.description}</p>
            <br />
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{productDetail.price} руб.</div>
                {(!productsInCart.includes(productDetail.id) ? <BtnAdd product={productDetail} /> : <BtnRemove product={productDetail}/>)}
            </div>
            <br /><br />
        </div>
    )
}

export default Product;