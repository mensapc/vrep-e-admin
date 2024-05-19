import ProfileIcon from "../assets/student-profile.png";
import Clock from "../assets/clock-icon.png";
import Calendar from "../assets/calendar-icon.png";
import "../styles/examResults.css";
import MobileNavbar from "../components/MobileVersion/MobileNavbar";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ExamResult({ onClose }) {
  return (
    <>
      <div className="exam-result-page-main">
        <MobileNavbar/>
        <Link to='/pupils/exams'>
            <button className="exam-result-left-icon">
                <FaArrowLeft/>
            </button>
        </Link>
        
        <div className="exam-result-page-content">
          <div className="row">
            <h1>Exam Result Details</h1>
            <p className="blue-badge">
              Result Declared on 12:30 AM | 22 September 2023
            </p>
          </div>
          <div className="row">
            <div className="profile">
                <div>
                  <img src={ProfileIcon} alt="A boy with a nice fade smiling" />
                </div>
                <div className="profile-pupils-exam-details">
                  <div>
                    <p className="bolder-text">Dara Ejibo</p>
                    <p className="bolder-text">Pupil ID : TIPSG5682</p>
                    <p className="bolder-text">Gender : Male</p>
                  </div>
                  <div className="text">
                  <p>
                    Class : <span className="bolder-text">Grade 4</span>
                  </p>
                  <p>
                    Subject : <span className="bolder-text">Mathematics</span>
                  </p>
                </div>
                </div>
                
            </div>
          </div>
          <div className="exam-details-lesson">
            <h2>Mathematics Exam</h2>

            <div className="three">
              <div className="row-card">
                <img src={Clock} alt="A gray clock" />
                <p className="gray-text">12:40 PM</p>
              </div>
              <div className="row-card row-mrg">
                <img src={Calendar} alt="A gray Calendar icon" />
                <p className="gray-text">03 Jan 2023</p>
              </div>
              
              <p className="green-badge">Status: Pass</p>
            </div>

            <div className="row four">
            <p>
              Student's Score: <span className="green-text">32/50</span>
            </p>
            <p>
              Student's Percentage: <span className="green-text">64%</span>
            </p>
          </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
}
