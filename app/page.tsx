import { Container, Filters, ProductGroupList, Title, TopBar } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      },
    }
  });

  console.log(categories);


  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Items list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                category.products.length > 0 && (
                  <ProductGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products} />
                )
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
