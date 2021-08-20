import React from 'react';

import logoSvg from "../assets/img/pizza-logo.svg";
import HeaderButton from "./UI/HeaderButton";
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to={"/"}><img width="38" src={logoSvg} alt="Pizza logo"/></Link>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <HeaderButton totalPrice={555} totalCount={5} outline/>
                </div>
            </div>
        </div>
    );
}

export default Header;