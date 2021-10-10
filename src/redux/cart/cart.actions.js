import CartActionTypes from './cart.types'

// Return object
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => {
    return ({
        type: CartActionTypes.ADD_ITEM,
        payload: item
    })
}

export const ClearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FORM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,

})