import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('Should setup text filter action object.', () => {
  const action = setTextFilter('bill');

  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    ...action,
    text: 'bill'
  });
});

test('Should setup text filter action object with default value.', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    ...action,
    text: ''
  });
});


test('Should setup sort by amount action object.', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    ...action,
  });
});

test('Should setup sort by date action object.', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    ...action,
  });
});

test('Should setup startDate filter action object.', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('Should setup endDate filter action object.', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});