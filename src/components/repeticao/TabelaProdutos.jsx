import React from "react"
import produtos from "../../data/produtos"
import "./TabelaProdutos.css"

export default props => {

    const listaProdutos = produtos.map((produto, i) => {
        return (
            <tbody key={produto.id}>
                <tr className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            </tbody>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                {listaProdutos}
            </table>
        </div>
    )
}