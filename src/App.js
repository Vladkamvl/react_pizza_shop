import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App(props) {
  return (
      <div className="wrapper">
        <Header/>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/cart'} component={Cart}/>
      </div>
  );
}

export default App;
