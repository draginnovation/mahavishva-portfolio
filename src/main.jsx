import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.onerror = function (msg, url, line, col, error) {
  console.error("GLOBAL ERROR:", msg, "at", url, ":", line);
  return false;
};

console.log("Mahavishva Portfolio: Initializing Root...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("CRITICAL: Root element #root not found!");
} else {
  console.log("Root element found, rendering app...");
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
