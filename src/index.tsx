import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clientes from './pages/Clientes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Clientes/>
  </React.StrictMode>
);