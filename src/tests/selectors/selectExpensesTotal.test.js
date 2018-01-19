import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/selectExpensesTotal';


test('should return 0', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should sum all amount items', () => {
  const result = selectExpensesTotal(expenses);
  //114195
  expect(result).toBe(114195);
});
