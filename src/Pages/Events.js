import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import EventBurger from "../components/event-burger";
import { useEffect } from "react";
import plusIcon from "../assets/+.png";
import "../styles/events.css";
import "../styles/responsive.css";
import MobileNavbar from "../components/MobileVersion/MobileNavbar";
import SingleTeacherDetails from "../components/SingleTeacherDetails";
import Modal from "../components/Modal";
import EventForm from "../components/EventForm";
import { Link } from "react-router-dom";


function Events() {

  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    const daysTag = document.querySelector(".days"),
      prevNextIcon = document.querySelectorAll(".icons span");

    let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

    console.log(currMonth);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const renderCalender = () => {
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // Getting last date of the month
        lastDayofMonth = new Date(
          currYear,
          currMonth,
          lastDateofMonth
        ).getDay(); // Getting last day of month

      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // Getting first day of the month
        lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // Getting last date of the previous month
      let liTag = "";
      // Creating li of previous month last days
      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
      }

      // Creating li of all days of current month
      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
          i === date.getDate() &&
          currMonth === new Date().getMonth() &&
          currYear === new Date().getFullYear()
            ? "active"
            : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }

      // Creating li of next month first days
      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }
      daysTag.innerHTML = liTag;
    };
    renderCalender();

    prevNextIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        renderCalender();
      });
    });
  }, []);
  return (
    <div className="main-admin-container">
      <Sidebar active="events" />
      <article className="page-main">
        <Header title="Events" />
        <MobileNavbar/>
        <h3 className="mobile-event-title">Calendar</h3>
        <div className="event-page-main-content">
          <article className="calendar">
            <article className="wrapper">
              <header>
                <h2 className="current-date">Calendar</h2>
                <select name="months" id="">
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September" selected>
                    September
                  </option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <select name="year" id="">
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023" selected>
                    2023
                  </option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <Link onClick={handleModalOpen} to={openModal ? '/newEvent' : ''} className=''>
                  <button 
                  style={{cursor: "pointer"}}
                  onClick={handleModalOpen}
                  >
                    <span className="button-title">New Event</span><img src={plusIcon} alt="The Addtion Sign" />
                  </button>
                </Link>
                
              </header>
              <div className="calender mobile-calendar">
                <ul className="weeks">
                  <li>Sun</li>
                  <li>Mon</li>
                  <li>Tue</li>
                  <li>Wed</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sat</li>
                </ul>
                <ul className="days"></ul>
              </div>
            </article>
          </article>
          <article className="schedule-burgers">
            <div className="reschedule-text">
              <h2>Recent Schedule</h2>
              <p>Thursday, 10th April, 2021</p>
            </div>
            <EventBurger
              title="Cultural Event"
              subTitle="School Event"
              color="#4D44B5"
            />
            <EventBurger
              title="Xmas Party"
              subTitle="School Event"
              color="#FB7D5B"
            />
            <EventBurger
              title="Independence Day"
              subTitle="School Event"
              color="#FCC43E"
            />
            <EventBurger
              title="World Boy's Day"
              subTitle="School Event"
              color="#303972"
            />
          </article>
        </div>
      </article>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <EventForm onClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default Events;
