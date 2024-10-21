import React from "react";
import { Input } from "../../ui";
import { AdressInput, FormTextarea, WhiteBlock } from "..";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="flex flex-col gap-5">
        <Input name="firstName" className="text-base" placeholder="Enter address..." />

        <AdressInput />

        <FormTextarea
          name="comments"
          rows={5}
          className="text-base"
          placeholder="Comments on the order"
        />
      </div>
    </WhiteBlock>
  );
};
