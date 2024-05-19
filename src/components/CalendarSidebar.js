import React from 'react';
import '../styles/CalendarSidebar.css';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import RecentStudents from './RecentStudents';

function CalendarSidebar({ datacount }) {
  return (
    <div className='calendarside-container'>
      <HeaderNavbar />
      <RecentStudents datacount={datacount} />
    </div>
  );
}

export default CalendarSidebar;

