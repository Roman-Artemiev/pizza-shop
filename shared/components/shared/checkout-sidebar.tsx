import React from "react";
import { CheckoutItemDetails } from "./checkout-item-details";
import { cn } from "@/shared/lib/utils";
import { Package, Percent, Truck, ArrowRight } from "lucide-react";
import { Button, Skeleton } from "../ui";
import { WhiteBlock } from "./white-block";

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

const VAT = 0.05;
const DELIVERY_PRICE = 25;

export const CheckoutSidebar: React.FC<Props> = ({
  className,
  loading,
  totalAmount,
}) => {
  const vatPrice = ((totalAmount / 100) * VAT).toFixed(1);
  const totalPrice = totalAmount + Number(vatPrice) + DELIVERY_PRICE;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total:</span>
        {loading ? <Skeleton className="w-[80%] h-11" /> : <span className="h-11 text-[34px] font-extrabold">{totalPrice} $</span>}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package className="mr-2 text-gray-400" size={18} />
            Cost of products:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14" /> : `${totalAmount} $` }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent className="mr-2 text-gray-400" size={18} />
            Taxes:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14" /> : `${vatPrice} $`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck className="mr-2 text-gray-400" size={18} />
            Delivery:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14" /> : `${DELIVERY_PRICE} $`}
      />

      <Button
        type="submit"
        loading={loading}
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Proceed to payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
