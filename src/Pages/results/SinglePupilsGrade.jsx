import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar";
import MobileNavbar from "../../components/MobileVersion/MobileNavbar";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ResultLogics from "./resultLogics";
import { usePDF } from "react-to-pdf";
import LatestActivity from "../../components/latestActivity";
import ResultPdf from "./ResultPdf";

const SinglePupilsGrade = () => {
  const { studentreport, handleStudentReport } = ResultLogics();
  const params = useParams();
  const { classId, term, year, studentId } = params;
  const { toPDF, targetRef } = usePDF({ filename: "result.pdf" });

  useEffect(() => {
    handleStudentReport({
      _class: classId,
      school_term: term,
      academic_year: year,
      student: studentId,
    });
  }, []);

  return (
    <div className="main-admin-container">
      <Sidebar />
      <div className="single-pupils-main">
        <MobileNavbar />
        <div className="teachers-navbar">
          <h3 className="result-title-grade">
            <Link
              to={`/results/${classId}/${term}/${year}`}
              className="result-title-link"
            >
              <AiOutlineArrowLeft style={{ cursor: "pointer" }} />
            </Link>
            <span>Results</span>
          </h3>
        </div>

        <Link
          to={`/results/${classId}/${term}/${year}`}
          className="result-title-link mobile-grade-back-link"
        >
          <AiOutlineArrowLeft style={{ cursor: "pointer" }} />
        </Link>
        {studentreport.status === "pending" && <div>Loading...</div>}
        {studentreport.status === "fulfilled" && (
          <>
            <div ref={targetRef} className="result-grade-pdf-main">
              <ResultPdf />
              <button onClick={() => toPDF()} className="upload-btn">
                Download
              </button>
            </div>
          </>
        )}
        {studentreport.status === "rejected" && (
          <div>{studentreport.error.message}</div>
        )}
      </div>
      <LatestActivity />
    </div>
  );
};

export default SinglePupilsGrade;
