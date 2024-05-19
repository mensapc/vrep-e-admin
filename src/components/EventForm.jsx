import React from 'react'
import '../styles/EventForm.css'
import MobileNavbar from './MobileVersion/MobileNavbar'
import { Link } from 'react-router-dom'

const EventForm = ({ onClose }) => {
  return (
    <div className='event-form-main'>
        <MobileNavbar/>
        <h3 className='event-form-title'>New Event</h3>
        <h2>Create Event</h2>

        <form action="#">
            <div className='event-input-box'>
              <label htmlFor="">Event title</label>
              <input type="text" required/>
            </div>
            <div className='event-input-box'>
              <label htmlFor="">Event Date</label>
              <input type="date" required/>
            </div>
            <div className='event-input-box'>
              <label htmlFor="">Location</label>
              <input type="text" required/>
            </div>
            <div className='event-input-box'>
              <label htmlFor="">About Event</label>
              <input type="text" required/>
            </div>
            <div className='event-input-box'>
              <Link to='/events'>
                <button onClick={onClose} className='event-cancel-btn'>Cancel</button>
              </Link>
                <button className='save-cancel-btn'>Save</button>
            </div>
            
        </form>
    </div>
  )
}

export default EventForm
