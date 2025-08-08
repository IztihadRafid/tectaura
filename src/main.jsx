import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App></App>
    </StoreContextProvider>
  </BrowserRouter>
)
