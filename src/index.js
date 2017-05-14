import React from 'react';
import { render } from 'react-dom';

const App = ({greeting}) => <div>{ greeting }</div>;

render(
  <App greeting='Heyya, React!' />,
  document.getElementById('root')
);
