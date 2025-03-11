import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'


createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
