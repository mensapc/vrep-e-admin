import React from "react";
import { Link } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import ResultPdf from "./ResultPdf";
import ResultLogics from "./resultLogics";

const SingleResultCard = ({ _class, schoolTerm, schoolYear }) => {
  const { toPDF, targetRef } = usePDF({ filename: "result.pdf" });
  const { studentreport, handleStudentReport } = ResultLogics();

  return (
    <div className="single-result-card">
      <div className="avatar-container result-profile"></div>
      <div className="single-card-title" style={{ textAlign: "center" }}>
        <h3 style={{fontSize: "22px"}}>{_class.name}</h3>
      </div>
      <div className="result-btn-card">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/results/${_class._id}/${schoolTerm}/${schoolYear}`}
        >
          <button className="stB">Open</button>
          <button className="ndB">Download</button>
        </Link>
      </div>
      {studentreport.status === "pending" && <div>Loading...</div>}
      {/* <button onClick={() => toPDF()}>Download</button> */}
    
        <>
          
          {/* <div
            ref={targetRef}
            className="result-grade-pdf-main result-mobile-pdf-main-side"
          >
            <ResultPdf />
          </div> */}
        </>

      {studentreport.status === "rejected" && (
        <div>{studentreport.error.message}</div>
      )}
    </div>
  );
};

export default SingleResultCard;
