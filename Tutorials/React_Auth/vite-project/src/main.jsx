import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './components/login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)
