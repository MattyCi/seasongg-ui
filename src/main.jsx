import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/flatly/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '/src/assets/css/common.css'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
