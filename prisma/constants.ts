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
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Creamy mozzarella",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Cheddar and Parmesan",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Hot jalapeno pepper",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Tender chicken",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Champignons",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Bacon",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ham",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Spicy pepperoni",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Spicy chorizo",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Pickled cucumbers",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Fresh tomatoes",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Red onion",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Juicy pineapples",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Italian herbs",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Sweet pepper",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Cheese cubes",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Meatballs",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));


export const products = [
  {
    name: 'Combo of Lady Bug and Super Cat',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
    categoryId: 2
  },
  {
    name: 'Danwich Chorizo ​​BBQ',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF041FE1F94C903576DCFD01E.avif',
    categoryId: 3
  },
  {
    name: 'Pasta Carbonara',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797018746EF899D162D16FA99625.avif',
    categoryId: 3
  },
  {
    name: 'Meat Pasta',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797018D60B9B8D278F668BD4D3C7.avif',
    categoryId: 3
  },
  {
    name: 'Pesto Pasta',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797019062658A437457F8E1D5887.avif',
    categoryId: 3
  },
  {
    name: 'Super Meat Dodster',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797022F9AD72AC34E1B01DC6AEBA.avif',
    categoryId: 3
  },
  {
    name: 'Dodster with ham',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970259D888E98B6407EE6B994D9.avif',
    categoryId: 3
  },
  {
    name: 'Chicken nuggets',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF45EACC4D7EABC10E0A0E0C2C67A.avif',
    categoryId: 3
  },
  {
    name: 'Strawberry milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FB231A5BF82B0A99A1B12339C.avif',
    categoryId: 4
  },
  {
    name: 'Chocolate milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA24D1E919FA050D8BA21F8E9.avif',
    categoryId: 4
  },
  {
    name: 'Classic milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.avif',
    categoryId: 4
  },
  {
    name: 'Oreo milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.avif',
    categoryId: 4
  },
  {
    name: 'Coffee Caramel Cappuccino',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
    categoryId: 5
  },
  {
    name: 'Coffee Coconut Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
    categoryId: 5
  },
  {
    name: 'Coffee Hazelnut latte',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B12220AB911FF4FA42EF585D.avif',
    categoryId: 5
  },
  {
    name: 'Cappuccino',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AE1813B4AB42D8927D061035.avif',
    categoryId: 5
  },
  {
    name: 'Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 5
  },
]

export function getAll() {
    throw new Error("Function not implemented.");
}
