import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"

// export default function App(props) {
//     return (
//         <div id="app">
//         <Fragmento />
//         <ComParametro 
//         titulo='Nota dos alunos' 
//         aluno='Fernando leal!'
//         nota={7.6} />        
//         <Primeiro></Primeiro>
//     </div>
//     )
// }

export default () =>
    (
        <div id="app">
            <Aleatorio
                numMin={1}
                numMax={10}
            />
            <Fragmento />
            <ComParametro
                titulo='Nota dos alunos'
                aluno='Fernando leal!'
                nota={7.6} />
            <Primeiro></Primeiro>
        </div>
    )