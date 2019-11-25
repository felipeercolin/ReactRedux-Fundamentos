import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import { init } from './billingCycleActions';
import LabelInput from '../common/form/labelAndInput';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends React.Component{

    calculateSummary(){
        const sum = (totalizador, valorAtual) => totalizador + valorAtual;

        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
        };
    }

    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelInput} label="Nome" cols="12 4" placeholder="Informe o Nome" readOnly={readOnly} />
                    <Field name="month" component={LabelInput} label="Mês" cols="12 4" placeholder="Informe o Mês" readOnly={readOnly} type="number" />
                    <Field name="year" component={LabelInput} label="Ano" cols="12 4" placeholder="Informe o Ano" readOnly={readOnly} type="number" />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols="12 6" list={credits} readOnly={readOnly} field="credits" legend="Créditos" />
                    <ItemList cols="12 6" list={debts} readOnly={readOnly} field="debts" legend="Débitos" showStatus={true} />
                </div>
                <div className="box-footer">
                    <div className="btn-group btn-group-sm">
                        <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                            <i className={`fa fa-${this.props.submitIcon}`}></i> {this.props.submitLabel}
                        </button>
                        <button type="button" className="btn btn-default" onClick={this.props.init}>
                            <i className="fa fa-remove"></i> Cancelar
                        </button>
                    </div>
                </div>
            </form>
        );
    };
}


BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);