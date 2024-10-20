import React from "react";
import { Variant } from "../components/shared/group-variants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvaliblePizzaSizes } from "../lib";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
  size: PizzaSize;
  setSize: (size: PizzaSize) => void;
  type: PizzaType;
  currentItemId?: number
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (ingredientId: number) => void;
  availableSizes: Variant[];
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  const availableSizes = getAvaliblePizzaSizes(type, items);

  const currentItemId = items.find((item) => item.pizzaType === type && item.size == size)?.id;



  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availableSizes, size, type]);

  return {
    size,
    setSize,
    type,
    setType,
    currentItemId,
    selectedIngredients,
    addIngredient,
    availableSizes,
  }
};
