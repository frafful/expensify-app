/* Imports */
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter.js';

import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

/* App */

// const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(getVisibleExpenses(state.expenses, state.filters));
// });

// store.dispatch(addExpense({ description: 'Water bill', amount: 7000, createdAt: 10000 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: 10500 }));

// store.dispatch(setTextFilter('bill'));

// store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter />, document.getElementById('app'));  