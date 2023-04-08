import './App.scss';
import React, { FC } from 'react';
import { Calculator } from './features/Calculator/Calculator';

export const App: FC = () => {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
};
