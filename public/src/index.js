import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Si usas Tailwind

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registrado'))
      .catch(err => console.log('Service Worker error:', err));
  });
}