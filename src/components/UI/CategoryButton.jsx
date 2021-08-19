import React from 'react';
import classNames from "classnames";

function CategoryButton({className, onClick, children}){

    return (
        <li
            className={classNames(className)}
            onClick={onClick}
        >
            {children}
        </li>
    );
}

export default CategoryButton;