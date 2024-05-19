import React from 'react';
import '../styles/SingleTeacherDetails.css';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import GenerateAvatar from '../util/generateAvatar';
import { dateFormat } from '../lib/momentFormat';

export default function SingleTeacherDetails({ teacher, onClose }) {
  return (
    <div className='teacher-details'>
      <Link to='/teachers' className='modal-link' style={{textDecoration: 'none'}}>
        <IoMdClose className='arrow-icon' onClick={onClose} />
      </Link>
      <div className='teacher-details-card'>
        <div className='avatar-container'>
          {teacher.photo ? (
            <img className='avatar-image' src={teacher?.photo} alt='' />
          ) : (
            <GenerateAvatar profile={teacher} width={'100%'} height={'100%'} fontSize={'20px'} />
          )}
        </div>
        <h2>{teacher.first_name}</h2>
        <p>{teacher.course?.name}Teacher</p>
        <p>{teacher._class?.name}</p>
      </div>

      <section className='personal-details'>
        <h3>Personal Details</h3>
        <section className='personal-details-main-card'>
          <div>
            <p>Email</p>
            <span>{teacher.email}</span>
          </div>
          <div>
            <p>Phone</p>
            <span>{teacher.phone_number}</span>
          </div>
          <div>
            <p>Address</p>
            <span>{teacher.address}</span>
          </div>
          <div>
            <p>Age</p>
            <span>{teacher.age}</span>
          </div>
          <div>
            <p>Place of Birth</p>
            <span>{teacher.place_of_birth}</span>
          </div>
        </section>
      </section>

      <section className='education'>
        <h3>Education</h3>
        <section className='personal-details-main-card'>
          <div>
            <p>University</p>
            <span>{teacher.university_name}</span>
          </div>
          <div>
            <p>Degree</p>
            <span>{teacher.degree}</span>
          </div>
          <div>
            <p>City</p>
            <span>{teacher.university_location}</span>
          </div>
          <div>
            <p>Start Date</p>
            <span>{dateFormat(teacher.start_date)}</span>
          </div>
          <div>
            <p>End Date</p>
            <span>{dateFormat(teacher.end_date)}</span>
          </div>
        </section>
      </section>
    </div>
  );
}

