import React, { FC, useEffect } from 'react';
import './Calculator.scss';
import { CalculatorForm } from '../CalculatorForm/CalculatorForm';
import { useAppDispatch } from 'src/store/store';
import { fetchMaterials } from 'src/store/materials/materials.thunk';
import { fetchCalculatorConfig } from 'src/store/calculatorConfig/calculator-config.thunk';
import { CalculatorResult } from '../CalculatorResult/CalculatorResult';

export const Calculator: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMaterials());
    dispatch(fetchCalculatorConfig());
  }, []);

  return (
    <main className="calculator">
      <aside className="calculator__form">
        <CalculatorForm />
      </aside>

      <section className="calculator__result">
        <CalculatorResult />
      </section>
    </main>
  );
};
