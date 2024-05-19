import React, {useState} from 'react';
import { Badge } from 'antd';
import { FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getUser } from '../../hooks/useStorage';
import GenerateAvatar from '../../util/generateAvatar';
import { IoMdExit } from 'react-icons/io';
import LogoutLogics from '../../services/logoutLogics';
import { useLocation } from 'react-router-dom';

const HeaderNavbar = () => {
  
  const profile = getUser();
  const { handleLogout } = LogoutLogics();
  const [numberOfNotification , setNumberOfNotification] = useState(0);
  const location = useLocation().pathname;
  const option1=location.includes("/dashboard")
  const option2=location==="/"

  return (
    <>
      <div className='admin-container'>
        <div className={`icon-container logOut ${(option1||option2)&&"dashlog"} ` }>
          <button onClick={() => handleLogout()} >
            <IoMdExit color='#A098AE' />
          </button>
        </div>
        <Link to='/activity'>
          <div className={`${numberOfNotification===0?'icon-container':'icon-container '}`} onClick={() => setNumberOfNotification(0)}>
            <Badge className='badge-notify' size='default' color='#082567' count={numberOfNotification} />
            <button>
              <FiBell color='#A098AE' />
            </button>
          </div>
        </Link>

        <div className='admin-info'>
          <p>
            {profile.first_name} <br /> {profile.role}
          </p>
          <div className='avatar-container'>
            {profile.photo ? (
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className='avatar-image'
                src={profile.photo}
                alt={profile.first_name}
              />
            ) : (
              <GenerateAvatar profile={profile} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNavbar;

