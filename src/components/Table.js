import React, { useState } from "react";
import "../styles/Table.css";
import PaginationPage from "./PaginationPage/PaginationPage";
import TbodyData from "./TbodyData";

function Table({ students, studentsDeletionIds, handleCheckboxChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = students.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>
              <input type="checkbox" />
              <span style={{ marginLeft: "20px" }}>Name</span>
            </th>
            <th>ID</th>
            <th>Date Registered</th>
            <th>Age</th>
            <th>Teacher</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <TbodyData
            students={currentPost}
            studentsDeletionIds={studentsDeletionIds}
            handleCheckboxChange={handleCheckboxChange}
          />
        </tbody>
      </table>

      <PaginationPage
        totalPosts={students.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Table;

