import React from 'react'

export default props => {
    const numAle = Math.floor(Math.random() * (props.numMax - props.numMin + 1) + props.numMin)
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong> {props.numMin} </p>
            <p><strong>Valor Máximo: </strong> {props.numMax} </p>
            <p><strong>Valor escolhido: </strong> {numAle} </p>
        </div>
    )

    // // Forma usando "destruct" para minimizar a escrita
    // const { numMin, numMax } = props
    // const numAle = Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
    // return (
    //     <div>
    //         <h2>Valor Aleatório</h2>
    //         <p><strong>Valor Mínimo: </strong> {numMin} </p>
    //         <p><strong>Valor Máximo: </strong> {numMax} </p>
    //         <p><strong>Valor escolhido: </strong> {numAle} </p>
    //     </div>
    // )

}


// teste