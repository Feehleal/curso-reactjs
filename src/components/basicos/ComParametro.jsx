import React from 'react'

export default function ComParametro(props) {
    const resultado = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    // As props (propriedade são estaticas, para alterar pode fazer dessa maneira abaixo)
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3>O aluno <strong>{ props.aluno }</strong> obteve a nota { notaInt } e está { resultado }
            </h3>
        </div>
    )
}