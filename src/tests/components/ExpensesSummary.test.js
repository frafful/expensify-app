import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should not render summary if no expenses exists', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render Expense totals component correctly', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={100000}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});