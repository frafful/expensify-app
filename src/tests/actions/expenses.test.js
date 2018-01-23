import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense, 
  editExpense, 
  removeExpense, 
  setExpenses, 
  startAddExpense, 
  startEditExpense,
  startRemoveExpense,
  startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'testUid';

beforeEach((done) => {
  let expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  });
  
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => {
    done();
  });
});

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
  const store = createMockStore({
    auth: {
      uid: uid
    }
  });
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

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test('should add expense with defaults to database and store.', (done) => {
  const store = createMockStore({
    auth: {
      uid: uid
    }
  });
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

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
  });
});

test('should set expenses object action with data', () => {
  expect(setExpenses(expenses)).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({
    auth: {
      uid: uid
    }
  });

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('should remove item from firebase', (done) => {
  const store = createMockStore({
    auth: {
      uid: uid
    }
  });
  
  store.dispatch(startRemoveExpense({ id: expenses[0].id })).then(() => {
    const actions = store.getActions();
    const id = expenses[0].id;
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id 
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toBeNull();
      done();
    });
  });
});

test('should edit item in database', (done) => {
  const store = createMockStore({
    auth: {
      uid: uid
    }
  });
  const id = expenses[0].id;
  const updates = {
    description: 'Updated description',
    note: 'New Note',
    amount: 25.90,
    createdAt: -2500
  };
  
  store.dispatch(startEditExpense({ id }, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(updates);
      done();
    });
  });
});