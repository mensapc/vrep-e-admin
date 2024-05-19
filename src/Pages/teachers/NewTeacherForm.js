import React, { useRef, useState } from 'react';

import MobileNavbar from '../../components/MobileVersion/MobileNavbar';
import HeaderNavbar from '../../components/HeaderNavbar/HeaderNavbar';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import TeacherLogics from './teacherLogics';
import { classLogics } from '../../services';

function NewTeacherForm() {
  const { handleNewTeacher, handleBack } = TeacherLogics();
  const { getclasses } = classLogics();
  const [image, setImage] = useState();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const dateOfBirthRef = useRef();
  const placeOfBirthRef = useRef();
  const universityRef = useRef();
  const degreeRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const cityRef = useRef();
  const _classRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      image: image,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone_number: phoneRef.current.value,
      address: addressRef.current.value,
      dob: dateOfBirthRef.current.value,
      place_of_birth: placeOfBirthRef.current.value,
      university_name: universityRef.current.value,
      degree: degreeRef.current.value,
      start_date: startDateRef.current.value,
      end_date: endDateRef.current.value,
      university_location: cityRef.current.value,
      _class: _classRef.current.value,
    };
    handleNewTeacher(data);
  };

  return (
    <div className='teachers-container'>
      <MobileNavbar />
      <h3 className='mobile-title'>
        <Link to='/teachers' className='teachers-navbar-title--mobile-link'>
          <AiOutlineArrowLeft style={{ cursor: 'pointer' }} />
        </Link>

        <span> Add New Teacher</span>
      </h3>
      <div className='teachers-navbar'>
        <h3 className='teachers-navbar-title'>
          <Link to='/teachers' className='teachers-navbar-title-link'>
            <AiOutlineArrowLeft style={{ cursor: 'pointer' }} />
          </Link>

          <span>Add New Teacher</span>
        </h3>
        <HeaderNavbar />
      </div>

      <form onSubmit={handleSubmit}>
        <section className='form-box'>
          <h3>Personal Details</h3>
          <div>
            <div className='form-row'>
              <div className='input-data'>
                <label>First Name *</label>
                <input type='text' pattern="(?=.*[A-Za-z])[A-Za-z\s]+" title="Please enter a valid name (letters only)" placeholder='e.g John' ref={firstNameRef} required />
              </div>
              <div className='input-data'>
                <label>Last Name *</label>
                <input type='text' pattern="(?=.*[A-Za-z])[A-Za-z\s]+" title="Please enter a valid name (letters only)" placeholder='e.g Lee' ref={lastNameRef} required />
              </div>
            </div>

            <div className='form-row'>
              <div className='input-data'>
                <label>Email & Password *</label>
                <div className='doble-input-box'>
                  <input type='email' placeholder='john@gmail.com' ref={emailRef} required />
                  <input type='password' placeholder='****password' ref={passwordRef} required />
                </div>
              </div>
              <div className='input-data'>
                <label>Phone & Address *</label>
                <div className='doble-input-box'>
                  <input type='phone' pattern="[+]*[0-9]+" title="Please enter a valid Phone  (Numbers only)" placeholder='+123456789' ref={phoneRef} required />
                  <input
                    type='address'
                    placeholder='e.g str. Clean nr. 40'
                    ref={addressRef}
                    required
                    pattern="(?=.*[A-Za-z])[A-Za-z\s,0-9.\( \)']+" 
                    title="Please enter a valid Address ( Must include letters )"
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='input-data'>
                <label>Class to assign teacher *</label>
                {getclasses.data && (
                  <select ref={_classRef} className='Selects'>
                    {getclasses.data.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className='input-data'>
                <label>Photo *</label>
                <input
                  type='file'
                  accept='image/*'
                  placeholder='e.g str. Clean nr. 40'
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='input-data'>
                <label>Date of Birth *</label>
                <input type='date' ref={dateOfBirthRef} required />
              </div>
              <div className='input-data'>
                <label>Place of Birth *</label>
                <input
                  type='text'
                  placeholder='e.g Jakarta, Indonesia'
                  ref={placeOfBirthRef}
                  required
                  pattern="(?=.*[A-Za-z])[A-Za-z\s,0-9.\( \)']+" 
                  title="Please enter a valid Place ( Must include letters )"
                />
              </div>
            </div>
          </div>
        </section>

        <section className='form-box'>
          <h3>Education</h3>
          <div>
            <div className='form-row'>
              <div className='input-data'>
                <label>University *</label>
                <input
                  type='text'
                  placeholder='e.g University Akademi Historia'
                  ref={universityRef}
                  required
                  pattern="(?=.*[A-Za-z])[A-Za-z\s]+"  
                  title="Please enter a valid University Name  (letters only)"
                />
              </div>
              <div className='input-data'>
                <label>Degree *</label>
                <input type='text' pattern="(?=.*[A-Za-z])[A-Za-z\s]+"  title="Please enter a valid Degree   (letters only)" placeholder='e.g History Major' ref={degreeRef} />
              </div>
            </div>

            <div className='form-row'>
              <div className='input-data'>
                <label>Start & End Date *</label>
                <div className='doble-input-box'>
                  <input type='date' ref={startDateRef} required />
                  <input type='date' ref={endDateRef} required />
                </div>
              </div>
              <div className='input-data'>
                <label>City *</label>
                <input type='text' pattern="(?=.*[A-Za-z])[A-Za-z\s]+"  title="Please enter a valid City name (letters only)" placeholder='Lagos, Nigeria' ref={cityRef} required />
              </div>
            </div>
          </div>
        </section>
        <div className='form-btns'>
          <button style={{cursor: "pointer"}} onClick={handleBack}>Cancel</button>
          <button style={{cursor: "pointer"}} className='subButton'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewTeacherForm;


