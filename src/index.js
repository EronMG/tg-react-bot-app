import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageContextProvider } from './context/Pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>
);
