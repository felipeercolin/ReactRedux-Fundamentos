import React from 'react';

export default props => {
    const aprovados = ['Paulo', 'Robera', 'Gustavo', 'Julia'];

    const gerarItens = itens=> {
        return itens.map(item => <li>{item}</li>);
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    );
}