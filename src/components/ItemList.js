import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';

import Sidebar from './Sidebar';
import Content from './Content';

const ItemList = () => {
    const data = useSelector(({resources, actions}) => ({resources, actions}));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className="ItemList">
            <Sidebar 
                dispatch={dispatch} 
                resources={data.resources} 
            />
            <Content
                resources={data.resources} 
                actions={data.actions}
            />
        </div>
    )
}

export default React.memo(ItemList);