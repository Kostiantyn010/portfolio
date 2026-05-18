import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default: redirect root to /en */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Language routes — LanguageProvider reads :lang from URL */}
        <Route path="/:lang" element={
          <LanguageProvider>
            <App />
          </LanguageProvider>
        } />

        {/* Catch-all: redirect unknown paths to /en */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
