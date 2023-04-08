import './CalculatorForm.scss';
import { Form } from 'react-bootstrap';
import React, { FC, FormEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { materialSelectors } from 'src/store/materials/materials.selectors';
import { calculatorConfigSelectors } from 'src/store/calculatorConfig/calculator-config.selectors';

export const CalculatorForm: FC = () => {
  const handleSubmit: FormEventHandler = (event: React.FormEvent<Element>) => {
    event.preventDefault();
    console.log(event);
  };

  const { sheets, pipes } = useSelector(materialSelectors.allMaterials);

  const { width, length, frames } = useSelector(calculatorConfigSelectors.config);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="sheet">
        <Form.Label>Материал</Form.Label>
        <Form.Select>
          {sheets.map((sheet) => (
            <option key={sheet.name} value={sheet.name}>
              {sheet.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="pipe">
        <Form.Label>Трубы</Form.Label>
        <Form.Select>
          {pipes.map((pipe) => (
            <option key={pipe.name} value={pipe.name}>
              {pipe.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {width && (
        <Form.Group className="mb-3" controlId="width">
          <Form.Label>{width.name}</Form.Label>
          <Form.Control type="number" min={width.min} max={width.max} step={width.step} />
        </Form.Group>
      )}

      {length && (
        <Form.Group className="mb-3" controlId="length">
          <Form.Label>Длина</Form.Label>
          <Form.Control type="number" min={length.min} max={length.max} step={length.step} />
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="frame">
        <Form.Label>Прочность</Form.Label>
        <Form.Select>
          {frames.map((frame) => (
            <option key={frame.key} value={frame.key}>
              {frame.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};
