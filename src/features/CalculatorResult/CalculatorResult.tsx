import { FC } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CalculatorValue } from 'src/models/calculator-value.interface';
import { calculatorSelectors } from 'src/store/calculator/calculator.selectors';

export const CalculatorResult: FC = () => {
  const calculatorValue: CalculatorValue = useSelector(calculatorSelectors.value);

  const square: number = Math.round(calculatorValue.length * calculatorValue.width);

  return (
    <div>
      <h2>
        <span>Площадь изделия: {square} m</span>
      </h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Ед.</th>
            <th>Кол-во</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{calculatorValue.sheet}</td>
            <td>м2</td>
            <td>33</td>
            <td>333</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{calculatorValue.pipe}</td>
            <td>м2</td>
            <td>33</td>
            <td>333</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Саморез</td>
            <td>м2</td>
            <td>30</td>
            <td>333</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
