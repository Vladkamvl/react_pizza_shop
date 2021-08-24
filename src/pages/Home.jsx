import React from 'react';
import {Categories, SortPopup, PizzaItem, LoadingPizzaItem} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchFilteredByCategoryPizzas, fetchPizzas} from "../redux/actions/pizzas";

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

    const {items, isLoaded} = useSelector(({pizzas}) => {
        return {
            items: pizzas.items,
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
    }, [sortBy, category]);

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
                        items.map(item => {
                            return (<PizzaItem
                                key={item.id}
                                {...item}
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