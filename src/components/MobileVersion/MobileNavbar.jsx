import React, { useState } from 'react';
import '../../styles/mobile-navbar.css';
import logo from '../../assets/logo.svg';
import { FiBell, FiHome, FiCalendar, FiActivity } from 'react-icons/fi';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { Badge } from 'antd';
import { FaTimes } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { ImUserTie } from 'react-icons/im';
import { CalculatorOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getUser } from '../../hooks/useStorage';
import GenerateAvatar from '../../util/generateAvatar';
import { RiLogoutCircleLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import LogoutLogics from '../../services/logoutLogics';


const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [numberOfNotification , setNumberOfNotification] = useState(1);
  const profile = getUser();

  const location = useLocation().pathname;

    const option1=location.includes("dashboard")
    const option2=location.includes("pupils")
    const option3=location.includes("teachers")
    const option4=location.includes("activity")
    const option5=location.includes("results")

    const { handleLogout } = LogoutLogics();

  return (
    <div className='mobile-navbar'>
      <div className='content'>
        <div className='mobile-navbar-logo'>
          <img src={logo} alt='' />
          <p>RPMS</p>
        </div>

        <div className='mobile-navbar-menu'>
          
            <button onClick={() => setNumberOfNotification(0)}>
             
             <Link to='/activity' >

              <Badge className='badge-navbar' count={numberOfNotification}>
                
                <FiBell size={26} color='white' />

              </Badge>
              
             </Link>

            </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            <HiMiniBars3BottomRight />
          </button>
          <div className={menuOpen ? 'mobile-nav-menu' : 'hidden'}>
            <div className='mobile-nav-account'>
              <div className='mobile-nav-image'>
                {profile.image ? (
                  <img src={profile.photo} alt={profile.first_name} />
                ) : (
                  <GenerateAvatar profile={profile} />
                )}
                <h1>{profile.first_name}</h1>
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <FaTimes size={22} />
              </button>
            </div>
            <ul className='mobile-nav-links'>
              <Link className='sidebar-links' to='/dashboard'>
                <li className={`${option1===true&&'mobile-nav-linksActive'}`}>
                  <FiHome className='nav-icon' />
                  <span>Dashboard</span>
                </li>
              </Link>

              <Link className='sidebar-links' to='/pupils'>
                <li className={`${option2===true&&'mobile-nav-linksActive'}`}>
                  <PiStudentBold className='nav-icon' />
                  <span>Pupils</span>
                </li>
              </Link>

              <Link className='sidebar-links' to='/teachers'>
                <li className={`${option3===true&&'mobile-nav-linksActive'}`}>
                  <ImUserTie className='nav-icon' />
                  <span>Teachers</span>
                </li>
              </Link>

              <Link className='sidebar-links' to='/activity'>
                <li className={`${option4===true&&'mobile-nav-linksActive'}`}>
                  <FiActivity className='nav-icon' />
                  <span>Activity</span>
                </li>
              </Link>

              <Link className='sidebar-links' to='/results'>
                <li className={`${option5===true&&'mobile-nav-linksActive'}`}>
                  <CalculatorOutlined className='nav-icon' />
                  <span>Results</span>
                </li>
              </Link>

              
                <li onClick={() => handleLogout()} >
                  <RiLogoutCircleLine  className='nav-icon' />
                  <span>Log Out</span>
                </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

