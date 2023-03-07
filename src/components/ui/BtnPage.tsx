import React, { ReactNode } from 'react';
import { setCurPage } from '../../features/products/productListSlice';
import { useAppDispatch } from '../../features/store';

function BtnPage(props: {page: number, active: Boolean}) {
    const dispatch = useAppDispatch();
    return (
        <li onClick={() => dispatch(setCurPage(props.page))} className={(props.active) ? "active" : ""}>
            {props.page}
        </li>
    );
}

export default BtnPage;