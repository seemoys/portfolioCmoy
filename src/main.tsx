import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
      toastStyle={{
        background: 'rgba(8, 15, 24, 0.94)',
        color: '#e2e8f0',
        border: '1px solid rgba(34, 211, 238, 0.18)',
        borderRadius: '16px',
        backdropFilter: 'blur(14px)',
      }}
    />
  </StrictMode>
)
