import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

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
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
        titulo='Nota dos alunos' 
        aluno='Fernando leal!'
        nota={9.9} />
    </div>,
    document.getElementById('root')
)