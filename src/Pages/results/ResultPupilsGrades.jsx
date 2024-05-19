import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import HeaderNavbar from '../../components/HeaderNavbar/HeaderNavbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import StudentGradeCard from './StudentGradeCard';
import MobileNavbar from '../../components/MobileVersion/MobileNavbar';
import ResultLogics from './resultLogics';

const ResultPupilsGrades = () => {
  const { studentsresults, handleStudentsResults } = ResultLogics();
  const params = useParams();
  const { classId, term, year } = params;
  useEffect(() => {
    handleStudentsResults({ _class: classId, school_term: term, academic_year: year });
  }, []);

  return (
    <div className='main-admin-container'>
      <Sidebar />
      <div className='results-main-container'>
        <MobileNavbar />
        <div className='teachers-navbar'>
          <h3 className='result-title-grade'>
            <Link to='/results' className='result-title-link'>
              <AiOutlineArrowLeft style={{ cursor: 'pointer' }} />
            </Link>
            <span>Results</span>
          </h3>
          <HeaderNavbar />
        </div>
        {studentsresults.status === 'pending' && <div>Loading...</div>}
        {studentsresults.status === 'fulfilled' && (
          <>
            <h3 className='mobile-result-title-grade'>
              <Link to='/results' className='result-title-link mobile-return-btn'>
                <AiOutlineArrowLeft style={{ cursor: 'pointer' }} />
              </Link>
              <span>{studentsresults.data?._class}</span>
            </h3>

            <div className='search-container filter'>
              <FiSearch color='#4D44B5' size={22} />
              <input type='text' placeholder='Search here...' />
            </div>

            <div className='results-pupils-title'>
              <h3>
                <span>{studentsresults.data?._class}</span> ({studentsresults.data?.school_term})
              </h3>
            </div>

            <div className='result-main-cards'>
              {studentsresults.data?.data.map((result) => {
                return (
                  <StudentGradeCard
                    key={result._id}
                    student={result.student}
                    _class={classId}
                    school_term={term}
                    academic_year={year}
                  />
                );
              })}
            </div>
          </>
        )}
        {studentsresults.status === 'rejected' && <div>{studentsresults.error.message}</div>}
      </div>
    </div>
  );
};

export default ResultPupilsGrades;

