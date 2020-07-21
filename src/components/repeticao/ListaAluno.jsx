import React from "react"
import alunos from '../../data/alunos'

export default props => {

const alunosLI = alunos.map(aluno => {
    return (
    <li key={aluno.id} style={{listStyle: "none"}}>{aluno.id} {aluno.nome} - {aluno.nota} </li>
    )
})

    return (
        <div>
            <ul>
                {alunosLI}
            </ul>
        </div>
    )
}