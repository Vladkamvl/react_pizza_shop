import React from 'react';
import {Categories, SortPopup, PizzaItem} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoryNames = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
];

const sortItems = [
    {
        name: 'популярности',
        type: 'popular',
    },
    {
        name: 'цене',
        type: 'price'
    },
    {
        name: 'алфавиту',
        type: 'alphabet',
    },
];

export default function Home(){
    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectFilterCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        items={categoryNames}
                        onClickItem={onSelectFilterCategory}
                    />

                    <SortPopup items={sortItems}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items &&
                        items.map(item => {
                            return (<PizzaItem
                                    key={item.id}
                                    {...item}
                            />);
                        })
                    }

                </div>
            </div>
        </div>
    );
}