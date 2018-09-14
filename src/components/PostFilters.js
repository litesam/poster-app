import React from 'react'
import { connect } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { 
  setTextFilter, 
  setStartDate, 
  setEndDate
} from '../actions/filters'

class PostFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
   
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder="Search"
        />
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="startDate"
          endDate={this.props.filters.endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostFilters)