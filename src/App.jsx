import React from "react"

import "./App.css"
import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProtudos from "./components/repeticao/TabelaProdutos"
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

                <Card titulo="#13 - Mega-sena" color="#90A4AE">
                    <Mega></Mega>
                </Card>

                <Card titulo="#12 - Contador" color="#FFFF00">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#11 - Componente controlado" color="#9FA8DA">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#FF6D00">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#9 - Comunicação Direta" color="#827717">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#8 - Condicional" color="#2E7D32">
                    <ParOuImpar numero={20} ></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: 'Fer@nando.com.br' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{}}></UsuarioInfo>
                    <UsuarioInfo></UsuarioInfo>
                </Card>

                <Card titulo="#7 - Tabela de Repetição" color="#00BCD4">
                    <TabelaProtudos></TabelaProtudos>
                </Card>

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