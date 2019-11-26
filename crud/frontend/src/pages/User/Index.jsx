import React from 'react';
import axios from 'axios';

import Main from '../../components/templates/Main/Index';

const headerProps = {
    icon: 'user',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3333/users';
const initialState = {
    user: {name:'', email: ''},
    list: []
}

export default class User extends React.Component{
    state = {...initialState};

    UNSAFE_componentWillMount() {
        axios.get(baseUrl)
        .then(resp => this.setState({list: resp.data}))
    }

    clear(){
        this.setState({user: initialState.user});
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put': 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedLis(resp.data);
            this.setState({user:initialState.user, list});
        })
    }

    getUpdatedLis(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id);
        if(add) list.unshift(user);
        return list;
    }

    updateField(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                       <div className="form-group">
                            <label className="col-form-label-sm">Nome</label>
                            <input type="text" className="form-control form-control-sm" name="name" value={this.state.user.name} onChange={e => this.updateField(e) } placeholder="Digite o nome..." />
                       </div>
                    </div>

                    <div className="col-12 col-md-6">
                       <div className="form-group">
                            <label className="col-form-label-sm">E-mail</label>
                            <input type="text" className="form-control form-control-sm" name="email" value={this.state.user.email} onChange={e => this.updateField(e) } placeholder="Digite o E-mail..." />
                       </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <div className="btn-group btn-group-sm">
                            <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                            <button className="btn btn-secondary" onClick={e => this.clear(e)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    load(user){
        this.setState({user});
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`)
        .then(resp => {
            const list = this.getUpdatedLis(user, false);
            this.setState({list});
        });
    }

    renderTable(){
        return (
            <table className="table table-sm table-hover mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th className="text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    renderRows(){
        return this.state.list.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-right">
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </td>
            </tr>
        ));
    }

    render(){


        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
}