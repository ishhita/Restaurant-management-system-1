import burgerImg from '../assets/dishesImg/burger.png';
import pizzaImg from '../assets/dishesImg/pizza.png';
import {DishInterface, priceCalculation, timeCalculation} from "../models/system/dish.model";
import * as Ingredients from '../models/system/ingredients.model';

const menu: DishInterface[] = [
    {
        title: 'Burger',
        ingredients: [Ingredients.Tomato, Ingredients.Meat, Ingredients.Cheese],
        duration: timeCalculation([Ingredients.Tomato, Ingredients.Meat, Ingredients.Cheese]),
        image: burgerImg,
        id: '',
        price: priceCalculation( [Ingredients.Tomato, Ingredients.Meat, Ingredients.Cheese]),
        orderId: '',
        kitchenEntryTime: 0
    },

    {
        title: 'Pizza',
        ingredients: [Ingredients.Cheese, Ingredients.Tomato],
        duration: timeCalculation([Ingredients.Cheese, Ingredients.Tomato]),
        image: pizzaImg,
        id: '',
        price: priceCalculation([Ingredients.Cheese, Ingredients.Tomato]),
        orderId: '',
        kitchenEntryTime: 0
    }
];


export default menu;