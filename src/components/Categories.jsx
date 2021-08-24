import React from 'react';
import CategoryButton from "./UI/CategoryButton";
import classNames from "classnames";
import * as PropTypes from "prop-types";

const Categories = React.memo(({ activeCategory, categories, onClickCategory }) => {

    const categoriesButtonsList= categories.map((category, index)=> {
        return (<CategoryButton
            key={`${category}_${index}`}
            onClick={() => {
                onClickCategory(index)
            }}
            className={classNames({
                'active': activeCategory === index,
            })}
        >
            {category}
        </CategoryButton>);
    });
    return (
        <div className="categories">

            <ul>
                <CategoryButton
                    key={'0'}
                    onClick={() => {
                        onClickCategory(null)
                    }}
                    className={classNames({
                        'active': activeCategory === null,
                    })}
                >
                    Все
                </CategoryButton>
                {categoriesButtonsList}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}

export default Categories;