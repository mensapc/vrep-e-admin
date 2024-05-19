import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from './getClassesSlice';

const ClassLogics = () => {
  const dispatch = useDispatch();
  const getclasses = useSelector((state) => state.getclasses);

  // fetch classes
  const handleGetClasses = () => dispatch(fetchClasses());
  useEffect(() => {
    if (getclasses.status === 'idle') handleGetClasses();
  }, []);

  return { handleGetClasses: handleGetClasses, getclasses: getclasses };
};

export default ClassLogics;
