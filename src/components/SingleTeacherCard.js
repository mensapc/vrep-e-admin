import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import "../Pages/teachers/Teachers.css";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import Modal from "./Modal";
import SingleTeacherDetails from "./SingleTeacherDetails";
import { Link } from "react-router-dom";
import GenerateAvatar from "../util/generateAvatar";
import Dropdown from "react-bootstrap/Dropdown";

function SingleTeacherCard({
  teacher,
  handleDeleteTeacher,
  handleCheckboxChange,
  teacherId,
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openCardId, setOpenCardId] = useState(null); 

  const handleToggleEdit = (_id) => {
    setOpenEdit(!openEdit);
    console.log(setOpenCardId(teacher._id));
    setOpenCardId(teacher._id); 
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleCheckbox = (e, teacherId) => {
    handleCheckboxChange(e, teacherId);
  };

  const handleClickPhone = () => {
    const telURI = `tel:${teacher.phoneNumber}`;
    window.open(telURI);
  };

  const handleClickEmail = () => {
    const mailtoURI = `mailto:${teacher.email}`;
    window.open(mailtoURI);
  };

  return (
    <>
      <div className="single-card">
        <input
          onChange={(e) => handleCheckbox(e, teacherId)}
          type="checkbox"
          className="checkBox"
        />
        <span className="result-dot">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <PiDotsThreeOutlineVerticalFill color="grey" fontSize={24} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item style={{borderBottom: '1px solid black'}}>
                <Link style={{textDecoration: 'none'}} to={`/teachers/edit/${teacher._id}`}>Edit</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleDeleteTeacher(teacher._id)}>
                Deactive
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
        <Link
          to={openModal ? "/teachers/details" : ""}
          className="teachers-card-link"
        >
          <div onClick={handleModalOpen} className="avatar-container">
            {teacher.photo ? (
              <img
                className="avatar-image"
                src={teacher.photo}
                onClick={handleToggleEdit}
                alt=""
              />
            ) : (
              <GenerateAvatar
                profile={teacher}
                width={"100%"}
                height={"100%"}
                fontSize={"20px"}
                onClick={handleToggleEdit}
              />
            )}
          </div>
        </Link>
        <div className="single-card-title" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "22px" }} className=" teacherName">
            {teacher?.first_name} {teacher?.last_name}
          </h3>
          <p className=" teacherClass">{teacher._class?.name}</p>
        </div>
        <div className="contactTeacher">
          <button style={{ cursor: "pointer" }} onClick={handleClickPhone}>
            <FiPhone className="contactTeacherSons" />
          </button>
          <button style={{ cursor: "pointer" }} onClick={handleClickEmail}>
            <TfiEmail className="contactTeacherSons" />
          </button>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <SingleTeacherDetails
          teacher={teacher}
          onClose={() => setOpenModal(false)}
        />
      </Modal>
    </>
  );
}

export default SingleTeacherCard;


