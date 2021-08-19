import React from 'react';
import CategoryButton from "./UI/CategoryButton";
import classNames from "classnames";

const Categories = ({ items }) => {
    const [activeId, setActiveId] = React.useState(`${items[0]}_0`);

    const onSelectItem = (itemId) => {
        setActiveId(itemId);
    }

    const categoriesButtonsList= items.map((item, index)=> {
        let itemId = `${item}_${index}`
        return (<CategoryButton
            key={itemId}
            onClick={() => onSelectItem(itemId)}
            className={classNames({
                'active': activeId === itemId,
            })}
        >
            {item}
        </CategoryButton>);
    });
    return (
        <div className="categories">
            <ul>
                {categoriesButtonsList}
            </ul>
        </div>
    );
};

export default Categories;