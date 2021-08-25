const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            let items = state.items;

            let itemIndex = items.findIndex((item) => {
                return item.id === action.payload.id
                && item.size === action.payload.size
                && item.type === action.payload.type
            });
            if(itemIndex !== -1){
                items[itemIndex].count = items[itemIndex].count  + 1;
            }else{
                items.push({
                    id: action.payload.id,
                    count: 1,
                    size: action.payload.size,
                    type: action.payload.type,
                    imageUrl: action.payload.imageUrl,
                    name: action.payload.name,
                    price: action.payload.price,
                });
            }

            return {
                ...state,
                items: items,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.payload.price,
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
                totalCount: 0,
                totalPrice: 0,
            };
        default:
            return state;
    }
}

export default cart;