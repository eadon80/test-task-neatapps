import React from 'react'
import { Nav } from 'react-bootstrap';
import { setActiveItem } from '../actions';
import { ReactSVG } from 'react-svg';
import activeIcon from './img/active.svg';
import arrowIcon from './img/arrow-right.svg';

export default function Sidebar({resources, dispatch}) {
    const handleClick = (id) => {
        dispatch(setActiveItem(id));
    }
    return (
        <div className="Sidebar">
            <h2>Items</h2>
            <Nav className="flex-column">
                {Object.values(resources.data)
                    .map(item => {
                        const isActive = resources.activeResourceID === item.id;
                        return <Nav.Item 
                            className={`${isActive && 'active'} Sidebar__item`}
                            onClick={() => handleClick(item.id)}
                            key={item.id}
                        >
                            <ReactSVG src={activeIcon} /> 
                            {item.name}
                            {isActive && <ReactSVG className="Sidebar__icon" src={arrowIcon} />} 
                        </Nav.Item>
                    })}
            </Nav>
        </div>
    )
}
