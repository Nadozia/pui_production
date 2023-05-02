import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link, Route, Routes } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar">
      <ul class= "nav_links navbar-left">
            <xmp class='nav_logo'>░▒█▀▀█░▒█░▒█░▀█▀<br></br>
                    ░▒█▄▄█░▒█░▒█░▒█░<br></br>
                    ░▒█░░░░░▀▄▄▀░▄█▄</xmp>
            <Link to='/' class='btn' onClick="">HOME</Link>
            <Link to='/blog1' class='btn' onClick="">BLOGS</Link>
            <Link to='/' class='btn' onClick="">CONTACT</Link>
      </ul>
      <ul class="navbar-right">
        <FontAwesomeIcon class='faicon' icon={faLinkedin} size="1x" />
        <FontAwesomeIcon class='faicon' icon={faTwitter} size="1x" />
        <FontAwesomeIcon class='faicon' icon={faGithub} size="1x" />
        <FontAwesomeIcon class='faicon' icon={faDiscord} size="1x" />
      </ul>
    </nav>
  );
}

export default Navbar;