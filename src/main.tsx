import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './engine/styles.css'
import './apps/a-ordem/a-ordem.css'
import App from './App'
const root = document.getElementById('root')!
const application = <StrictMode><App /></StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, application); else createRoot(root).render(application)
