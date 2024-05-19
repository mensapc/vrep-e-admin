import React, { useEffect } from "react";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { StudentLogics } from "../Pages/students";
import GenerateAvatar from "../util/generateAvatar";
import { FaChevronRight } from "react-icons/fa";

const RecentStudents = ({ datacount }) => {
  const { getstudents, handleStudentsSort } = StudentLogics();
  useEffect(() => {
    handleStudentsSort("date");
  }, []);
  return (
    <>
      <section className="recent-students">
        <h3>
          <p style={{paddingTop: '8px'}}>Recent Pupils</p>
          {datacount?.status === "pending" && <span>loading...</span>}
          {datacount?.status === "fulfilled" && (
            <span>You have {datacount.data.students} students</span>
          )}
          {datacount?.status === "rejected" && (
            <span>{datacount.error.message}</span>
          )}
          <Link to="/pupils/new">
            <div className="avatar-container">
              <button style={{ cursor: "pointer" }} className="plus-btn">
                <TiPlus />
              </button>
            </div>
          </Link>
        </h3>
        <ul>
          {getstudents?.status === "pending" && <span>loading...</span>}
          {getstudents?.status === "fulfilled" &&
            getstudents.data.slice(0, 5).map((student) => (
              <li>
                <section>
                  <div className="avatar-container">
                    {student.photo ? (
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        className="avatar-image"
                        src={student.photo}
                        alt={student.first_name}
                      />
                    ) : (
                      <GenerateAvatar
                        profile={student}
                        fontSize="16px"
                      />
                    )}
                  </div>
                  <p>
                    {student.first_name}
                    <br />
                    <span>{student?._class?.name}</span>
                  </p>
                </section>
                <Link to={`/pupils/${student._id}/${student._class._id}`} className="mail-icon" style={{textDecoration: 'none'}}>       
                    <FaChevronRight
                      fontSize={20}
                      color="#A098AE"
                    />
                </Link>
              </li>
            ))}
          {getstudents?.status === "rejected" && (
            <span>{getstudents.error.message}</span>
          )}
        </ul>
        <Link to="/pupils">
          <button className="view-more-btn">View More</button>
        </Link>
      </section>
    </>
  );
};

export default RecentStudents;
