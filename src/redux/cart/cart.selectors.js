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

// Cart hidden
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// Pass ham dem so luong items qua
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity, 0)
);

// Ham tinh tong
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity * cartItems.price, 0)
);
