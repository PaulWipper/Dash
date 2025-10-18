import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import Navbar from './components/navbar/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-row gap-8 h-screen p-8'>
      <Navbar/>
      <App />
    </div>
  </StrictMode>,
)
