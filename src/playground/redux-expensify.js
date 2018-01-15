import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



const addExpense = (
  { 
    description = '',
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}) => 
  ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
);

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

const expensesReducerDefaultState = []
const filtersReducerDefaultState = { 
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }; 
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

// Filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const newItem = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const newItem2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: newItem2.expense.id }));
store.dispatch(editExpense(newItem.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

const demoState = {
  expenses: [{
    id: 'idjfidf',
    description: 'January Rent',
    note: 'This is the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};