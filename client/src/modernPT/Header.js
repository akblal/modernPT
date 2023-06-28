import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to= '/home' style={{textDecoration: 'none'}}>
    <div className= 'clinic-logo-container'>
      <div className= 'clinic-logo'>
        <div className= 'clinic-logo-word'>
          PT
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Header