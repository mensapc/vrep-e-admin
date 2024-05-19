import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExams } from './getExamsSlice';

const ExamLogics = () => {
  const dispatch = useDispatch();
  const getexams = useSelector((state) => state.getexams);

  // fetch classes
  const handleGetExams = () => dispatch(fetchExams());
  useEffect(() => {
    if (getexams.status === 'idle') handleGetExams();
  }, []);

  return { handleGetExams: handleGetExams, getexams: getexams };
};

export default ExamLogics;
