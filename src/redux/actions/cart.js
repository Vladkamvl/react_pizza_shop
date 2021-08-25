export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload: payload,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const minusFromCart = (payload) => ({
    type: 'MINUS_FROM_CART',
    payload: payload,
});

export const removeFromCart = (payload) => ({
    type: 'REMOVE_FROM_CART',
    payload: payload,
})