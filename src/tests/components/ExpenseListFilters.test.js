import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { DateRangePicker } from 'react-dates';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />)
});

test('should render expense list filter', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render expense list filter with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'bill';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should handle both dates change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')( 
    {
      startDate: altFilters.startDate,
      endDate: altFilters.endDate 
    }
  );

  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle start date change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')( 
    {
      startDate: altFilters.startDate,
    }
  );
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).not.toHaveBeenCalled();
});

test('should handle end date change', () => {

  wrapper.find('DateRangePicker').prop('onDatesChange')( 
    {
      endDate: altFilters.endDate 
    }
  );

  expect(setStartDate).not.toHaveBeenCalled();
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});


test('should handle date focus change', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');

  expect(wrapper.state('calendarFocusType')).toBe('startDate');
});