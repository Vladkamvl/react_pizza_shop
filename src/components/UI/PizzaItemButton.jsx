import React from 'react';
import classNames from "classnames";

export default function PizzaItemButton({children, isActive, onClick, isDisabled}){
    return (
        <li
            className={classNames({
                'active': isActive,
                'disabled': isDisabled,
            })}
            onClick={onClick}
        >
            {children}
        </li>
    );
}