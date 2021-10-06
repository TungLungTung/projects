import { createSelector } from 'reselect';

// Lay redux state cart
const selectCart = state => state.cart;

// Lay redux state user
// const selectUser = state => state.user;

// gia tri 1 la collection, 
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Pass ham dem so luong items qua
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity, 0)
);