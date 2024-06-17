import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newArtical = (heading,subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
      <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArtical ("chinthaka ","Top News 9099 readers")}
      {newArtical ("Israel announces military pause on Gaza road to let in aid","TheVersatile and multi-faceted Nissanka Wijeyeratne")}
      {newArtical ("Why 800 people fled a sun-kissed Mediterranean village","Share your thoughts: Sri Lanka’s disastrous T20 World Cup campaign")}
      {newArtical ("Huge fire erupts at oil refinery in Iraq","Child labour: It’s time to CLEAR supply chains Plus")}
    </div>
    
  );
}

export default Widgets