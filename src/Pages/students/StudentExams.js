import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleExamCard from '../../components/SingleExamCard';
import ResultLogics from '../results/resultLogics';

function StudentExams() {
  const { examsresults, handleExamsResults } = ResultLogics();
  const { studentId } = useParams();
  useEffect(() => {
    handleExamsResults(studentId);
  }, []);
  if (examsresults.status === 'pending') {
    return <span>loading...</span>;
  } else if (examsresults.status === 'fulfilled') {
    return (
      <>
        <div className="classes-header">
          <p>Total Courses: {examsresults.data.total_courses}</p>
          <p>Attempted: {examsresults.data.attempt}</p>
          <p>Unattempt: 0</p>
          <p>
            Pass: <span className="approved">{examsresults.data.pass_count}</span>
          </p>
          <p>
            Failed: <span className="failed">{examsresults.data.fail_count}</span>
          </p>
        </div>
        <section className="cards-container">
          {examsresults.data.results.map((result) => (
            <SingleExamCard data={result} />
          ))}
        </section>
      </>
    );
  } else if (examsresults.status === 'rejected') {
    return (
      <div style={{ width: '100%', textAlign: 'center', padding: '40px 0' }}>
        {examsresults.error.message}
      </div>
    );
  }
}

export default StudentExams;

