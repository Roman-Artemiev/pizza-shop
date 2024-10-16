import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemTotalAmount = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

  return (ingredientsPrice + item.productItem.price) * item.quantity;
}