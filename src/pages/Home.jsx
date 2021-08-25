import React from 'react';
import {Categories, SortPopup, PizzaItem, LoadingPizzaItem} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
];

const sortItems = [
    {
        name: 'популярности',
        type: 'rating',
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

    const {pizzas, isLoaded} = useSelector(({pizzas}) => {
        return {
            pizzas: pizzas.items,
            isLoaded: pizzas.isLoaded,
        };
    });
    const {category, sortBy} = useSelector(({filters}) => {
        return {
            category: filters.category,
            sortBy: filters.sortBy,
        };
    })

    const onSelectFilterCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);

    const onClickSortType = React.useCallback((sortType) => {
        dispatch(setSortBy(sortType));
    }, [dispatch]);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [dispatch, sortBy, category]);

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        categories={categoryNames}
                        onClickCategory={onSelectFilterCategory}
                    />

                    <SortPopup activeSortType={sortBy} sortItems={sortItems} onClickSortType={onClickSortType}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded ?
                        pizzas.map(pizza => {
                            return (<PizzaItem
                                key={pizza.id}
                                {...pizza}
                            />);
                        })
                        : Array(12)
                            .fill(0)
                            .map((_, index) => <LoadingPizzaItem key={index}/>)
                    }

                </div>
            </div>
        </div>
    );
}