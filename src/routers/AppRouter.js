
import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import CreateExpense from '../components/CreateExpense.js';
import EditExpense from '../components/EditExpense.js';
import Help from '../components/Help.js';
import Header from '../components/Header.js';
import NotFound from '../components/NotFound.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={CreateExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>  
    </div>
  </BrowserRouter>
);

export default AppRouter;