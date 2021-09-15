import React from 'react';
import { useHistory } from 'react-router';

import './header.css';

import logo from '../../../images/logo.png';
import NavHeader from './NavHeader';

export default function Header() {
  const history = useHistory();
  return (
    <header className="header">
      <nav className="nav">
        <button
          className="nav__logo"
          type="button"
          onClick={() => history.push('/')}
        >
          <img src={logo} alt="logo" />
          <h2>MCX</h2>
        </button>
        <>
          <NavHeader />
        </>
      </nav>
    </header>
  );
}
