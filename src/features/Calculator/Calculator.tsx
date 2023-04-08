import React, { FC } from 'react';
import './Calculator.scss';
import { CalculatorForm } from '../CalculatorForm/CalculatorForm';

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
