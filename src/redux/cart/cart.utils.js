export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return (
                cartItem.id === cartItemToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )

        })
    }

    // Mac dinh se tra ve cai nay, neu co hay khong co cung vay.
    // cartItemToAdd la cai moi
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}