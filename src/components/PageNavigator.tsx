import React, { useEffect } from 'react';
import BtnPage from './ui/BtnPage';

function PageNavigator(props: {pages: number, curPage: number}) {

    const pagesList = [];
    for(let i = 1; i <= props.pages; i++){
        pagesList.push(<BtnPage active={i == props.curPage} page={i}></BtnPage>)
    }

    return (
        <div className='categories'>
            <ul>
                {pagesList}
            </ul>
            <br /><br /><br />
        </div>
    );
}

export default PageNavigator;