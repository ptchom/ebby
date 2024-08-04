import type { MetaFunction } from "@remix-run/node";

import {
  loanCalculatorContent,
  LoanCalculatorForm,
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
        dangerouslySetInnerHTML={{ __html: loanCalculatorContent.content }}
      />
    </section>
  );
}
