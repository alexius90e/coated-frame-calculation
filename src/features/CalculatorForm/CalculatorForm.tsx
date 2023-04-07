import { Form } from 'react-bootstrap';
import React, { FC, FormEventHandler } from 'react';
import './CalculatorForm.scss';

export const CalculatorForm: FC = () => {
  const handleSubmit: FormEventHandler = (event: React.FormEvent<Element>) => {
    event.preventDefault();
  };

  const handleChange: FormEventHandler = (event: React.FormEvent<Element>) => {
    console.log((event.target as HTMLElement).id);
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Form.Group className="mb-3" controlId="frame">
        <Form.Label>Материал</Form.Label>
        <Form.Select>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="pipe">
        <Form.Label>Трубы</Form.Label>
        <Form.Select>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
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
    </Form>
  );
};
