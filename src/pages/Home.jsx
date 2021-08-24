import React from 'react';
import {Categories, SortPopup, PizzaItem} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingPizzaItem from "../components/PizzaItem/LoadingPizzaItem";

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

    const {items, isLoaded} = useSelector(({pizzas}) => {
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
        }
    });

    const onSelectFilterCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);

    React.useEffect(() => {
        setTimeout(()=>{
            dispatch(fetchPizzas());
        }, 3000);

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