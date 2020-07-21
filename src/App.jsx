import React from "react"

import "./App.css"
import ListaAluno from "./components/repeticao/ListaAluno"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Familia from "./components/basicos/Familia"
import Card from "./components/layout/Card"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
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
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#6 - Repetição" color="#A7226E">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card titulo="#5 - Componente com Filhos" color="#F7DB4F">
                    <Familia sobrenome="Leal">
                        <FamiliaMembro nome="Fernando"></FamiliaMembro>
                        <FamiliaMembro nome="Juliana"></FamiliaMembro>
                        <FamiliaMembro nome="Bianca"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo='#4 - Desafio Aleatório' color="#EC2049">
                    <Aleatorio
                        numMin={1}
                        numMax={60}
                    />
                </Card>

                <Card titulo="#3 - Fragmento" color="#355C7D">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Com Parâmetro" color="#474747">
                    <ComParametro
                        titulo='Nota dos alunos'
                        aluno='Fernando leal!'
                        nota={7.6} />
                </Card>

                <Card titulo="#1 - Primeiro" color="#2F9599">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )