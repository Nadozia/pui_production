import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar">
      <ul class= "nav_links navbar-left">
            <Link to='/' className='btn' onClick="">HOME</Link>
            <Link to='/blog' className='btn' onClick="">BLOGS</Link>
            <Link to='/contact' className='btn' onClick="">CONTACT</Link>
      </ul>
      <ul class="navbar-right">
        <FontAwesomeIcon className='faicon' icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className='faicon' icon={faTwitter} size="2x" />
        <FontAwesomeIcon className='faicon' icon={faGithub} size="2x" />
        <FontAwesomeIcon className='faicon' icon={faDiscord} size="2x" />
      </ul>
    </nav>
  );
}

export default Navbar;