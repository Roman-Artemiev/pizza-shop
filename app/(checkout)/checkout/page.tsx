"use client";

import {
  CheckoutItem,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks";
import { getCartItemDetails } from "@/shared/lib";


export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type == "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };


  return (
    <Container className="mt-10">
      <Title
        text="Placing an order"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={0}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Personal information">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Surname"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input
                name="phone"
                className="text-base"
                placeholder="Phone number"
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Delivery address">
            <div className="flex flex-col gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Comments on the order"
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
