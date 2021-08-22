import React from 'react';
import classNames from "classnames";

export default function PizzaItemButton({title, isActive, onClick, isDisabled}){
    return (
        <li
            className={classNames({
                'active': isActive,
                'disabled': isDisabled,
            })}
            onClick={onClick}
        >
            {title}
        </li>
    );
}