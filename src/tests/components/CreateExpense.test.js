import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CreateExpense } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<CreateExpense startAddExpense={startAddExpense} history={history} />);
});

test('should render CreateExpense correctly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[2]);
});