import React from "react";
import favicon from '../img/favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
  return (
    <nav class="navbar">
      <ul class= "navbar-left">
            <li><xmp class='nav_logo'>░▒█▀▀█░▒█░▒█░▀█▀<br></br>
                    ░▒█▄▄█░▒█░▒█░▒█░<br></br>
                    ░▒█░░░░░▀▄▄▀░▄█▄</xmp></li>
            <li><div class='btn' onClick="">Home</div></li>
            <li><div class='btn' onClick="">Blogs</div></li>
            <li><div class='btn' onClick="">Contact</div></li>
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