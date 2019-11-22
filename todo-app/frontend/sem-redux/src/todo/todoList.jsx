import React from 'react';
import IconButtom from '../template/iconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="col-lg-1 text-right">
                    <div className="btn-group btn-group-sm">
                        <IconButtom style="success" icon="check" hide={todo.done} onClick={() => props.handleMarkAsDone(todo) } />
                        <IconButtom style="warning" icon="undo" hide={!todo.done} onClick={() => props.handleMarkAsPending(todo) } />
                        <IconButtom style="danger" icon="trash-o" hide={!todo.done} onClick={() => props.handleRemove(todo) } />
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