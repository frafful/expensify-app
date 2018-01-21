import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenses[2]
    }
  })
});

test('should add expense to database and store.', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'Better one',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test('should add expense with defaults to database and store.', (done) => {
  const store = createMockStore({});
  const defaultExpense = {
    description: '',
    note: '', 
    amount: 0, 
    createdAt: 0 
  };

  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
  });
});
