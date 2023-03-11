import React, { useEffect, useState } from 'react';
import { getLiveTime } from './greeting';

const Footer = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    let timer = setInterval(() => setTime(getLiveTime()), 1000);

    return function cleanUp () {
        clearInterval(timer);
    };
    //setTime(getLiveTime());
  });

  return (
    <div style={{ bottom: 0}}>
      <div>{time} </div>
    </div>
  )
}

export default Footer;