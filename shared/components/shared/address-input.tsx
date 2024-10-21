'use client';

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="c61cb525911621e89cdcba38552a9962074ac520"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
