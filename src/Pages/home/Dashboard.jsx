import React from 'react';
import Sidebar from '../../components/sidebar';
import RightSidebar from '../../components/RightSidebar';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import circlePhoto from '../../assets/images/circle-photo.jpeg'
import HomeLogics from './homeLogics';
import { Link } from 'react-router-dom';
import { useWindowResize } from '../../util/windowResize';
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { FiBell } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';
import LogoutLogics from '../../services/logoutLogics';
import { useLocation } from 'react-router-dom';
import { getUser } from '../../hooks/useStorage';
import SchoolPerformance from '../../components/SchoolPerformance';
import PupilProfit from '../../components/PupilProfit';


function Dashboard() {
  const isMobile = useWindowResize();
  const [datacount, graphdata] = HomeLogics();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  


  const profile = getUser();

  const { handleLogout } = LogoutLogics();
  const location = useLocation().pathname;
  const option1=location.includes("/dashboard")
  const option2=location==="/"

  function handleToggle() {
    setSidebarOpen(prevState => !prevState);
    console.log('open')
  }

  useEffect(() => {
    if (!isMobile) {
      
      setSidebarOpen(true);
    }
  }, [isMobile]);


  return (
    <>
    <div className="lg:h-auto w-full bg-background pr-8">
      <article
        className={`${isMobile ? "ml-0" : "ml-65"} ${
          !isMobile && "lg: w-full flex flex-col  bottom-4 pl-4 pr-4"
        }`}
      >
        <div className="fixed top-0 left-0 w-full z-50">
          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
        </div>
        <section
          className={`fixed flex ${
            isMobile ? "justify-start" : "justify-center"
          } ${
            isMobile ? "" : " px-4"
          }lg:py-8 lg:w-752 px-8 h-32 flex flex-col  `}
        >
          <div className="bg-white w-full flex justify-between lg:flex items-center h-23 lg:rounded-20">
            <nav className="h-24 bg-white w-full flex justify-between items-center px-4 py-4 lg:justify-between lg:h-18 lg:items-center lg:w-full rounded-20">
              {isMobile ? (
                <div
                  className="h-8 w-8 flex items-center ml-8 "
                  onClick={handleToggle}
                >
                  <FaBars size={24} color="grey" />
                </div>
              ) : (
                <h3 className="text-center text-24 font-semibold font-capriola text-heading px-16">
                  Dashboard
                </h3>
              )}

              <div
                className={`w-26 flex justify-end ${
                  isMobile ? "px-0" : "px-4"
                } lg:w-78 flex justify-between items-center`}
              >
                <div
                  className={`icon-container logOut ${
                    (option1 || option2) && "dashlog"
                  } px-2 `}
                >
                  <button
                    className="flex items-center justify-center bg-mat w-7 h-7 rounded-full "
                    onClick={() => handleLogout()}
                  >
                    <IoMdExit size={24} color="#364786" />
                  </button>
                </div>

                <div className="">
                  <Link to="/activity">
                    <div>
                      <button className="flex items-center justify-center bg-che w-7 h-7 rounded-full">
                        <FiBell size={24} color="#364786" />
                      </button>
                    </div>
                  </Link>
                </div>

                <div className="w-12 h-12 rounded-full  overflow-hidden">
                  <img
                    className={`w-full h-full object-cover rounded-full border-solid border-4 ${
                      isMobile ? "border-circleM" : "border-circleD"
                    }`}
                    src={circlePhoto}
                    alt=""
                  />
                </div>

                {!isMobile && (
                  <div>
                    <p className="text-18 font-semibold text-par">John Doe</p>
                    <span className="text-14 font-normal">Head Teacher</span>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </section>
        <section className="w-759 flex flex-row justify-between mt-32">
          <section
            className={` h-auto flex flex-col justify-between items-center ${
              isMobile ? "px-4" : "lg:py-2 lg:px-8"
            } h-32 flex `}
          >
            <div className="w-600 flex flex-col justify-between px-8">
              <div
                className={`h-40 px-4 ${
                  isMobile ? "w-78" : "w-600"
                } flex flex-row items-center justify-around lg:h-40 px-8  bg-white rounded-20`}
              >
                <div className="flex px-4">
                  <Link className="px-2" to="/pupils">
                    <button className="w-9 h-9 object-cover rounded-full overflow-hidden border-solid border-4 border-pink flex items-center justify-center">
                      <PiStudent size={33} color="heading" />
                    </button>
                  </Link>
                  <div className="flex flex-col ">
                    <p className="text-20 text-par font-poppins font-semibold">
                      Pupils
                    </p>
                    <span className="text-18 font-poppins font-bold text-spans">
                      13336
                    </span>
                  </div>
                </div>
                <div className="flex px-4">
                  <Link className="px-2" to="/teachers">
                    <button className="w-9 h-9 object-cover rounded-full overflow-hidden border-solid border-4 border-greenish flex items-center justify-center">
                      <PiChalkboardTeacherLight size={33} color="heading" />
                    </button>
                  </Link>

                  <div className="flex flex-col">
                    <p className="text-20 text-par font-poppins font-semibold">
                      Teachers
                    </p>
                    <span className="text-18 font-poppins font-bold text-spans">
                      12
                    </span>
                  </div>
                </div>
                <div className="flex px-4">
                  <Link className="px-4" to="/results">
                    <button className="w-9 h-9 object-cover rounded-full overflow-hidden border-solid border-4 border-yellow flex items-center justify-center">
                      <MdEventAvailable size={33} color="heading" />
                    </button>
                  </Link>
                  <div className="flex flex-col ">
                    <p className="text-20 text-par font-poppins font-semibold">
                      Results
                    </p>
                    <span className="text-18 font-poppins font-bold text-spans">
                      40
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 h-600">
                <SchoolPerformance />
              </div>
            </div>
          </section>

          <section className={`bg-background ${isMobile ? "mt-0" : "ml-4 mt-1"} flex flex-col justify-between items-center  mr-2`}>
            <div className='mb-4'>
              <PupilProfit />
            </div>
            <div className='w-full'>
              <RightSidebar />
            </div>
          </section>
        </section>
      </article>
    </div>
    </>
  );
}

export default Dashboard;
