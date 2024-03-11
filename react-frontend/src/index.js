import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root container where your React app will be mounted.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root container.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
