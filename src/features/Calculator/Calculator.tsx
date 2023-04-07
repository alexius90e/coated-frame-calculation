import { CalculatorForm } from 'features/CalculatorForm/CalculatorForm';
import React, { FC } from 'react';
import './Calculator.scss';

export const Calculator: FC = () => {
  return (
    <main className="calculator">
      <aside className="calculator__form">
        <CalculatorForm />
      </aside>
      <section className="calculator__result">calculations</section>
    </main>
  );
};
