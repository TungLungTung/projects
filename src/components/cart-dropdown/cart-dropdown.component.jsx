import React from "react";

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-item">

            </div>
            <CustomButton value='GO TO CHECKOUT' />
        </div>
    );
}
 
export default CartDropdown;