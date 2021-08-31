import React from 'react';
import { useHistory } from 'react-router-dom';

 const AboutNav = (props) => {
     const history = useHistory();
     return (
    <>
      <ul>
        <li onClick={() => history.push('/')}>Home</li>
        <li onClick={() => history.push('/technologies')}>IT Managed Solutions</li>
        <li onClick={() => history.push('/about')}>About</li>
      </ul>
    </>
  );
};

export default AboutNav;