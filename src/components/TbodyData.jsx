import React from 'react';
import { Link } from 'react-router-dom';
import GenerateAvatar from '../util/generateAvatar';
import { dateFormat } from '../lib/momentFormat';

const TbodyData = ({ students, studentsDeletionIds, handleCheckboxChange }) => {
  const handleCheckbox = (e, studentId) => {
    handleCheckboxChange(e, studentId);
    studentsDeletionIds(e, studentId);
  };

  return (
    <>
      {students.map((student) => (<>
        <div className='DT'>
        <tr key={student.reg_number}>
          <td style={{ width: '30%' }}>
            <input type="checkbox" onChange={(e) => handleCheckbox(e, student._id)} />
            <div className="avatar-container">
              {student.photo ? (
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="avatar-image"
                  src={student.photo}
                  alt={student.first_name}
                />
              ) : (
                <GenerateAvatar profile={student} width="40px" height="40px" fontSize="14px" />
              )}
            </div>
            <Link
              style={{ color: '#303972', fontWeight: '600' }}
              to={`/pupils/${student._id}/${student._class._id}`}
            >
              {student?.first_name}
            </Link>
          </td>
          <td className="table-id">{student?.reg_number}</td>
          <td className="table-date">{dateFormat(students.created_at)}</td>
          <td className="table-dob">{student?.age}</td>
          <td className="table-teacher">{student._class?.staff?.first_name || 'No Teacher yet'}</td>
          <td>
            <span className="table-class">{student._class?.name}</span>
          </td>
        </tr>
        </div>

        <div className='MT'>
        <tr key={student.reg_number}>
        <div className=' sui'>
          <div>
          <td style={{ width: '30%' }}>
            <input type="checkbox" onChange={(e) => handleCheckbox(e, student._id)} />
            <div className="avatar-container">
              {student.photo ? (
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="avatar-image"
                  src={student.photo}
                  alt={student.first_name}
                />
              ) : (
                <GenerateAvatar profile={student} width="40px" height="40px" fontSize="14px" />
              )}
            </div>
            </td>
            </div>
            <div className='sui2'>
            <Link
              style={{ color: '#303972', fontWeight: '600' }}
              to={`/pupils/${student._id}/${student._class._id}`}
            >
              {student?.first_name}
            </Link>
          <td className="table-id">{student?.reg_number}</td>
          <td className="table-date">{dateFormat(students.created_at)}</td>
          <td className="table-dob">{student?.age}</td>
          <td className="table-teacher">{student._class?.staff?.first_name || 'No Teacher yet'}</td>
          <td>
          {student._class?.name}
          </td>
          </div>
          </div>
        </tr>
        </div>
        </>
      ))}
    </>
  );
};

export default TbodyData;

