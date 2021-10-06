import React from 'react';
import {connect} from 'react-redux'

import { addItem, removeItem, ClearItemFromCart } from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss'


const CheckOutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt='item' src={imageUrl}  />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
                
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10006;</div>
        </div>            
    );
}
 
// Map function
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

// Mapt fuction


export default connect(null,mapDispatchToProps)(CheckOutItem);