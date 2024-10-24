import * as React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Readonly<Props>> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Order: {orderId}!</h1>

    <p>
      Pay for the order at the price of <b>{totalAmount} $</b>. Follow{" "}
      <a href={paymentUrl}>the link</a> for payment
    </p>
    <span>THIS IS NOT A REAL WEBSITE WHERE YOU CAN BUY PIZZA, the letter was just an informal</span>
  </div>
);
