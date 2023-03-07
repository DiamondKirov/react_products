import React, { useEffect } from 'react';
import Item from './Item';
import PageNavigator from './PageNavigator';
import { fetchList } from '../features/products/productListSlice';
import { useAppDispatch, useAppSelector } from '../features/store';
import { IProduct } from '../models/product';
import Title from './ui/Title';

function ProductsList() {
  const productsList = useAppSelector((state) => state.productsList);
  const productsInCart = useAppSelector((state) => state.cartList.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchList(productsList.curPage, productsList.limit));
  }, [productsList.curPage]);

  return (
    
    <div className='container'>
        <Title title="Магазин"/>
       <div className="content__items">
         {productsList.products?.map((item: IProduct) => (
            <Item key={item.id} productsInCard={productsInCart} product={item}/>
         ))}
      </div>
      <PageNavigator pages={productsList.pageCount} curPage={productsList.curPage}/>
    </div>
  );
}

export default ProductsList;
