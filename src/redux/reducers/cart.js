const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
}

const cart = (state = initialState, action) => {
    let items, itemIndex;
    switch (action.type){
        case 'ADD_TO_CART':
            items = state.items;

            itemIndex = items.findIndex((item) => {
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
        case 'MINUS_FROM_CART':
            items = state.items;
            itemIndex = items.findIndex((item) => {
                return item.id === action.payload.id
                    && item.size === action.payload.size
                    && item.type === action.payload.type
            });
            if(itemIndex !== -1){
                if(items[itemIndex].count > 1){
                    items[itemIndex].count -= 1;
                    return {
                        ...state,
                        items: items,
                        totalCount: state.totalCount - 1,
                        totalPrice: state.totalPrice - items[itemIndex].price,
                    };
                }else{
                    let removedItem = items.splice(itemIndex, 1);
                    return {
                        ...state,
                        items: items,
                        totalCount: state.totalCount - 1,
                        totalPrice: state.totalPrice - removedItem[0].price,
                    };
                }

            }
            return state;
        case 'REMOVE_FROM_CART':
            items = state.items;
            itemIndex = items.findIndex((item) => {
                return item.id === action.payload.id
                    && item.size === action.payload.size
                    && item.type === action.payload.type
            });
            if(itemIndex !== -1){
                let removedItem = items.splice(itemIndex, 1);
                return {
                    ...state,
                    items: items,
                    totalCount: state.totalCount - removedItem[0].count,
                    totalPrice: state.totalPrice - removedItem[0].price * removedItem[0].count,
                };
            }
            return state;
        default:
            return state;
    }
}

export default cart;