import React from 'react'

export default function ComParametro(props) {
    const resultado = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3>O aluno <strong>{ props.aluno }</strong> obteve a nota { props.nota } e está { resultado }
            </h3>
        </div>
    )
}