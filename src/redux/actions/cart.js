export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload: payload,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});