import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import axios from "axios";

function App(props) {
    const [pizzas, setPizzas] = React.useState([]);

    const getPizzasFromApi = async () => {
        try {
            const getPizzasUrl = 'http://localhost:3001/pizzas';
            const resp = await axios.get(getPizzasUrl);
            setPizzas(resp.data);
        }catch (e){
            console.log(e);
        }
    }

    React.useEffect(() => {
        const promise = getPizzasFromApi();
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <Route exact path={'/'} render={ ()=><Home items={pizzas}/> }/>
            <Route exact path={'/cart'} component={Cart}/>
        </div>
    );
}

export default App;
