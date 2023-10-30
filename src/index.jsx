import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
//import App from './App';

console.log('Hello World!');

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <h1>Hello World!</h1>
  </React.StrictMode>
);
