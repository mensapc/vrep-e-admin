import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import '../../styles/ResultMain.css';
import MobileNavbar from '../../components/MobileVersion/MobileNavbar';
import HeaderNavbar from '../../components/HeaderNavbar/HeaderNavbar';
import SingleResultCard from './SingleResultCard';
import { classLogics } from '../../services';

const MainResult = () => {
  const { getclasses } = classLogics();
  const [schoolTerm, setSchoolTerm] = useState('1stterm');
  const [schoolYear, setSchoolYear] = useState('2021');

  return (
    <div className='main-admin-container'>
      <Sidebar />
      <div className='results-main-container'>
        <MobileNavbar />
        <div className='teachers-navbar'>
          <h3>Results</h3>
          <HeaderNavbar />
        </div>
        <h3 className='mobile-result-title'>1st Term 2022/2023</h3>
        <div className='result-search-terms-container'>
          <div></div>

          <div className='result-terms-container'>
            <select name='term' id='' onChange={(e) => setSchoolTerm(e.target.value)}>
              <option value='1stterm'>1st Term</option>
              <option value='2ndterm'>2nd Term</option>
              <option value='3rdterm'>3rd Term</option>
            </select>

            <select name='year' id='' onChange={(e) => setSchoolYear(e.target.value)}>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
            </select>
          </div>
        </div>

        {getclasses.status === 'pending' && <div>Loading...</div>}
        <div className='result-main-cards'>
          {getclasses.status === 'fulfilled' &&
            getclasses.data.map((item) => (
              <SingleResultCard
                key={item._id}
                _class={item}
                class={item}
                schoolTerm={schoolTerm}
                schoolYear={schoolYear}
              />
            ))}
        </div>
        {getclasses.status === 'rejected' && <div>{getclasses.error.message}</div>}
      </div>
    </div>
  );
};

export default MainResult;

