import { JSX, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const BruttoNettoForm = (): JSX.Element => {
  const { control, handleSubmit } = useForm();
  const [formData, setFormData] = useState<any>(null);

  const onSubmit = (data: any) => {
    setFormData(data);
  };

  return (
    <section className="flex flex-row gap-3 rounded-lg border-2 border-gray-400/5 p-1 shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col gap-4 sm:text-xl"
      >
        <label htmlFor="Einkommen" className="inline-block">
          Einkommen
        </label>
        <div className="flex items-center gap-0.5">
          <Controller
            name="Einkommen"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-2/3 rounded-md border px-3 py-1"
                placeholder="Ihr Bruttoeinkommen"
              />
            )}
          />
          <span className="flex items-center">€</span>
        </div>
        <hr className="my-2 border-t border-black opacity-50" />
      </form>

      <div className="flex w-1/2 flex-col justify-start sm:text-xl">
        <h3 className="mb-2 text-lg font-semibold">Ergebnisse</h3>
        <div>
          <strong>Einkommen:</strong>{" "}
          {formData ? `${formData.Einkommen} €` : "Noch keine Daten"}
        </div>
      </div>
    </section>
  );
};
