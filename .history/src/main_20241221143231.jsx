import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
// import "./Styles/SideMessage.css";
import "./Styles/App.css";
import "./Styles/src/Styles/LargeScreenDesign.css";
import "./Styles/Design_Responsiveness.css";
import "./Styles/MobileDesign.css"

import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
