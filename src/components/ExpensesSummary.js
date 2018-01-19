import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/selectExpensesTotal';
import filteredExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  
  const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
  return (
    <div>
      { 
        expensesCount > 0 && 
          <h1>
            Viewing {expensesCount} {expenseWord} totalling { numeral((expensesTotal / 100)).format('$0,0.00') }
          </h1> 
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expensesCount: filteredExpenses(state.expenses, filteredExpenses).length,
    expensesTotal: selectExpensesTotal(filteredExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);


