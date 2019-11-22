import React, {Component} from 'react';

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alterarNumero(1);
        //this.setState({numero : this.state.numero + 1})
        //this.state.numero ++;
    }
    menosUm = () => this.alterarNumero(-1);

    alterarNumero = diferenca => this.setState({numero : this.state.numero + diferenca})

    render(){
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>

                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
            </div>
        );
    }

    
    
}

//Solucao 01 - Funcao bind();
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this);
// }

//Solucao 02 - Funcao Arrow (onClick)
//<button onCLick={() => this.maisUm()}>Incrementar</button>

//Solucao 03 - Funcao Arrom
//maisUm = () => {this.props.numero ++;};