import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import VehicleDataProvider from './vehicle-data-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VehicleDataProvider>
      <App />
    </VehicleDataProvider>
  </React.StrictMode>
);
