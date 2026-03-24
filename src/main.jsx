import React from "react"
import ReactDom from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
