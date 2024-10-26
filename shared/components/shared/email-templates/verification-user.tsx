import * as React from "react";

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Readonly<Props>> = ({
  code,
}) => (
  <div>
    <p>Confirm code: <h2>{code}</h2></p>

    <p><a href={`http://localhost:3000/api/auth/verify?code=${code}`}>Verify registration</a></p>

    <span>THIS IS NOT A REAL WEBSITE WHERE YOU CAN BUY PIZZA, the letter was just an informal</span>
  </div>
);
