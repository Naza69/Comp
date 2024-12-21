import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './main.css'
import { ContadorApp } from './ContadorApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrimerComponente titulo="Titulo del primer componente (Propiedad pasada por main)"/> */}
    <ContadorApp value={0}/>
  </StrictMode>
)
