import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocusType: null
    }
  }

  onDatesChange = ({startDate, endDate}) => {
    console.log(startDate);
    console.log(endDate);
    
    startDate && this.props.dispatch(setStartDate(startDate));
    endDate && this.props.dispatch(setEndDate(endDate));
  }

  onCalendarFocusChange = (focusedInput) => { 
    this.setState((state) => ({
      calendarFocusType: focusedInput
    }));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
        }} />
        <select 
          value={ this.props.filters.sortBy }
          onChange={(e) => {
            e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocusType} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onCalendarFocusChange} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);