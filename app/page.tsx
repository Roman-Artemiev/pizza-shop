import { Container, Filters, ProductGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Items list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList title='Pizzas' categoryId={1} items={[
                {
                  id: 1,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
              ]} />

              <ProductGroupList title='Combo' categoryId={2} items={[
                {
                  id: 1,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5,
                  name: 'Margherita',
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  price: 550,
                  items: [{price: 550}]
                },
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
