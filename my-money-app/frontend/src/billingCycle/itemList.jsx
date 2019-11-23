import React from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import Grid from '../common/layout/grid';
import Input from '../common/form/imput';
import IF from '../common/operator/if';

class ItemList extends React.Component {

    add(index, item = {}){
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
        }
    }
    remove(index){
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index);
        }
    }

    renderRows(){
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} placeholder="Informe o Nome" readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} placeholder="Informe o Valor" readOnly={this.props.readOnly} /></td>
                <IF test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`} component={Input} placeholder="Informe o Status" readOnly={this.props.readOnly} /></td>
                </IF>
                <td className="text-right">
                    <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-success" onClick={() => {this.add(index + 1);}}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => {this.add(index + 1, item);}}>
                            <i className="fa fa-clone"></i>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => {this.remove(index);}}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </td>
            </tr>
        ));
    }

    render (){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table table-condensed">
                        <thead>
                            <th>Nome</th>
                            <th>Valor</th>
                            <IF test={this.props.showStatus}>
                                <th>Status</th>
                            </IF>
                            <th className="text-right">Ações</th>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);