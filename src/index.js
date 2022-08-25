import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
axios.defaults.baseURL = "https://task-manager-api-rest.herokuapp.com/api/v1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

