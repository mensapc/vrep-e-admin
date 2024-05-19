import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/home/Dashboard";
import Students from "./Pages/students/Students";
import Subjects from "./Pages/subjects/Subjects";
import DashboardErrorPage from "./Pages/home/dashboardError";
import ComingSoonPage from "./Pages/comingSoon";
import AuthRootLayout from "./Pages/auth/AuthRootLayout";
import { Login } from "./Pages/auth/login";
import PasswordReset from "./Pages/auth/PasswordReset";
import ForgotPassword from "./Pages/auth/ForgotPassword";
import TeachersRootLayout from "./Pages/teachers/TeachersRootLayout";
import Teachers from "./Pages/teachers/Teachers";
import NewTeacherForm from "./Pages/teachers/NewTeacherForm";
import StudentRootLayout from "./Pages/students/StudentRootLayout";
import StudentClasses from "./Pages/students/StudentClasses";
import StudentExams from "./Pages/students/StudentExams";
import StudentProfile from "./Pages/students/StudentProfile";
import NewStudentForm from "./Pages/students/NewStudentForm";
import ExamResultDetails from "./components/ExamResultDetails";
import SingleTeacherDetails from "./components/SingleTeacherDetails";
import MainResult from "./Pages/results/MainResult";
import ResultPupilsGrades from "./Pages/results/ResultPupilsGrades";
import SinglePupilsGrade from "./Pages/results/SinglePupilsGrade";
import EventForm from "./components/EventForm";
import { ToastifyContainer } from "./lib/toastifyLoaders";
import { RequireAuth, RequireNoAuth } from "./hooks/protectRoutes";
import SuccessfulPassReset from "./Pages/auth/SuccessfulPassReset";
import TeacherRemarks from "./Pages/teachers/TeacherRemarks";
import ResultView from "./Pages/students/ResultView";
import EditTeacherForm from "./Pages/teachers/EditTeacherForm";
import Register from "./Pages/auth/register/Register";
import Classes from "./Pages/classes/Classes";
import LatestActivity from "./Pages/latestActivity/latestActivity";

function App() {
  return (
    <>
      <ToastifyContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route index element={<Subjects />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/pupils">
              <Route index element={<Students />} />
              <Route path="new" element={<NewStudentForm />} />
              <Route path=":studentId/:classId" element={<StudentRootLayout />}>
                <Route index element={<StudentProfile />} />
                <Route path="exams" element={<StudentExams />} />
           
                <Route path="classes" element={<StudentClasses />} />
                <Route path="teacher-remarks" element={<TeacherRemarks />} />


                <Route path="result-view" element={<ResultView />} />
              </Route>
            </Route>

            <Route path="/teachers">
              <Route index element={<Teachers />} />
              <Route path="new" element={<NewTeacherForm />} />
              <Route path="details" element={<SingleTeacherDetails />} />
              <Route path="edit/:id" element={<EditTeacherForm />} />
            </Route>

            <Route index element={<Subjects />} />
            <Route path="/subjects" index element={<Subjects />} />
            <Route path="/results">
              <Route index element={<MainResult />} />
              <Route
                path=":classId/:term/:year"
                element={<ResultPupilsGrades />}
              />
              <Route
                path=":classId/:term/:year/:studentId"
                element={<SinglePupilsGrade />}
              />
            </Route>
            <Route path="/newEvent" element={<EventForm />} />
            <Route path="/auth" element={<AuthRootLayout />} />
            <Route path="/comingSoon" element={<ComingSoonPage />} />
            <Route path="/resultDetails" element={<ExamResultDetails />} />

            <Route path="/latestActivity" element={<LatestActivity />} />

            <Route path="/classes" element={<Classes />} />
          </Route>

          <Route element={<RequireNoAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route
              path="/successfulpassreset"
              element={<SuccessfulPassReset />}
            />
          </Route>
          <Route path="*" element={<DashboardErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
