import { FC } from "react";
import { Controller } from "react-hook-form";

import { bundeslaender } from "~/shared/constants";

import { BundeslandSelectProps } from "./type";

export const BundeslandSelect: FC<BundeslandSelectProps> = ({ control }) => {
  return (
    <>
      <label htmlFor="bundesland" className="inline-block">
        Bundesland
      </label>
      <Controller
        name="bundesland"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <select
              {...field}
              className="w-2/3 rounded-md border px-3 py-1 text-base"
            >
              {Object.keys(bundeslaender).map((key) => (
                <option key={key} value={key}>
                  {bundeslaender[key].name}
                </option>
              ))}
            </select>
            {/* Ошибки */}
            {fieldState.error && (
              <span className="text-sm text-red-500">
                {fieldState.error.message}
              </span>
            )}
          </>
        )}
      />
    </>
  );
};
