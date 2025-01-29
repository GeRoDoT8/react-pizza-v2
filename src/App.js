import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";

function App() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch("https://6798ea88be2191d708b14650.mockapi.io/items")
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
            });
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {items.map((obj) => (
                            <PizzaBlock key={obj.id} {...obj} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
