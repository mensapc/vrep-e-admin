import React, { useEffect } from 'react';
import HeaderNavbar from '../components/HeaderNavbar/HeaderNavbar';
import CalendarTable from '../components/CalendarTable';
import purpleCircle from '../assets/purpleCircle.png';
import ActivityLogics from '../Pages/activity/activityLogics';
import { timeDateFormat } from '../lib/momentFormat';

const LatestActivity = () => {
  const { getactivities, handleInitialActivities } = ActivityLogics();
  useEffect(() => {
    handleInitialActivities();
  }, []);
  if (getactivities.status === 'pending') {
    return <small>loading...</small>;
  } else if (getactivities.status === 'rejected') {
    return <small>{getactivities.error.message}</small>;
  } else if (getactivities.status === 'fulfilled') {
    return (
      <article className="right-side-panel right-single-pupils-side">
        <HeaderNavbar />
        <article className="daily-activity-section">
          <h3>Latest Activity</h3>
          <article className="daily-activity">
            {getactivities.data.this_day.slice(0, 4).map((activity) => (
              <div className="divider-container" key={activity._id}>
                <div className="latest-divider-bar">
                  <div className="purple-line"></div>
                  <img src={purpleCircle} alt="A circle" className="divider-circle circle-one" />
                  <img src={purpleCircle} alt="A circle" className="divider-circle circle-two" />
                </div>
                <div className="text latest-text">
                  <article className="single-activity">
                    <p>{activity.message}</p>
                    <p className="date">{timeDateFormat(activity.created_at)}</p>
                  </article>
                </div>
              </div>
            ))}
          </article>
        </article>
        <CalendarTable />
      </article>
    );
  }
};

export default LatestActivity;
