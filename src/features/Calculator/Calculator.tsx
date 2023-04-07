import './Calculator.scss';
import React, { FC } from 'react';

export const Calculator: FC = () => {
  return (
    <main className="calculator">
      <aside className="calculator__form">calculator inputs</aside>
      <section className="calculator__result">calculations</section>
    </main>
  );
};
