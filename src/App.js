import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";

function App() {
    return (
        <div class="wrapper">
            <Header />
            <div class="content">
                <div class="container">
                    <div class="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 class="content__title">Все пиццы</h2>
                    <div class="content__items">
                        <PizzaBlock title="Мексиканская" price="500" />
                        <PizzaBlock title="Жгучий перчик" price="450" />
                        <PizzaBlock title="Аджара Гуджу" price="800" />
                        <PizzaBlock title="Мусаевская" price="1000" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
