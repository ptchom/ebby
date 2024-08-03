import { JSX } from "react";
import { useForm } from "react-hook-form";

import NumberInput from "./NumberInput";
import RangeInput from "./RangeInput";

type Inputs = {
  amount: number;
};

function KreditrechnerForm(): JSX.Element {
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      amount: 50000,
    },
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start"
    >
      <label htmlFor="amount">Kreditbetrag (€)</label>
      <div className="flex items-center gap-6">
        <RangeInput
          name="amount"
          control={control}
          min={0}
          max={100000}
          step={500}
        />
        <NumberInput name="amount" control={control} />
      </div>
    </form>
  );
}

export default KreditrechnerForm;
