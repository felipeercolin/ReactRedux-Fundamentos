import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList,showUpdate,showDelete } from './billingCycleActions';

class BillingCycleList extends React.Component{

    componentWillMount(){
        this.props.getList();
    }


    renderRows(){
        const list = this.props.list || [];
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td className="text-right">
                   <div className="btn-group btn-group-sm">
                        <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                   </div>
                </td>
            </tr>
        ));
    }

    render(){
        return (
            <div>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="col-xs-2 col-sm-1 col-md-1 col-lg-1 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    };
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList,showUpdate,showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);