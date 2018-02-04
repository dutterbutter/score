import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  
  import 'moment/locale/it';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
          selectedDay: undefined,
        };
      }

      handleDayChange(day) {
        let selectedDate = formatDate(day.toLocaleDateString())
        this.setState({ selectedDay: day });
        this.props.dateParserHandler(selectedDate)
      }

   

      render() {
        const { selectedDay } = this.state;
       
        return (
          <div>
            {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
            {!selectedDay && <p>Choose a day</p>}
            <DayPickerInput 
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                dayPickerProps={{
                    month: new Date(2018, 10),
                    showWeekNumbers: true,
                    todayButton: 'Today',
                    }}
                timeFormat={false}
                onDayChange={this.handleDayChange} />
          </div>
        );
      }
    }

export default DatePicker;

