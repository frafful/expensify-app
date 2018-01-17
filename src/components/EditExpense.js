import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//Edit expense component. ID: {props.match.params.id}

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
        expense={props.expense}
      />
      <button onClick={() => {
        console.log(props.expense.id);
        props.dispatch(removeExpense( {id: props.expense.id }));
        props.history.push('/');
      }}  
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const expense = state.expenses.find((exp) => props.match.params.id === exp.id);
  return {
    expense: expense
  };
};

export default connect(mapStateToProps)(EditExpense);