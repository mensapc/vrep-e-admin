import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Students.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MobileNavbar from "../../components/MobileVersion/MobileNavbar";
import StudentLogics from "./studentLogics";
import GenerateAvatar from "../../util/generateAvatar";
import { attendanceLogics } from "../../services";
import { Switch } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

function StudentRootLayout() {
  const { handleSingleStudent, singlestudent } = StudentLogics();
  const { handleSearchAttendance, getattendance } = attendanceLogics();
  const { studentId, classId } = useParams();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    handleSingleStudent(studentId);
    handleSearchAttendance({
      student: studentId,
      _class: classId,
      academic_year: new Date().getFullYear(),
    });
  }, []);

  return (
    <div className="profile-container">
      <MobileNavbar />
      <h2 className="profile-title-icon">
        <Link to="/pupils">
          <AiOutlineArrowLeft className="arrow-left" />
        </Link>
        Pupil Profile
      </h2>
      <section>
        {singlestudent.status === "pending" && <span>loading...</span>}
        {singlestudent.status === "fulfilled" && (
          <div className="profile-details">
            <div className="img-profile">
              {singlestudent.data.photo ? (
                <img src={singlestudent.data.photo} alt="profile" />
              ) : (
                <GenerateAvatar
                  profile={singlestudent.data}
                  width={"150px"}
                  height={"172px"}
                  fontSize={"25px"}
                  borderRadius={"5px"}
                />
              )}
              <div className="profile-info-mobile">
                <h2>
                  {singlestudent.data.first_name} {singlestudent.data.last_name}
                </h2>
                <p>Pupil ID: {singlestudent.data.reg_number} </p>
                <p>Gender: {singlestudent.data.gender} </p>
                <p>Class: {singlestudent.data._class?.name}</p>
              </div>
            </div>
            <div className="profile-info">
              <h2>
                {singlestudent.data.first_name} {singlestudent.data.last_name}
              </h2>
              <p>Pupil ID: {singlestudent.data.reg_number} </p>
              <p>Gender: {singlestudent.data.gender} </p>
              <p>Class: {singlestudent.data._class?.name}</p>
            </div>
            <div
              className="restiricted-mobile-btn"
              style={{ display: "flex", gap: 10, marginLeft: "auto" }}
            >
              <FormControlLabel
                value="end"
                control={
                  <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                  />
                }
                label="Restricted"
                labelPlacement="end"
                style={{ marginBottom: "auto" }}
              />
            </div>
          </div>
        )}
        {singlestudent.status === "rejected" && (
          <span>{singlestudent.error.message}</span>
        )}

        {getattendance.status === "pending" && <span>loading...</span>}
        {getattendance.status === "fulfilled" && (
          <div className="attendance-section">
            <h2>Attendance</h2>
            <div>
              <p className="percentage">{getattendance.data.percentage}%</p>
              <p>
                <span className="special">
                  {getattendance.data.present_days}
                </span>
                /{getattendance.data.total_days}
              </p>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${getattendance.data.percentage}%` }}
              ></div>
            </div>
          </div>
        )}
        {getattendance.status === "rejected" && (
          <span>{getattendance.error.message}</span>
        )}
      </section>
      <div className="student-info">
        <nav>
          <NavLink to="" end>
            General
          </NavLink>
          <NavLink to="exams">Exams</NavLink>
          <NavLink to="classes">Results</NavLink>
          <NavLink className="mobile-remark-side" to="teacher-remarks">
            Teachers Remark
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default StudentRootLayout;
