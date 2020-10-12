import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  return(
    <div>
      <nav class="navbar navbar-container fixed-top navbar-expand-lg navbar-light transparent">

        {/* Echo/Homepage Link */}
        <a class="navbar-brand" href="/Home">
          Echo Sit
        </a>

        {/* Menu Icon */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <MenuIcon />
        </button>

        {/* Social Buttons */}
        <div>
          <Tooltip title="See My Repositories:)" arrow TransitionComponent={Zoom} class="linkSpace linkColor">
            <Link color="inherit" href="https://github.com/echosit" target="_blank">
              <GitHubIcon />
            </Link>
          </Tooltip>
          <Tooltip title="Connect With Me" arrow TransitionComponent={Zoom}>
            <Link color="inherit" href="https://www.linkedin.com/in/echosit/" target="_blank" class="linkSpace linkColor">
              <LinkedInIcon />
            </Link>
          </Tooltip>
         </div>

         {/* Home Link */}
         <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
              className="nav-link underline"
              activeClassName="activeNav"
              to="/Home">
                Home
              </NavLink>
            </li>

            {/* Work Link */}
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
              className="nav-link underline"
              activeClassName="activeNav"
              to="/Portfolio">
                Work
              </NavLink>
            </li>

            {/* About Link */}
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
              className="nav-link underline aboutLink"
              activeClassName="activeNav"
              to="/About">
                About
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
   </div>
  );

}


export default NavBar;
