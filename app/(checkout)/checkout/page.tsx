import {
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Placing an order"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">Cart content</WhiteBlock>

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
          <WhiteBlock className={cn("p-6 sticky top-4")}>
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total:</span>
              <span className="text-[34px] font-extrabold">5000 $</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package className="mr-2 text-gray-400" size={18} />
                  Cost of products:
                </div>
              }
              value={300}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent className="mr-2 text-gray-400" size={18} />
                  Taxes:
                </div>
              }
              value={50}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck className="mr-2 text-gray-400" size={18} />
                  Delivery:
                </div>
              }
              value={10}
            />

            <Button
              type="submit"
              // disabled={!totalAmount || submitting}
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Proceed to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
