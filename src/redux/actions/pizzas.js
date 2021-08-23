import axios from "axios";

export const fetchPizzas = () => dispatch => {
    const getPizzasUrl = 'http://localhost:3001/pizzas';
    axios.get(getPizzasUrl).then(({data}) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});
