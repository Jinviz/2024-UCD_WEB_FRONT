import React from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar'
import MainContainer from '../../components/MainContainer/MainContainer'
import MeetingContainer from '../../components/MeetingContainer/MeetingContainer';
import SummaryContainer from '../../components/SummaryContainer/SummaryContainer';
import './MainPage.css'

function MainPage() {
  const { pathname } = useLocation();

  return (
    <div className='main-page'>
      <Sidebar />
      {pathname.startsWith('/main') && <MainContainer />}
      {pathname.startsWith('/meeting') && <><MeetingContainer /> <SummaryContainer/></>}
    </div>
  )
}

export default MainPage
