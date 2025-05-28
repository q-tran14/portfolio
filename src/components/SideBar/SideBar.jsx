import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/icons/logo/emoji-event.svg'

import * as Icon from "@phosphor-icons/react";

import '../SideBar/index.css'
import { useState } from 'react';

const Sidebar = () => {
  const [activePath, setActivePath] = useState(window.location.pathname);
  
  const handleClick = (to) => {
    setActivePath(to);
  };

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" width="48" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => handleClick('/')}>
          <Icon.HouseIcon size={28} weight={activePath === "/" ? 'fill' : 'regular'}/>
        </NavLink>
        <NavLink activeclassname="active" className="experience-link" to="/experience" onClick={() => handleClick('/experience')}>
          <Icon.BriefcaseIcon size={28} weight={activePath === "/experience" ? 'fill' : 'regular'} />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills" onClick={() => handleClick('/skills')}>
          <Icon.NutIcon size={28} weight={activePath === "/skills" ? 'fill' : 'regular'} />
        </NavLink>
        <NavLink activeclassname="active" className="projects-link" to="/projects" onClick={() => handleClick('/projects')}>
          <Icon.JoystickIcon size={28} weight={activePath === "/projects" ? 'fill' : 'regular'} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => handleClick('/contact')}
        >
          <Icon.EnvelopeSimpleIcon size={28} weight={activePath === "/contact" ? 'fill' : 'regular'} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/iamquantran/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon.LinkedinLogoIcon size={28} weight='fill'/>
          </a>
        </li>
        <li>
          <a
            className="github-link"
            href="https://github.com/q-tran14"
            target="_blank"
            rel="noreferrer"
          >
            <Icon.GithubLogoIcon size={28} weight='fill'/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
