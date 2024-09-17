import type { MetaFunction } from "@remix-run/node";

import {
  LoanCalculatorForm,
  loanCalculatorContent,
  loanCalculatorMeta,
} from "~/widgets/rechner/kreditrechner";

export const meta: MetaFunction = () => {
  return loanCalculatorMeta;
};

export default function Kreditrechner() {
  return (
    <section>
      <header>
        <h2>Kreditrechner</h2>
      </header>
      <LoanCalculatorForm />
      <div
        className="text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: loanCalculatorContent.content }}
      />
    </section>
  );
}
