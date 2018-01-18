import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <ExpenseForm 
          onSubmit={this.onSubmit}
          expense={this.props.expense}
        />
        <button onClick={this.onClick}>
          Remove
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => (
  {
    editExpense: (id, expense) => (dispatch(editExpense(id, expense))),
    removeExpense: (id) => (dispatch(removeExpense(id)))
  }
);

const mapStateToProps = (state, props) => {
  const expense = state.expenses.find((exp) => props.match.params.id === exp.id);
  return {
    expense: expense
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);