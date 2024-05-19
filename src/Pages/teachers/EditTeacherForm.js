import React from "react";

import MobileNavbar from "../../components/MobileVersion/MobileNavbar";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TeacherLogics from "./teacherLogics";
import { classLogics } from "../../services";
import { useDispatch } from "react-redux";



function EditTeacherForm() {
  const { teachersData, handleBack, updateTeacher } = TeacherLogics();
  const { getclasses } = classLogics();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  let teacher = ""

  if( teachersData.status === "fulfilled") {
    teacher = teachersData.data.filter((e) => e._id === id)
  }

 
  
const dateString = teacher[0]?.dob;
const dateObject = new Date(dateString);

const year = dateObject.getFullYear();
const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-based
const day = String(dateObject.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;



const startDateString = teacher[0]?.start_date;
const startDateObject = new Date(startDateString);

const startYear = startDateObject.getFullYear();
const startMonth = String(startDateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-based
const startDay = String(startDateObject.getDate()).padStart(2, "0");

const startFormattedDate = `${startYear}-${startMonth}-${startDay}`;


const endDateString = teacher[0]?.end_date;
const endDateObject = new Date(endDateString);

const endYear = endDateObject.getFullYear();
const endMonth = String(endDateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-based
const endDay = String(endDateObject.getDate()).padStart(2, "0");

const endFormattedDate = `${endYear}-${endMonth}-${endDay}`;


const handleEditTeacherFrom = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const updatedData = Object.fromEntries(formData.entries());

  // Dispatch an action to update the teacher
  dispatch(updateTeacher({ id, data: updatedData }));

  navigate('/teachers');
}



  return (
    <>
    {
      teachersData.status === "fulfilled" && <> <div className="teachers-container">
      <MobileNavbar />
      <h3 className="mobile-title">
        <Link to="/teachers" className="teachers-navbar-title--mobile-link">
          <AiOutlineArrowLeft style={{ cursor: "pointer" }} />
        </Link>

        <span>Edit Teacher</span>
      </h3>
      <div className="teachers-navbar">
        <h3 className="teachers-navbar-title">
          <Link to="/teachers" className="teachers-navbar-title-link">
            <AiOutlineArrowLeft style={{ cursor: "pointer" }} />
          </Link>

          <span>Edit Teacher</span>
        </h3>
        <HeaderNavbar />
      </div>

      <form onSubmit={handleEditTeacherFrom}>
        <section className="form-box">
          <h3>Personal Details</h3>
          <div>
            <div className="form-row">
              <div className="input-data">
                <label>First Name *</label>
                <input
                  type="text"
                  pattern="(?=.*[A-Za-z])[A-Za-z\s]+"
                  title="Please enter a valid name (letters only)"
                  placeholder="e.g John"
                  required
                  defaultValue={teacher[0]?.first_name}
                />
              </div>
              <div className="input-data">
                <label>Last Name *</label>
                <input
                  type="text"
                  pattern="(?=.*[A-Za-z])[A-Za-z\s]+"
                  title="Please enter a valid name (letters only)"
                  placeholder="e.g Lee"
                  defaultValue={teacher[0]?.last_name}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <label>Email *</label>
                <div className="doble-input-box">
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    defaultValue={teacher[0]?.email}
                    required
                    disabled
                  />
                </div>
              </div>
              <div className="input-data">
                <label>Phone & Address *</label>
                <div className="doble-input-box">
                  <input
                    type="phone"
                    pattern="[+]*[0-9]+"
                    title="Please enter a valid Phone  (Numbers only)"
                    placeholder="+123456789"
                    defaultValue={teacher[0]?.phone_number}
                    required
                  />
                  <input
                    type="address"
                    placeholder="e.g str. Clean nr. 40"
                    defaultValue={teacher[0]?.address}
                    required
                    pattern="(?=.*[A-Za-z])[A-Za-z\s,0-9.\( \)']+"
                    title="Please enter a valid Address ( Must include letters )"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <label>Class to assign teacher *</label>
                {getclasses.data && (
                  <select
                    defaultValue={teacher[0]?._class._id}
                    className="Selects"
                  >
                    {getclasses.data.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="input-data">
                <label>Photo *</label>
                <input
                  type="file"
                  accept="image/*"
                  placeholder="e.g str. Clean nr. 40"
                  
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  defaultValue={formattedDate}
                  required
                />
              </div>
              <div className="input-data">
                <label>Place of Birth *</label>
                <input
                  type="text"
                  placeholder="e.g Jakarta, Indonesia"
                  defaultValue={teacher[0]?.place_of_birth}
                  required
                  pattern="(?=.*[A-Za-z])[A-Za-z\s,0-9.\( \)']+"
                  title="Please enter a valid Place ( Must include letters )"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="form-box">
          <h3>Education</h3>
          <div>
            <div className="form-row">
              <div className="input-data">
                <label>University *</label>
                <input
                  type="text"
                  placeholder="e.g University Akademi Historia"
                  defaultValue={teacher[0]?.university_name}
                  required
                  pattern="(?=.*[A-Za-z])[A-Za-z\s]+"
                  title="Please enter a valid University Name  (letters only)"
                />
              </div>
              <div className="input-data">
                <label>Degree *</label>
                <input
                  type="text"
                  pattern="(?=.*[A-Za-z])[A-Za-z\s]+"
                  title="Please enter a valid Degree   (letters only)"
                  placeholder="e.g History Major"
                  defaultValue={teacher[0]?.degree}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <label>Start & End Date *</label>
                <div className="doble-input-box">
                  <input
                    type="date"
                    value={startFormattedDate}
                    required
                  />
                  <input
                    type="date"
                    value={endFormattedDate}
                    required
                  />
                </div>
              </div>
              <div className="input-data">
                <label>City *</label>
                <input
                  type="text"
                  pattern="(?=.*[A-Za-z])[A-Za-z\s]+"
                  title="Please enter a valid City name (letters only)"
                  placeholder="Lagos, Nigeria"
                  defaultValue={teacher[0]?.university_location}
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <div className="form-btns">
          <button style={{ cursor: "pointer" }} onClick={handleBack}>
            Cancel
          </button>
          <button style={{ cursor: "pointer" }} className="subButton">
            Save
          </button>
        </div>
      </form>
    </div>
    </>
    }
    </>
  );
}

export default EditTeacherForm;

