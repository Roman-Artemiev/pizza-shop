import React from "react";
import { Input, Textarea } from "../../ui";
import { WhiteBlock } from "..";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
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
  );
};
