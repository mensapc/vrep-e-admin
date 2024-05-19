import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import GenerateAvatar from '../../util/generateAvatar';

const StudentGradeCard = ({ student, _class, school_term, academic_year }) => {
  return (
    <div className='single-result-card'>
      <div className='avatar-container'>
        {student.photo ? (
          <img className='avatar-image' src={student.photo} alt={student.first_name} />
        ) : (
          <GenerateAvatar profile={student} width={'100%'} height={'100%'} fontSize={'25px'} />
        )}
      </div>
      <div className='single-card-title' style={{ textAlign: 'center' }}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
        <p>ID: {student.reg_number}</p>
      </div>
      <div className='single-card-icons'>
        <button>
          <TfiEmail />
        </button>
        <button>
          <FiPhone />
        </button>
      </div>

      <div className='result-btn-card'>
        <Link style={{textDecoration: 'none'}} to={`/results/${_class}/${school_term}/${academic_year}/${student._id}`}>
          <button>Open</button>
        </Link>
      </div>
    </div>
  );
};

export default StudentGradeCard;

