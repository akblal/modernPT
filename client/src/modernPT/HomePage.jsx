import React from 'react';

import GeneralInfo from './GeneralInfo.jsx'
import ScheduleHistory from './ScheduleHistory.jsx'
import ProviderInfo from './ProviderInfo.jsx'
import HEP from './HEP.jsx'
import Help from './Help.jsx'
const HomePage = () => {

  return (
    <div className= 'container'>
      <div className= 'container-header'>
        <h1>Performax Physical Therapy</h1>
      </div>
      <div className= 'information-container'>
        <div className= 'half-container'>
          <GeneralInfo />
          <ScheduleHistory />
        </div>
        <div className= 'half-container'>
          <ProviderInfo />
          <HEP />
          <Help />
        </div>
      </div>

    </div>

  )
}

export default HomePage