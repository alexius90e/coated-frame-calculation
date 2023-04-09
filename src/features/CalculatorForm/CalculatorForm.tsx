import './CalculatorForm.scss';
import { Form } from 'react-bootstrap';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { materialSelectors } from 'src/store/materials/materials.selectors';
import { calculatorConfigSelectors } from 'src/store/calculatorConfig/calculator-config.selectors';
import { useAppDispatch } from 'src/store/store';
import { calculatorActions } from 'src/store/calculator/calculator.slice';
import { calculatorSelectors } from 'src/store/calculator/calculator.selectors';

export const CalculatorForm: FC = () => {
  const { sheets, pipes } = useSelector(materialSelectors.allMaterials);

  const { width, length, frames } = useSelector(calculatorConfigSelectors.config);

  const calculatorValue = useSelector(calculatorSelectors.value);

  const dispatch = useAppDispatch();

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const id: string = event.target.id;
    const value: string = event.target.value;
    if (id === 'sheet') dispatch(calculatorActions.setValue({ ...calculatorValue, sheet: value }));
    if (id === 'pipe') dispatch(calculatorActions.setValue({ ...calculatorValue, pipe: value }));
    if (id === 'frame') dispatch(calculatorActions.setValue({ ...calculatorValue, frame: value }));
  };

  const handleWidthChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Number(event.target.value);
    const newValue = { ...calculatorValue, width: value };
    const isValid = value >= width.min && value <= width.max;
    if (isValid) dispatch(calculatorActions.setValue(newValue));
  };

  const handleLengthChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Number(event.target.value);
    const newValue = { ...calculatorValue, length: value };
    const isValid = value >= length.min && value <= length.max;
    if (isValid) dispatch(calculatorActions.setValue(newValue));
  };

  useEffect(() => {
    dispatch(
      calculatorActions.setValue({
        sheet: sheets.length ? sheets[0].name : '',
        pipe: pipes.length ? pipes[0].name : '',
        width: width ? width.min : 0,
        length: length ? length.min : 0,
        frame: frames.length ? frames[0].key : '',
      }),
    );
  }, [sheets, pipes, width, length, frames]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="sheet">
        <Form.Label>Материал</Form.Label>
        <Form.Select value={calculatorValue.sheet} onChange={handleSelectChange}>
          {sheets.map((sheet) => (
            <option key={sheet.name} value={sheet.name}>
              {sheet.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="pipe">
        <Form.Label>Трубы</Form.Label>
        <Form.Select value={calculatorValue.pipe} onChange={handleSelectChange}>
          {pipes.map((pipe) => (
            <option key={pipe.name} value={pipe.name}>
              {pipe.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="frame">
        <Form.Label>Прочность</Form.Label>
        <Form.Select value={calculatorValue.frame} onChange={handleSelectChange}>
          {frames.map((frame) => (
            <option key={frame.key} value={frame.key}>
              {frame.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {width && (
        <Form.Group className="mb-3" controlId="width">
          <Form.Label>
            {width.name}: <b>{calculatorValue.width} м.</b>
          </Form.Label>

          <Form.Range
            min={width.min}
            max={width.max}
            step={width.step}
            value={calculatorValue.width}
            onChange={handleWidthChange}
          />
        </Form.Group>
      )}

      {length && (
        <Form.Group className="mb-3" controlId="length">
          <Form.Label>
            {length.name}: <b>{calculatorValue.length} м.</b>
          </Form.Label>

          <Form.Range
            min={length.min}
            max={length.max}
            step={length.step}
            value={calculatorValue.length}
            onChange={handleLengthChange}
          />
        </Form.Group>
      )}
    </Form>
  );
};
