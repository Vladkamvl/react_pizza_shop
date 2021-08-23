import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {fetchPizzas} from "./redux/actions/pizzas";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas());
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
