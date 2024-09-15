import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Items list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductGroupList title='Pizzas' Items={[1, 2, 3, 4, 5]} />
              <ProductGroupList title='Combo' Items={[1, 2, 3, 4, 5]} /> */}
              Items list
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
