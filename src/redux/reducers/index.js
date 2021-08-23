import {combineReducers} from "redux";
import pizzasReducers from "./pizzas";
import filtersReducers from "./filters";

const rootReducer = combineReducers({
    pizzas: pizzasReducers,
    filters: filtersReducers,
});

export default rootReducer;