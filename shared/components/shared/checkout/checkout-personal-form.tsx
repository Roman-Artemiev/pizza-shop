import React from "react";
import { FormInput, WhiteBlock } from "..";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Personal information" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Name" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Surname"
        />
        <FormInput name="email" className="text-base" placeholder="E-Mail" />
        <FormInput
          name="phone"
          className="text-base"
          placeholder="Phone number"
        />
      </div>
    </WhiteBlock>
  );
};
