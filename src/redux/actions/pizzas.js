import axios from "axios";

export const fetchPizzas = (sortBy, category) => dispatch => {

    if(sortBy === 'alphabet'){
        sortBy = 'name';
    }

    let categoryFilter = '';
    if(category !== null){
        categoryFilter = `category=${category}&`;
    }

    const getPizzasUrl = `http://localhost:3001/pizzas?${categoryFilter}_sort=${sortBy}&_order=asc`;
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


