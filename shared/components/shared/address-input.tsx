'use client';

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}
const token = process.env.NEXT_PUBLIC_DADATA_TOKEN || '';
export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token={token}
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
