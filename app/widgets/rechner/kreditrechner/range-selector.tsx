import { Controller } from "react-hook-form";

import { RangeInputProps } from "~/widgets/rechner/kreditrechner/types";

export const RangeSelector = ({
  name,
  control,
  min,
  max,
  step,
  unitType,
}: RangeInputProps) => {
  return (
    <div className="relative flex w-full flex-col items-center md:w-2/3">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type="range"
              id={name}
              min={min}
              max={max}
              step={step}
              {...field}
              className="mb-2 w-full bg-teal-200 accent-teal-600"
            />
            <div className="flex w-full justify-between text-sm text-teal-600">
              <span>
                {min} {unitType}
              </span>
              <span>
                {(min + max) / 2} {unitType}
              </span>
              <span>
                {max} {unitType}
              </span>
            </div>
          </>
        )}
      />
    </div>
  );
};
