import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppIA } from './AppIA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppIA />
  </StrictMode>,
)
