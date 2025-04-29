import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IplPointsTableSortedByNRR from '../IPL_Points_Table_Sorted.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IplPointsTableSortedByNRR />
  </StrictMode>,
)
