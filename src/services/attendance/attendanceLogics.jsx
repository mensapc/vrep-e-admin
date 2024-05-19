import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance } from './getAttendanceSlice';

const ExamLogics = () => {
  const dispatch = useDispatch();
  const getattendance = useSelector((state) => state.getattendance);

  // search attendance

  const handleSearchAttendance = (searchData) => dispatch(fetchAttendance(searchData));

  return { handleSearchAttendance: handleSearchAttendance, getattendance: getattendance };
};

export default ExamLogics;
