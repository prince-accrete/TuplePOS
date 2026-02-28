import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

// PrimeReact
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Global styles
import './styles/reset.css';
import './styles/variables.css';
import './styles/layout.css';
import './styles/animations.css';
import './styles/primereact-overrides.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
