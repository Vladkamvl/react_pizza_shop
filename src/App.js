import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const getPizzasUrl = 'http://localhost:3001/pizzas';
        axios.get(getPizzasUrl).then(({data}) => {
            dispatch(setPizzas(data));
        });
        console.log('get data');
    });

    return (
        <div className="wrapper">
            <Header/>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/cart'} component={Cart}/>
        </div>
    );
}

export default App;
