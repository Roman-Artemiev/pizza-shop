"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  selected?: Set<string>;
  name?: string;
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = "Search...",
  onClickCheckbox,
  selected,
  name,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || items).slice(0, limit);
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  if(loading) {
    return <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {Array.from({length: limit}).map((_, index) => (
       <Skeleton key={index} className="h-6 mb-3 rounded-[8px]" />
      ))}

      <Skeleton className="w-28 h-6 mb-3 rounded-[8px]" />
    </div>
  }

  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <div key={index}>
            <FilterCheckbox
              key={index}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={selected?.has(item.value)}
              onCheckedChange={() => onClickCheckbox?.(item.value)}
              name={name}
            />
          </div>
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? "- Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
