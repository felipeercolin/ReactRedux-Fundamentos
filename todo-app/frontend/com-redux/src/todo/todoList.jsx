import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButtom from '../template/iconButton';
import { markAsDone, markAsPending, remove } from './todoActions';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="col-xs-2 col-sm-1 col-md-1 col-lg-1 text-right">
                    <div className="btn-group btn-group-sm">
                        <IconButtom style="success" icon="check" hide={todo.done} onClick={() => props.markAsDone(todo) } />
                        <IconButtom style="warning" icon="undo" hide={!todo.done} onClick={() => props.markAsPending(todo) } />
                        <IconButtom style="danger" icon="trash-o" hide={!todo.done} onClick={() => props.remove(todo) } />
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <table className="table table-condensed">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending,remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);