import React from 'react';

import logoSvg from "../assets/img/pizza-logo.svg";
import Button from "./UI/Button";

function Header(){
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logoSvg} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Button totalPrice={555} totalCount={5}/>
                </div>
            </div>
        </div>
    );
}

export default Header;