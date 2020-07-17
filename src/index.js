import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import App from "./App"


// 1º maniera
// const el = document.getElementById('root')

// ReactDOM.render('Olá React', el)

// 2º maneira
// ReactDOM.render('Olá ReactJS', document.getElementById('root'))

// 3º  maneira
// ReactDOM.render(
//     <div>
//     <strong>Curso React!!</strong>    
//     </div>,
//     document.getElementById('root')
// )

// 4º maneira
// const tag = <strong>React com const</strong>

// ReactDOM.render(
//     <div>
//         { tag }
//     </div>,
//     document.getElementById('root')
// )

ReactDOM.render(
    <App />,
    document.getElementById('root')
)