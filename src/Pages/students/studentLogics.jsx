import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from './getStudentsSlice';
import { createStudent, resetNewStudent } from './newStudentSlice';
import { CapitalizeName, submitEntityDataWithImage } from '../../util/formDataUtils';
import { deleteStudentsAction } from './deleteStudentsSlice';
import { toastifyFunc } from '../../lib/toastifyLoaders';
import { useNavigate } from 'react-router-dom';
import { fetchSingleStudent } from './singleStudentSlice';
import { fetchStudentsBySearch } from './studentsBySearchSlice';

const StudentLogics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getstudents = useSelector((state) => state.getstudents);

  const handleBack = () => navigate('/pupils');

  // create student
  const createdstudent = useSelector((state) => state.createstudent);
  useEffect(() => {
    if (createdstudent.status === 'fulfilled') {
      dispatch(fetchStudents());
      dispatch(resetNewStudent());
      handleBack();
    }
  }, [createdstudent]);
  const handleNewStudent = (data) => {
    data.first_name = CapitalizeName(data.first_name);
    data.last_name = CapitalizeName(data.last_name);
    const formData = submitEntityDataWithImage(data);
    dispatch(createStudent(formData));
  };

  // sort students
  const [studentsData, setStudentsData] = useState(getstudents);
  const handleStudentsSort = (action) => dispatch(fetchStudents(action));
  useEffect(() => {
    setStudentsData(getstudents);
  }, [getstudents]);

  // delete multiple students
  const [studentsToDelete, setStudentsToDelete] = useState([]);
  const deleteStudents = useSelector((state) => state.deletestudents);
  const studentsDeletionIds = (e, user) => {
    if (e.target.checked) setStudentsToDelete((prev) => [...prev, user]);
    else setStudentsToDelete((prev) => prev.filter((item) => item !== user));
  };
  const handleDeleteStudents = () => {
    if (!studentsToDelete.length) {
      toastifyFunc('pending');
      return toastifyFunc('rejected', 'No student selected');
    }
    return dispatch(deleteStudentsAction(studentsToDelete));
  };
  useEffect(() => {
    if (deleteStudents.status === 'fulfilled') {
      setStudentsData({
        ...studentsData,
        data: studentsData.data.filter((student) => {
          return !studentsToDelete.includes(student._id);
        }),
      });
    }
  }, [deleteStudents.data]);

  // get student profile
  const singlestudent = useSelector((state) => state.singlestudent);
  const handleSingleStudent = (id) => dispatch(fetchSingleStudent(id));

  // get students by search
  const searchstudents = useSelector((state) => state.searchstudents);
  const handleSearchStudents = (searchData) => dispatch(fetchStudentsBySearch(searchData));

  useEffect(() => {
    setStudentsData(searchstudents);
  }, [searchstudents]);

  return {
    getstudents: getstudents,
    handleNewStudent: handleNewStudent,
    handleStudentsSort: handleStudentsSort,
    studentsData: studentsData,
    handleDeleteStudents: handleDeleteStudents,
    studentsDeletionIds: studentsDeletionIds,
    studentsToDelete: studentsToDelete,
    handleBack: handleBack,
    handleSingleStudent: handleSingleStudent,
    singlestudent: singlestudent,
    handleSearchStudents: handleSearchStudents,
    searchstudents: searchstudents,
  };
};

export default StudentLogics;
