/* Imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter.js';

import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

/* App */

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(getVisibleExpenses(state.expenses, state.filters));
// });

store.dispatch(addExpense({ description: 'Water bill', amount: 7000, createdAt: 1518739200000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: 1514678400000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1515974400000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));  