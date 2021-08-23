import React from 'react';
import {Categories, SortPopup, PizzaItem} from "../components";
import {useSelector} from "react-redux";

export default function Home(){

    const { items } = useSelector(({pizzas}) => {
        return {
            items: pizzas.items,
        };
    });


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items={[
                            'Все',
                            'Мясные',
                            'Вегетарианская',
                            'Гриль',
                            'Острые',
                            'Закрытые',
                        ]}/>
                    <SortPopup items={[
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
                        ]}/>
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