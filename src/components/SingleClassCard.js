import "../Pages/students/Students.css";
import { NavLink } from "react-router-dom";

function SingleClassCard() {


  return (
    <div className="single-class-container">
      <h3>Grade 1</h3>
      <span>1st Term</span>
      <NavLink to='/result-view' className="single-class-link">
        {/* to={`/pupils/${student._id}/${student._class._id}`} */}
         View Details
      </NavLink>
      <button className="single-class-download-link">Download</button>
    </div>
  );
}

export default SingleClassCard;
