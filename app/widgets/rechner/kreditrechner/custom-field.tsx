// @ts-nocheck
import { FC } from "react";

import { NumericInput, RangeSelector } from "./";
import { FieldProps } from "./types";

export const CustomField: FC<FieldProps> = ({
  title,
  name,
  control,
  min,
  max,
  step,
  unitType,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-lg font-semibold">
        {title}
      </label>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <RangeSelector
          name={name}
          control={control}
          min={min}
          max={max}
          step={step}
          unitType={unitType}
        />
        <NumericInput name={name} control={control} unitType={unitType} />
      </div>
    </div>
  );
};
