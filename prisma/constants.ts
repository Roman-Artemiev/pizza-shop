export const categories = [
  { name: "Pizzas" },
  { name: "Breakfast" },
  { name: "Snacks" },
  { name: "Cocktails" },
  { name: "Drinks" },
];

export const _ingredients = [
  {
    name: "Cheese side",
    price: 1,
    imageUrl: "/assets/images/ingredients/cheese-side.png",
  },
  {
    name: "Creamy mozzarella",
    price: 2,
    imageUrl: "/assets/images/ingredients/creamy-mozzarella.png",
  },
  {
    name: "Cheddar and Parmesan",
    price: 79,
    imageUrl: "/assets/images/ingredients/cheddar-and-parmesan.png",
  },
  {
    name: "Hot jalapeno pepper",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/hot-jalapeno-pepper.png",
  },
  {
    name: "Tender chicken",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/tender-chicken.png",
  },
  {
    name: "Champignons",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/champignons.png",
  },
  {
    name: "Bacon",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/bacon.png",
  },
  {
    name: "Ham",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/ham.png",
  },
  {
    name: "Spicy pepperoni",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/spicy-pepperoni.png",
  },
  {
    name: "Spicy chorizo",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/spicy-chorizo.png",
  },
  {
    name: "Pickled cucumbers",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/pickled-cucumbers.png",
  },
  {
    name: "Fresh tomatoes",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/fresh-tomatoes.png",
  },
  {
    name: "Red onion",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/red-onion.png",
  },
  {
    name: "Juicy pineapples",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/juicy-pineapples.png",
  },
  {
    name: "Italian herbs",
    price: 39,
    imageUrl:
      "/assets/images/ingredients/italian-herbs.png",
  },
  {
    name: "Sweet pepper",
    price: 59,
    imageUrl:
      "/assets/images/ingredients/sweet-pepper.png",
  },
  {
    name: "Cheese cubes",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/cheese-cubes.png",
  },
  {
    name: "Meatballs",
    price: 79,
    imageUrl:
      "/assets/images/ingredients/meatballs.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Danwich ham and cheese",
    imageUrl:
      "/assets/images/products/danwich-ham-and-cheese.png",
    categoryId: 2,
  },
  {
    name: "Danwich Chorizo ​BBQ",
    imageUrl:
      "/assets/images/products/danwich-chorizo-bbq.png",
    categoryId: 3,
  },
  {
    name: "Pasta Carbonara",
    imageUrl:
      "/assets/images/products/pasta-carbonara.png",
    categoryId: 3,
  },
  {
    name: "Meat Pasta",
    imageUrl:
      "/assets/images/products/meat-pasta.png",
    categoryId: 3,
  },
  {
    name: "Pesto Pasta",
    imageUrl:
      "/assets/images/products/pesto-pasta.png",
    categoryId: 3,
  },
  {
    name: "Super Meat Dodster",
    imageUrl:
      "/assets/images/products/super-meat-dodster.png",
    categoryId: 3,
  },
  {
    name: "Dodster with ham",
    imageUrl:
      "/assets/images/products/dodster-with-ham.png",
    categoryId: 3,
  },
  {
    name: "Chicken nuggets",
    imageUrl:
      "/assets/images/products/chicken-nuggets.png",
    categoryId: 3,
  },
  {
    name: "Strawberry milkshake",
    imageUrl:
      "/assets/images/products/strawberry-milkshake.png",
    categoryId: 4,
  },
  {
    name: "Chocolate milkshake",
    imageUrl:
      "/assets/images/products/chocolate-milkshake.png",
    categoryId: 4,
  },
  {
    name: "Classic milkshake",
    imageUrl:
      "/assets/images/products/classic-milkshake.png",
    categoryId: 4,
  },
  {
    name: "Oreo milkshake",
    imageUrl:
      "/assets/images/products/oreo-milkshake.png",
    categoryId: 4,
  },
  {
    name: "Coffee Caramel Cappuccino",
    imageUrl:
      "/assets/images/products/coffee-caramel-cappuccino.png",
    categoryId: 5,
  },
  {
    name: "Coffee Coconut Latte",
    imageUrl:
      "/assets/images/products/coffee-coconut-latte.png",
    categoryId: 5,
  },
  {
    name: "Coffee Hazelnut latte",
    imageUrl:
      "/assets/images/products/coffee-hazelnut-latte.png",
    categoryId: 5,
  },
  {
    name: "Cappuccino",
    imageUrl:
      "/assets/images/products/cappuccino.png",
    categoryId: 5,
  },
  {
    name: "Latte",
    imageUrl:
      "/assets/images/products/latte.png",
    categoryId: 5,
  },
];

export function getAll() {
  throw new Error("Function not implemented.");
}
