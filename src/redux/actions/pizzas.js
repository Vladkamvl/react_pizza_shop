import axios from "axios";

export const fetchPizzas = () => dispatch => {
    const getPizzasUrl = 'http://localhost:3001/pizzas';
    dispatch(setLoaded(false));
    axios.get(getPizzasUrl).then(({data}) => {
        dispatch(setPizzas(data));
        dispatch(setLoaded(true));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: payload,
});
