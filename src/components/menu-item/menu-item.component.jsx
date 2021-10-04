import React from 'react';

import {withRouter} from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({title,size,imageUrl,linkUrl,history,match}) => {
    return (
        // <div className={`${props.size} menu-item`} onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style= {{
            backgroundImage: `url(${imageUrl})`
            }} ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);