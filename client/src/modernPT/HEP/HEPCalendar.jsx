import React, { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const HEPCalendar = ({ date, setDate, setStringDate }) => {

  useEffect (() => {
    const string = date.toString();
    setDate(string)

    let month = string.substring(4,7)
    let day = string.substring(8, 10)
    let year = string.substring(11, 15)

    switch (month) {
      case 'Jan':
        month = "01";
        break;
      case 'Feb':
        month = "02";
        break;
      case 'Mar':
        month = "03";
        break;
      case 'Apr':
        month = "04";
        break;
      case 'May':
        month = "05";
        break;
      case 'Jun':
        month = "06";
        break;
      case 'Jul':
        month = "07";
        break;
      case 'Aug':
        month = "08";
        break;
      case 'Sep':
        month = "09";
        break;
      case 'Oct':
        month = "10";
        break;
      case 'Nov':
        month = "11";
        break;
      case 'Dec':
        month = "12";
        break;
    }

    const dateSelected = year + '-' + month + '-' + day;
    setStringDate(dateSelected)

  }, [date])

  return (
    <div className= 'hep-page-calendar-container'>
      <h1>Calendar Component</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value = {dayjs(date)}
          onChange = {(value) => {
            setDate(value.$d.toString())
          }}
        />
      </LocalizationProvider>
    </div>
  )
}

export default HEPCalendar