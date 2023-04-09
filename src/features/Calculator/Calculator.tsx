import './Calculator.scss';
import React, { FC, useEffect } from 'react';
import { CalculatorForm } from '../CalculatorForm/CalculatorForm';
import { useAppDispatch } from 'src/store/store';
import { fetchMaterials } from 'src/store/materials/materials.thunk';
import { fetchCalculatorConfig } from 'src/store/calculatorConfig/calculator-config.thunk';
import { CalculatorResult } from '../CalculatorResult/CalculatorResult';
import { CalculatorValue } from 'src/models/calculator-value.interface';
import { useSelector } from 'react-redux';
import { calculatorSelectors } from 'src/store/calculator/calculator.selectors';
import { materialSelectors } from 'src/store/materials/materials.selectors';
import { calculatorConfigSelectors } from 'src/store/calculatorConfig/calculator-config.selectors';

export const Calculator: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMaterials());
    dispatch(fetchCalculatorConfig());
  }, []);

  const calculatorValue: CalculatorValue = useSelector(calculatorSelectors.value);

  const sheet = useSelector(materialSelectors.sheetByName(calculatorValue.sheet));

  const pipe = useSelector(materialSelectors.pypeByName(calculatorValue.pipe));

  const [fix] = useSelector(materialSelectors.allFixes);

  const frameConfig = useSelector(calculatorConfigSelectors.frameConfigByKey(calculatorValue.frame));

  const sheetMaterial = sheet ? sheet.material : '';

  const fixConfig = useSelector(calculatorConfigSelectors.fixConfigByKey(sheetMaterial));

  return (
    <main className="calculator">
      <aside className="calculator__form">
        <CalculatorForm />
      </aside>

      <section className="calculator__result">
        <CalculatorResult {...{ calculatorValue, sheet, pipe, fix, frameConfig, fixConfig }} />
      </section>
    </main>
  );
};
