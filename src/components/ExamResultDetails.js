import React from 'react';
import '../styles/ExamResultDetails.css';
import {
  AiOutlineArrowLeft,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineClockCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GenerateAvatar from '../util/generateAvatar';
import { dateFormat, hourMinutesFormat } from '../lib/momentFormat';
import { getExamBadge } from '../util/dataCalculations';

function ExamResultDetails({ onClose, data }) {
  return (
    <>
      {/* Desktop item */}
      <div className="exam-result-container">
        <section className="exam-details">
          <h2>
            <AiOutlineArrowLeft onClick={onClose} />
            Exam Result Details
          </h2>
          <div>
            <section className="pupil-exam">
              <h3>
                {data.student?.photo ? (
                  <img src={data.student.photo} alt="" />
                ) : (
                  <GenerateAvatar
                    profile={data.student}
                    width={'150px'}
                    height={'172px'}
                    fontSize={'25px'}
                    borderRadius={'5px'}
                  />
                )}
                {data.student.first_name} {data.student.last_name}
              </h3>
              <h4>
                <AiOutlineBook size={60} />
                Final Exam Result
              </h4>
              <p>Release Date:</p>
              <span>
                <AiOutlineCalendar />
                {dateFormat(data.created_at)}
              </span>
              <span>
                <AiOutlineClockCircle />
                {hourMinutesFormat(data.created_at)}
              </span>
            </section>
            <section className="exam-detail-section">
              <div>
                <h2>Subject</h2>
                <p>{data.course.name}</p>
              </div>
              <div>
                <h2>Pupil ID</h2>
                <p>{data.student.reg_number}</p>
              </div>
              <div>
                <h2>Gender</h2>
                <p>{data.student.gender}</p>
              </div>
              <div>
                <h2>Class</h2>
                <p>{data._class.name}</p>
              </div>
              <div className="table">
                <p>Total Number of Attempts</p> <span>1 Attempt</span>
                <p>Attempted on</p>
                <span>{dateFormat(data.updated_at)}</span>
                <p>Status</p>
                <span>{getExamBadge(data.percentage).status}</span>
              </div>
            </section>
          </div>
        </section>
        <section className="results-section">
          <div>
            <h2>Score</h2>
            <p>
              {data.score}
              <span>/{data.total}</span>
            </p>
          </div>
          <div>
            <h2>Percentage</h2>
            <p>
              {data.percentage}
              <span>%</span>
            </p>
          </div>
          <div>
            <h2>Grade</h2>
            <p>N/A</p>
          </div>
        </section>
      </div>
      {/* Desktop item */}

      {/* Mobile item */}

      <div className="exam-result-mobile-container">
        <Link style={{ color: 'black' }} to="/pupils/resultDetails/classes">
          <AiOutlineArrowLeft size={22} />
        </Link>
        <h2 className="exam-mobile-result-title">Exam Result Details</h2>

        <div className="exam-mobile-pupils-details">
          {data.student?.photo ? (
            <img src={data.student.photo} alt="" />
          ) : (
            <GenerateAvatar
              profile={data.student}
              width={'150px'}
              height={'172px'}
              fontSize={'25px'}
              borderRadius={'5px'}
            />
          )}

          <div className="mobile-pupils-title">
            <h2>
              {data.student.first_name} {data.student.last_name}
            </h2>
            <p>Pupil ID: {data.student.reg_number}</p>
            <p>Gender : {data.student.gender}</p>
            <p>Class : {data._class?.name}</p>
          </div>
        </div>

        <div className="exam-mobile-time-details">
          <p>Release Date:</p>
          <p>
            <AiOutlineCalendar />
            <span>{dateFormat(data.created_at)}</span>
          </p>
          <p>
            <AiOutlineClockCircle />
            <span>{hourMinutesFormat(data.created_at)}</span>
          </p>
        </div>

        <div className="exam-mobile-table">
          <div className="mobile-table-row">
            <div className="table-row-left border-left">
              <p>Total Number of Attempts</p>
            </div>
            <div className="table-row-right">
              <p>1 Attempt</p>
            </div>
          </div>
          <div className="mobile-table-row">
            <div className="table-row-left">
              <p>Attempted on</p>
            </div>
            <div className="table-row-right">
              <p>{dateFormat(data.updated_at)}</p>
            </div>
          </div>
          <div className="mobile-table-row">
            <div className="table-row-left border-right">
              <p>Status</p>
            </div>
            <div className="table-row-right none-border">
              <p>{getExamBadge(data.percentage).status}</p>
            </div>
          </div>
        </div>

        <div className="mobile-exam-results-section">
          <div className="section-row">
            <div className="section-row-up">
              <p>Score</p>
            </div>
            <div className="section-row-down">
              <div className="section-row-circle">
                <p>
                  {data.score}/{data.total}
                </p>
              </div>
            </div>
          </div>

          <div className="section-row">
            <div className="section-row-up">
              <p>Percentage</p>
            </div>
            <div className="section-row-down">
              <div className="section-row-circle">
                <p>{data.percentage}%</p>
              </div>
            </div>
          </div>

          <div className="section-row">
            <div className="section-row-up">
              <p>Grade</p>
            </div>
            <div className="section-row-down">
              <div className="section-row-circle row-circle-title">
                <p>N/A</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-exam-grades">
          <div className="exam-grades-row">
            <div className="grades-circle bg-red"></div>
            <p>0-50</p>
          </div>
          <div className="exam-grades-row">
            <div className="grades-circle bg-green"></div>
            <p>51-75</p>
          </div>
          <div className="exam-grades-row">
            <div className="grades-circle bg-blue"></div>
            <p>76-100</p>
          </div>
        </div>
      </div>

      {/* Mobile item */}
    </>
  );
}

export default ExamResultDetails;

