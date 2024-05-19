import React, { useEffect } from 'react';
import '../../styles/latest-activity.css';
import '../../styles/responsive.css';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import DailyActivity from '../../components/daily-activity';
import MobileNavbar from '../../components/MobileVersion/MobileNavbar';
import ActivityLogics from './activityLogics';
import { dayNameFormat } from '../../lib/momentFormat';

export default function LatestActivityPage() {
  const { getactivities, handleInitialActivities } = ActivityLogics();
  useEffect(() => {
    handleInitialActivities();
  }, []);

  return (
    <div className="main-admin-container">
      <Sidebar active="latestActivity" />
      <article className="page-main activiy-main-admin">
        <MobileNavbar />
        <Header title="Notification & Lastest Activity" />
        <h1 className="activity-mobile-title">Notification & Lastest Activity</h1>
        {getactivities.status === 'pending' && <small>loading...</small>}
        {getactivities.status === 'fulfilled' && (
          <article className="main-activity-el">
            {getactivities.data.this_day?.length > 0 && (
              <DailyActivity day="Today" data={getactivities.data.this_day} />
            )}
            {getactivities.data.yesterday?.length > 0 && (
              <DailyActivity day="Yesterday" data={getactivities.data.yesterday} />
            )}

            {getactivities.data.two_days_ago?.length > 0 && (
              <DailyActivity
                day={dayNameFormat(2, 'substract')}
                data={getactivities.data.two_days_ago}
              />
            )}
          </article>
        )}
        {getactivities.status === 'rejected' && <small>{getactivities.error.message}</small>}
      </article>
    </div>
  );
}

