import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Calculator from './Calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
)
