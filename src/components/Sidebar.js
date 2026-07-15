import React, { Component } from 'react';

import avatar from '../assets/images/avatar.png';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'professional experience' },
        { content: 'Skills', href: 'skills' },
        { content: 'Education', href: 'education' },
        { content: 'Interests', href: 'interests' }
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
        role="navigation"
        aria-label="Main navigation"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt={`${config.firstName} ${config.lastName} profile picture`}
            />
          </span>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <a className="nav-link" href={`#${href}`}>
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
