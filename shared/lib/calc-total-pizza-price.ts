import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";


/**
 * A function for calculating the total price of a pizza
 * 
 * @param type - pizza's dough type
 * @param size - pizza size
 * @param items - list of pizza's variants
 * @param ingredients - list of ingredients
 * @param selectedIngredients - set of selected ingredients
 * @returns - total price of the pizza
 */


export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType == type && item.size == size)?.price ||
    0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
