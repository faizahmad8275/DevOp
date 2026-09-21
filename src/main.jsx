import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authorization from './components/Authorization.jsx'

createRoot(document.getElementById('root')).render(
  <Authorization>
    <App />
  </Authorization>,
)
