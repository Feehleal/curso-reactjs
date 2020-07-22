import React from 'react'
import DiretaFilho from './DiretaFilho'


export default props => {
    return (
        <div>
        <DiretaFilho nome="Fernando" idade={10} nerd={true}></DiretaFilho>
        <DiretaFilho nome="Juliana" idade={13} nerd={false}></DiretaFilho>
        </div>
    )
}