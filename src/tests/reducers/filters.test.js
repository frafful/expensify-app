import moment from 'moment';
import filterReducer from '../../reducers/filters';
import filters from '../../reducers/filters';
import { currentId } from 'async_hooks';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual({ 
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

test('should set dort by date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  
  const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('shoud set text filter', () => {
  const currentState = {
    text: 'abc',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }

  const action = { 
    type: 'SET_FILTER_TEXT',
    text: 'def'
  }

  const state = filterReducer(currentState, action);
  expect(state.text).toBe('def');
});

test('should set start date filter', () => {
  const currentState = {
    text: '',
    startDate: moment().subtract(3, 'days'),
    endDate: undefined,
    sortBy: 'amount'
  }

  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0)
  };

  const state = filterReducer(currentState, action);
  expect(state.startDate).toEqual(moment(0));
});

test('should set end date filter.', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate:  moment().subtract(3, 'days'),
    sortBy: 'amount'
  };

  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0)
  };

  const state = filterReducer(currentState, action);
  expect(state.endDate).toEqual(moment(0));
});
