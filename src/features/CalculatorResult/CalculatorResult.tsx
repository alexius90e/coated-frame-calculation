import { FC } from 'react';
import { Table } from 'react-bootstrap';
import { CalculatorValue } from 'src/models/calculator-value.interface';
import { ConfigFix } from 'src/models/config-fix.interface';
import { ConfigFrame } from 'src/models/config-frame.interface';
import { MaterialCustom } from 'src/models/material-custom.interface';
import { MaterialPipe } from 'src/models/material-pipe.interface';
import { MaterialSheet } from 'src/models/material-sheet.interface';

interface CalculatorResultProps {
  calculatorValue: CalculatorValue;
  sheet: MaterialSheet;
  pipe: MaterialPipe;
  frameConfig: ConfigFrame;
  fix: MaterialCustom;
  fixConfig: ConfigFix;
}

export const CalculatorResult: FC<CalculatorResultProps> = (props) => {
  const { calculatorValue, sheet, pipe, fix, frameConfig, fixConfig } = props;

  const { length, width } = calculatorValue;

  const totalSquare: number = Math.round(length * width);

  const sheetsCount = Math.ceil(totalSquare / (sheet.width * 1));

  const sheetsPrice = sheetsCount * sheet.price;

  const frameStep = frameConfig.step;

  const frameCeilCountX = Math.ceil(length / frameStep);

  const frameCeilCountY = Math.ceil(width / frameStep);

  const frameCeilLength = Number((length / frameCeilCountX).toFixed(2));

  const frameCeilWidth = Number((width / frameCeilCountY).toFixed(2));

  const pipeLength = Math.ceil((frameCeilCountX + 1) * length + (frameCeilCountY + 1) * length);

  const pipesPrice = pipeLength * pipe.price;

  const fixCount = fixConfig.value * totalSquare;

  const fixesPrice = Number((fixCount * fix.price).toFixed(1));

  const totalPrice = sheetsPrice + pipesPrice + fixesPrice;

  return (
    <div>
      <h2 className="mb-3">
        <span>Площадь изделия: {totalSquare} m</span>
      </h2>

      <h2 className="mb-3">
        <span>
          Размер ячейки: {frameCeilLength}x{frameCeilWidth} m
        </span>
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
            <td>{sheet.name}</td>
            <td>{sheet.unit}</td>
            <td>{sheetsCount}</td>
            <td>{sheetsPrice}</td>
          </tr>

          <tr>
            <td>2</td>
            <td>{pipe.name}</td>
            <td>{pipe.unit}</td>
            <td>{pipeLength}</td>
            <td>{pipesPrice}</td>
          </tr>

          <tr>
            <td>3</td>
            <td>{fix.name}</td>
            <td>{fix.unit}</td>
            <td>{fixCount}</td>
            <td>{fixesPrice}</td>
          </tr>
        </tbody>
      </Table>

      <h2 className="mb-3">
        <span>Общая стоимость: {totalPrice}</span>
      </h2>
    </div>
  );
};
