import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
import { AppVersion3 } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppVersion2 /> */}
    <AppVersion3 />
  </React.StrictMode>
);
