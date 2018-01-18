import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});
 
test('Should setup edit expense action object', () => {
  const expected = { amount: 999, description: 'Test 123', note: "It's  note.", createdAt: 10  };
  const action = editExpense('123abc', expected);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: expected
  });
});

test('Should setup add expense action object with provided values.', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'Last month rent'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('Should setup add expense action with default values.', () => {
  const action = addExpense();
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});