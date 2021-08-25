import {combineReducers} from "redux";
import pizzasReducers from "./pizzas";
import filtersReducers from "./filters";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    pizzas: pizzasReducers,
    filters: filtersReducers,
    cart: cartReducer,
});

export default rootReducer;