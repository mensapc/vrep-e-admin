import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivities } from './getActivitiesSlice';

const ActivityLogics = () => {
  const dispatch = useDispatch();
  const getactivities = useSelector((state) => state.getactivities);

  const handleInitialActivities = () => dispatch(fetchActivities());

  return { getactivities: getactivities, handleInitialActivities: handleInitialActivities };
};

export default ActivityLogics;
