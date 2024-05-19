import "../styles/user.css";
import Sidebar from "../components/sidebar";
import searchIcon from "../assets/search.png";
import emailIcon from "../assets/email.png";
import emailIconBtn from "../assets/mail button-min.png";
import callIcon from "../assets/call.svg";
import addContactsIcon from "../assets/addContacts-btn.png";
import orangeMailIcon from "../assets/mail-icon.png";
import orangePhoneIcon from "../assets/phone-icon.png"
import grayMoreIcon from "../assets/more-icon.png";
import userDashboardCoverImg from "../assets/user-dashboard-cover.png";
import dashboardAvatar from "../assets/dashboard-avatar.png";
import purpleCircle from "../assets/purpleCircle.png";
import purpleLine from "../assets/Line.png";
import { FiSearch } from "react-icons/fi";
import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import { TfiLocationPin } from "react-icons/tfi";
import MobileNavbar from "../components/MobileVersion/MobileNavbar";

export default function UserDashboard() {
  return (
    <div className="main-admin-container user-main-panel">
        <Sidebar active="user" />
        <article className="page-main user-dashboard">
          <MobileNavbar/>
          <article className="user-page-header">
            <h1>User Dashboard</h1>
            <div className="search-container">
            <FiSearch color="#4D44B5" size={22} />
            <input type="text" placeholder="Search here..." />
          </div>
          </article>
          <article className="dashboard">
            <img src={userDashboardCoverImg} alt="" className="user-dashboard-coverImg"/>
            <div className="main-dashboard">
            <img src={dashboardAvatar} alt="" className="profile-picture"/>
            <img src={grayMoreIcon} alt="" className="more-icon"/>
            <article className="all-content">
            <div className="content content-title-card">
              <h2 className="primary-color-text">Temz</h2>
              <p className="primary-color-text">Admin</p>
              <div className="row">
                <TfiLocationPin/>
                <p className="gray-text">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="content-card">
              <div className="content">
                <p className="gray-text">
                  Phone
                </p>
                <div className="row">
                  <img src={orangePhoneIcon} alt="" className="phone-icon" />
                  <p className="bold-text primary-color-text">
                    +12 345 6789 0
                  </p>
                </div>
              </div>
              <div className="content">
                <p className="gray-text">
                  Email
                </p>
                <div className="row">
                  <img src={orangeMailIcon} alt="" className="email-icon" />
                  <p className="bold-text primary-color-text">
                    jordan@mail.com
                  </p>
                </div>
              </div>
            </div>
           
            </article>
            </div>
          </article>
        <div className="sections row">
          <article className="parent-contact section">          
            <div className="row">
              <div className="text">
                <h3>Parent Contact</h3>
                <p className="gray-text">
                  You have <span style={{color: '#303972', fontWeight: '600'}}>120</span> contacts
                </p>
              </div>
              <button className="add-contacts-btn">
                <img src={addContactsIcon} alt="" />
              </button>
            </div>
            <div className="search-container user-search">
              <button id="search-button">
                <img src={searchIcon} alt="The search icon" />
              </button>
              <input type="text" id="search-input" placeholder="Search here..." />
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Samantha Williams</p>
                  <p className="gray-text">Samantha David</p>
                </div>
              </div>
              <button className="call-btn">
                <img src={callIcon} alt="" className="call-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Tony Soap</p>
                  <p className="gray-text">Tony Sarah</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Karen Hope</p>
                  <p className="gray-text">Karen Felix</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Jordan Nico</p>
                  <p className="gray-text">Jordan Kylain</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Nadila Adja</p>
                  <p className="gray-text">Nadila Adana</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <button className="view-more-btn">
              View More
            </button>
          </article>
          <article className="staff-contact section">          
            <div className="row">
              <div className="text">
                <h3>Staff Contact</h3>
                <p className="gray-text">
                  You have <span style={{color: '#303972', fontWeight: '600'}}>12</span> contacts
                </p>
              </div>
              <button className="add-contacts-btn">
                <img src={addContactsIcon} alt="" />
              </button>
            </div>
            <div className="search-container user-search">
              <button id="search-button">
                <img src={searchIcon} alt="The search icon" />
              </button>
              <input type="text" id="search-input" placeholder="Search here..." />
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Dickson William</p>
                  <p className="gray-text">Class VII-A</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Precious Salman</p>
                  <p className="gray-text">Class VII-A</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Michelson Klaus</p>
                  <p className="gray-text">Class VII-A</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Noah Stark</p>
                  <p className="gray-text">Class VII-B</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <div className="row">
              <div className="individualContact-details">
                <img src={purpleCircle} alt="" className="profile-pic"/>
                <div className="text">
                  <p className="primary-color-text bold-text">Ty Dollar</p>
                  <p className="gray-text">Class VII-C</p>
                </div>
              </div>
              <button className="email-btn">
                <img src={emailIcon} alt="" className="email-icon" />
              </button>
            </div>
            <button className="view-more-btn">
              View More
            </button>
          </article>
        </div>
      </article>
      <article className="right-side-panel">
            <HeaderNavbar/>
            <article className="daily-activity-section">
              <h3>Latest Activity</h3>
              <article className="daily-activity">
                <div className="divider-images">
                  <img src={purpleLine} alt="A horizontal line-like rectangle" className="purple-line"/>
                  <img
                    src={purpleCircle}
                    alt="A circle"
                    className="divider-circle one"
                  />
                  <img
                    src={purpleCircle}
                    alt="A circle"
                    className="divider-circle two"
                  />
                  <img
                    src={purpleCircle}
                    alt="A circle"
                    className="divider-circle three"
                  />
                  <img
                    src={purpleCircle}
                    alt="A circle"
                    className="divider-circle four"
                  />
                </div>
                <div className="text">
                  <article className="single-activity">
                    <p>Karen Hope moved task “User Research“ from On Progress to Done</p>
                    <p className="date">2 March 2021, 13:45 PM</p>
                  </article>
                  <article className="single-activity">
                    <p>Samantha William add new 4 attached files on task “Photo’s Assets“</p>
                    <p className="date">2 March 2021, 13:45 PM</p>
                  </article>
                  <article className="single-activity">
                    <p>Tony Soap invite you in task “Wireframing“ and “Hi-fidelity“</p>
                    <p className="date">2 March 2021, 13:45 PM</p>
                  </article>
                  <article className="single-activity">
                    <p>Samantha William created new Task</p>
                    <p className="date">2 March 2021, 13:45 PM</p>
                  </article>
                </div>
            </article>
        </article>
    </article>
  </div>
  )
}
