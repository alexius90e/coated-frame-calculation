import { Button, Form } from 'react-bootstrap';
import React, { FC, FormEventHandler } from 'react';
import './CalculatorForm.scss';
import { useSelector } from 'react-redux';
import { materialSelectors } from 'src/store/materials/materials.selectors';

export const CalculatorForm: FC = () => {
  const handleSubmit: FormEventHandler = (event: React.FormEvent<Element>) => {
    event.preventDefault();
    console.log(event);
  };

  const { sheets, pipes } = useSelector(materialSelectors.allMaterials);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="frame">
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

      <Form.Group className="mb-3" controlId="width">
        <Form.Label>Ширина</Form.Label>
        <Form.Control type="number" min={5} max={20} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Длина</Form.Label>
        <Form.Control type="number" min={5} max={20} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="strength">
        <Form.Label>Прочность</Form.Label>
        <Form.Select>
          <option value="1">Легкая</option>
          <option value="2">Стандартная</option>
          <option value="3">Усиленная</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
};
