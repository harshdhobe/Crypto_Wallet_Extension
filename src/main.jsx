import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Bootstrap Bundle JS (with Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
)
