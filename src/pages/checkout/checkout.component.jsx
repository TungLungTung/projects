import React from 'react';
import './checkout.styles.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => {
                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }

            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <StripeCheckoutButton price={total} />
            <div>4242 4242 4242 4242 - 01/20 - 123</div>

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);