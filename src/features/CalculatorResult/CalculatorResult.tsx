import { FC } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CalculatorValue } from 'src/models/calculator-value.interface';
import { calculatorSelectors } from 'src/store/calculator/calculator.selectors';
import { materialSelectors } from 'src/store/materials/materials.selectors';

const sheetLength = 1;

export const CalculatorResult: FC = () => {
  const calculatorValue: CalculatorValue = useSelector(calculatorSelectors.value);

  const { length, width } = calculatorValue;

  const totalSquare: number = Math.round(length * width);

  const sheet = useSelector(materialSelectors.sheetByName(calculatorValue.sheet));

  const sheetsCount = sheet ? Math.ceil(totalSquare / (sheet.width * sheetLength)) : 0;

  const sheetsPrice = sheet ? sheetsCount * sheet.price : 0;

  const pipe = useSelector(materialSelectors.pypeByName(calculatorValue.pipe));

  const [fix] = useSelector(materialSelectors.allFixes);

  return (
    <div>
      <h2>
        <span>Площадь изделия: {totalSquare} m</span>
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
          {sheet && (
            <tr>
              <td>1</td>
              <td>{sheet.name}</td>
              <td>{sheet.unit}</td>
              <td>{sheetsCount}</td>
              <td>{sheetsPrice}</td>
            </tr>
          )}
          {pipe && (
            <tr>
              <td>2</td>
              <td>{pipe.name}</td>
              <td>{pipe.unit}</td>
              <td>33</td>
              <td>{pipe.price}</td>
            </tr>
          )}
          {fix && (
            <tr>
              <td>3</td>
              <td>{fix.name}</td>
              <td>{fix.unit}</td>
              <td>30</td>
              <td>{fix.price}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
