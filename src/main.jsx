import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';


// Create a root container instead of using ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);