import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsResults } from './studentsResultsSlice';
import { fetchStudentReport } from './studentReportSlice';
import { fetchExamsResults } from './examsResultsSlice';

const ResultLogics = () => {
  const dispatch = useDispatch();

  // Get students done exam
  const studentsresults = useSelector((state) => state.studentsresults);
  const handleStudentsResults = (data) => {
    dispatch(fetchStudentsResults(data));
  };

  // get student report data
  const studentreport = useSelector((state) => state.studentreport);
  const handleStudentReport = (data) => {
    dispatch(fetchStudentReport(data));
  };

  // get student exams results
  const examsresults = useSelector((state) => state.examsresults);
  const handleExamsResults = (student_id) => dispatch(fetchExamsResults(student_id));

  return {
    studentsresults: studentsresults,
    handleStudentsResults: handleStudentsResults,
    studentreport: studentreport,
    handleStudentReport: handleStudentReport,
    examsresults: examsresults,
    handleExamsResults: handleExamsResults,
  };
};

export default ResultLogics;
