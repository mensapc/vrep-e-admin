import { useState } from 'react';
import { AiFillCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import Modal from './Modal';
import ExamResultDetails from '../components/ExamResultDetails';
import { Link } from 'react-router-dom';
import { getExamBadge } from '../util/dataCalculations';
import { hourMinutesFormat, dateFormat } from '../lib/momentFormat';

function SingleExamCard({ data }) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  return (
    <div className="exam-card-container">
      <div className="exam-card-title">
        <h3>{data.course.name}</h3>
        <span style={{ backgroundColor: `${getExamBadge(data.percentage).color}` }}>
          {getExamBadge(data.percentage).status}
        </span>
      </div>
      <p>
        Subject Teacher :{' '}
        {data.staff ? `${data.staff?.first_name} ${data.staff?.last_name}` : 'replaced'}
      </p>
      <p>
        <AiFillCalendar className="exam-card-icon" />
        {dateFormat(data.start_date)}
      </p>
      <p>
        <AiOutlineClockCircle className="exam-card-icon" />
        {hourMinutesFormat(data.start_date)} - {hourMinutesFormat(data.end_date)}
      </p>
      <p className="percentage">
        Passing Percentage <span className="approved">70%</span>
      </p>
      <p className="percentage">
        Scored Percentage{' '}
        <span style={{ color: `${getExamBadge(data.percentage).color}` }}>{data.percentage}%</span>
      </p>
      <Link
        onClick={handleModalOpen}
        to={openModal ? '/resultDetails' : ''}
        className="view-details-link"
      >
        View Details
      </Link>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ExamResultDetails data={data} onClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default SingleExamCard;

