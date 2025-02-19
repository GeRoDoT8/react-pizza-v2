import React from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/Skeleton/Skeleton";
const Home = ({ searchValue }) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: "популярности",
        sortProperty: "rating",
    });
    React.useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.sortProperty.replace("-", "");
        const order = sortType.sortProperty.includes("-") ? "ask" : "desc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";

        fetch(
            `https://6798ea88be2191d708b14650.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
                window.scrollTo(0, 0);
            });
    }, [categoryId, sortType]);
    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        </div>
    );
};

export default Home;
