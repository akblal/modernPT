import React, { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

const HEPCalendar = ({ date, setDate }) => {

  useEffect (() => {
    if(typeof date != 'string')  {
      const string = date.toString();
      setDate(string)
      let month = '';
      let day = '';
      let year = '';
      if (string.indexOf(',') > 0) {
        month = string.substring(8,11)
        day = string.substring(5,7)
        year = string.substring(12,16)
      } else {
        month = string.substring(4,7)
        day = string.substring(8, 10)
        year = string.substring(11, 15)
      }

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
      console.log ( year + '-' + month + '-' + day )
    }
  }, [date])

  return (
    <div className= 'hep-page-calendar-container'>
      <h1>Calendar Component</h1>
      {typeof date === 'string' ?
      <h1>{date}</h1> :
      <h1>not string</h1>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          value = {dayjs(date)}
          onChange = {(value) => {
            const temp = value
            setDate(temp)
          }}
          inputFormat="dd-MM-yyyy"
          renderInput={(params) => <TextField {...params} fullWidth />}
          />
      </LocalizationProvider>

    </div>
  )
}

export default HEPCalendar