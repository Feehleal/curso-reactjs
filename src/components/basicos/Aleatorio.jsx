import React from 'react'

export default function Aleatorio(props) {
    // const result = props.numMin
    // const results = props.NumMax

    // const resultado = Math.random(result, results)
    const numAle =  Math.floor(Math.random() * (props.numMax - props.numMin +1) + props.numMin)
    return (
        <h1>{numAle}</h1>
    )

}
