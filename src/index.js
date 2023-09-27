import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import DataProvider from './Context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </DataProvider>
  </React.StrictMode>
);