import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../Pages/auth/login/loginSlice';
import datacountSlice from '../Pages/home/datacountSlice';
import getStudentsSlice from '../Pages/students/getStudentsSlice';
import createStudentSlice from '../Pages/students/newStudentSlice';
import deleteStudentsSlice from '../Pages/students/deleteStudentsSlice';
import newTeacherSlice from '../Pages/teachers/newTeacherSlice';
import getTeachersSlice from '../Pages/teachers/getTeachersSlice';
import deleteTeacherSlice from '../Pages/teachers/deleteTeacherSlice';
import getClassesSlice from '../services/class/getClassesSlice';
import getExamsSlice from '../services/exam/getExamsSlice';
import studentsResultsSlice from '../Pages/results/studentsResultsSlice';
import studentReportSlice from '../Pages/results/studentReportSlice';
import singleStudentSlice from '../Pages/students/singleStudentSlice';
import getAttendanceSlice from '../services/attendance/getAttendanceSlice';
import graphDataSlice from '../Pages/home/graphDataSlice';
import getActivitiesSlice from '../Pages/activity/getActivitiesSlice';
import studentsBySearchSlice from '../Pages/students/studentsBySearchSlice';
import examsResultsSlice from '../Pages/results/examsResultsSlice';
import editTeacherSlice from '../Pages/teachers/editTeacherSlice';
import StudentEditPopupSlice from './Slices/StudentEditPopupSlice';
import StudentDeletePopupSlice from './Slices/StudentDeletePopupSlice';
import AddClassPopupSlice from './Slices/AddClassPopupSlice';
import EditClassPopupSlice from './Slices/EditClassPopupSlice';
import DeleteClassPopupSlice from './Slices/DeleteClassPopupSlice';
import TeacherAddPopupSlice from './Slices/TeacherAddPopupSlice';
import TeacherDeletePopupSlice from './Slices/TeacherDeletePopupSlice';
import TeacherEditPopupSlice from './Slices/TeacherEditPopupSlice';
const store = configureStore({
  reducer: {
    login: loginSlice,
    datacount: datacountSlice,
    getstudents: getStudentsSlice,
    createstudent: createStudentSlice,
    deletestudents: deleteStudentsSlice,
    getteachers: getTeachersSlice,
    createteacher: newTeacherSlice,
    editteacher: editTeacherSlice,
    deleteteacher: deleteTeacherSlice,
    getclasses: getClassesSlice,
    getexams: getExamsSlice,
    studentsresults: studentsResultsSlice,
    studentreport: studentReportSlice,
    singlestudent: singleStudentSlice,
    getattendance: getAttendanceSlice,
    graphdata: graphDataSlice,
    getactivities: getActivitiesSlice,
    searchstudents: studentsBySearchSlice,
    examsresults: examsResultsSlice,
    studentEPU:StudentEditPopupSlice,
    studentDPU:StudentDeletePopupSlice,
    classesANC:AddClassPopupSlice,
    classesEEC:EditClassPopupSlice,
    classesDEC:DeleteClassPopupSlice,
    teacherAdd:TeacherAddPopupSlice,
    teacherDelete:TeacherDeletePopupSlice,
    teacherEdit:TeacherEditPopupSlice,
  },
});

export default store;

