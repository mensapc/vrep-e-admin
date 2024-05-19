import React from "react";
import "../styles/CalendarTable.css";
import Calendar from "react-calendar";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function CalendarTable() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h3>School Calendar</h3>
      <h1 className="calendar-mobile-title">
        Calendar
        <Link to='/newEvent'>
          <button className="calendar-mobile-btn">
            <FiPlus/>
          </button>
        </Link>
      </h1>
      
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default CalendarTable;
