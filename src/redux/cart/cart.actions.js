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