import "../styles/header.css";
import React, { useEffect } from "react";
import burgerIcon from "../assets/burger.svg";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";


export default function Header(props) {
  useEffect(() => {
    let isSidebarShowing = false;
    let burgerBtnEl = document.querySelector(".burger-icon-btn");
    burgerBtnEl.addEventListener("click", () => {
      document.querySelector(".sidebar").style.transform = "scaleX(1)";
      document.querySelector("article.page-main").style.width = "100%";
      burgerBtnEl.style.display = "none";
      isSidebarShowing = true;
    });

  }, []);
  return (
    <>
      <article className="header">
        <button className="burger-icon-btn">
          <img src={burgerIcon} alt="A list icon" />
        </button>
        <h1>{props.title}</h1>
          <HeaderNavbar/>
      </article>
    </>
  );
}
