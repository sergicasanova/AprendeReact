import React from 'react'
import ReactDOM from 'react-dom/client'
//ahora debemos importar la App desde la ruto ./App.jsx
import {App} from './App.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
//los componentes seran escritos en PascalCase, siempre. Sino no funciona


root.render(
  <App />
  
)
