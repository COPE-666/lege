import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"; // 去除默认样式的package

import "./assets/styles/global.scss";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
