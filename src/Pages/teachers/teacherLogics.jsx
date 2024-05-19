import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from './getTeachersSlice';
import { CapitalizeName, submitEntityDataWithImage } from '../../util/formDataUtils';
import { createTeacher, resetNewTeacher } from './newTeacherSlice';
import { deleteTeacherAction } from './deleteTeacherSlice';
import { updateTeacher, resetEditTeacher } from './editTeacherSlice';
import { useNavigate } from 'react-router-dom';

const TeacherLogics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getteachers = useSelector((state) => state.getteachers);
  const [teachersData, setTeachersData] = useState(getteachers);

  useEffect(() => {
    if (getteachers.status === 'idle') dispatch(fetchTeachers());
  }, []);

  const handleBack = () => navigate('/teachers');

  // sort teachers

  useEffect(() => {
    setTeachersData(getteachers);
  }, [getteachers]);
  const handleTeachersSort = (action) => dispatch(fetchTeachers(action));

  // create teacher
  const createdTeacher = useSelector((state) => state.createteacher);
  useEffect(() => {
    if (createdTeacher.status === 'fulfilled') {
      dispatch(fetchTeachers());
      dispatch(resetNewTeacher());
      handleBack();
    }
  }, [createdTeacher]);

  const handleNewTeacher = (data) => {
    data.first_name = CapitalizeName(data.first_name);
    data.last_name = CapitalizeName(data.last_name);
    const formData = submitEntityDataWithImage(data);
    dispatch(createTeacher(formData));
  };

  // edit teacher
  // const handleEditTeacher = (id) => {
  //   dispatch(updateTeacher(id)); 
  // };

  const editTeacher = useSelector((state) => state.editTeacher);
  const handleEditTeacher = (teacher) => dispatch(updateTeacher(teacher));
  const handleResetEdit = () => dispatch(resetEditTeacher());

  // delete teacher
  const deletedteacher = useSelector((state) => state.deleteteacher);
  const handleDeleteTeacher = (id) => dispatch(deleteTeacherAction(id));
  useEffect(() => {
    if (deletedteacher.status === 'fulfilled') {
      setTeachersData((prev) => ({
        ...prev,
        data: prev.data.filter((teacher) => {
          return teacher._id !== deletedteacher.data.id;
        }),
      }));
    }
  }, [deletedteacher.data]);

  return {
    teachersData: teachersData,
    handleTeachersSort: handleTeachersSort,
    handleNewTeacher: handleNewTeacher,
    handleEditTeacher: handleEditTeacher, // Add handleEditTeacher to the returned object
    handleDeleteTeacher: handleDeleteTeacher,
    handleBack: handleBack,
    editTeacher: editTeacher,
    handleEditTeacher: handleEditTeacher,
    handleResetEdit: handleResetEdit,
  };
};

export default TeacherLogics;

