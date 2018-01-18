import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocusType: null
    }
  }

  onDatesChange = ({startDate, endDate}) => {
    startDate && this.props.setStartDate(startDate);
    endDate && this.props.setEndDate(endDate);
  };

  onCalendarFocusChange = (focusedInput) => { 
    this.setState((state) => ({
      calendarFocusType: focusedInput
    }));
  };

  onSortChange = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
        <select 
          value={ this.props.filters.sortBy }
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} 
          endDate={this.props.filters.endDate} 
          onDatesChange={this.onDatesChange} 
          focusedInput={this.state.calendarFocusType}
          onFocusChange={this.onCalendarFocusChange} 
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
  };
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);