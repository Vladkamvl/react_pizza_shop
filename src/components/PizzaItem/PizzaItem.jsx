import React from 'react';
import PizzaItemButton from "../UI/PizzaItemButton";
import * as PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/actions/cart";

export default function PizzaItem({id, name, sizes, price, imageUrl, types}){
    const dispatch = useDispatch();

    const {count} = useSelector(({cart}) => {
        let count = 0;
        cart.items.filter( item => item.id === id ).forEach(item => count += item.count);
        return {
            count: count,
        }
    });

    const typeNames = [
        'тонкое',
        'традиционное'
    ];

    const [activeSize, setActiveSize] = React.useState(sizes[0]);
    const [activeType, setActiveType] = React.useState(types[0]);

    const onSelectSize = (size) => {
        setActiveSize(size);
    }
    const onSelectType = (index) => {
        setActiveType(index);
    }

    const addPizzaToCart = React.useCallback(()=> {
            const payload = {
                id: id,
                price: price,
                size: activeSize,
                type: activeType,
                name: name,
                imageUrl: imageUrl,
            };
            dispatch(addToCart(payload));
        }, [dispatch, price, activeSize, activeType]);

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        typeNames.map((type, index) => {
                            return (
                                <PizzaItemButton
                                    key={type}
                                    isActive={activeType === index}
                                    isDisabled={!types.includes(index) && activeType !== index}
                                    onClick={() => {
                                        onSelectType(index)
                                    }}
                                >
                                    {type}
                                </PizzaItemButton>
                            );
                        })
                    }
                </ul>
                <ul>
                    {
                        sizes.map((size) => {
                            return (
                                <PizzaItemButton
                                    key={size}
                                    title={size}
                                    isActive={activeSize === size}
                                    onClick={() => {
                                        onSelectSize(size)
                                    }}
                                >
                                    {size} см.
                                </PizzaItemButton>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add"
                     onClick={addPizzaToCart}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{count}</i>
                </div>
            </div>
        </div>
    );
}

PizzaItem.propTypes = {
    name: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
};
PizzaItem.defaultProps = {
    name: '-',
    size: [],
    types: [],
    price: 0,
}