import { Calculator } from 'features/Calculator/Calculator';
import './App.scss';
import React, { FC } from 'react';

export const App: FC = () => {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
};
