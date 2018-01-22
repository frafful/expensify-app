import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let wrapper, startEditExpense, startRemoveExpense, history;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(
  <EditExpense 
    expense={expenses[0]} 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense}
    history={history} 
  />);
});

test('should render edit expense page', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle click to remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});