import * as React from 'react';
import css from './Header.module.scss';
import {useState} from "react";
import {Menu} from "~/components/Layout/DefaultLayout/Header/Menu/Menu";

export const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isHeader, setHeader] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    setHeader(!isHeader);
  };
  return (
    <header className={isHeader ? `${css.activeRoot} ${css.root}` : `${css.root}`}>
      <a href="./">
        <img className={css.logo} src='images/main/logo.svg' alt='logo' />
      </a>
      <div className={css.menu}>
        <button>
          <a href={'./cabinet'}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.95016 14.5C6.95016 8.99552 11.4124 4.53329 16.9168 4.53329C22.4213 4.53329 26.8835 8.99552 26.8835 14.5C26.8835 20.0044 22.4213 24.4666 16.9168 24.4666C11.4124 24.4666 6.95016 20.0044 6.95016 14.5Z" fill="#E4002B" stroke="#E4002B" stroke-width="0.6"/>
              <path d="M5.95596 23.0442C7.64584 24.7341 9.79888 25.8849 12.1428 26.3511C14.4868 26.8174 16.9163 26.5781 19.1243 25.6635C21.3322 24.7489 23.2194 23.2002 24.5471 21.2131C25.8748 19.226 26.5835 16.8898 26.5835 14.5C26.5835 12.1101 25.8748 9.77391 24.5471 7.78682C23.2194 5.79973 21.3322 4.25097 19.1243 3.33642C16.9163 2.42186 14.4868 2.18257 12.1428 2.6488C9.79889 3.11504 7.64584 4.26587 5.95596 5.95575" stroke="black" stroke-width="2"/>
              <path d="M18.125 14.5L18.9059 13.8753L19.4056 14.5L18.9059 15.1247L18.125 14.5ZM3.625 15.5H2.625V13.5H3.625V15.5ZM14.0725 7.83368L18.9059 13.8753L17.3441 15.1247L12.5108 9.08307L14.0725 7.83368ZM18.9059 15.1247L14.0725 21.1664L12.5108 19.917L17.3441 13.8753L18.9059 15.1247ZM18.125 15.5H3.625V13.5H18.125V15.5Z" fill="black"/>
            </svg>
          </a>
        </button>
        <button className={isActive ? `${css.close}` : `${css.open}`}>
          <svg onClick={toggleClass} className={css.burger} width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 3H0V0H30V3Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 11H0V8H30V11Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 19H0V16H30V19Z" fill="black"/>
          </svg>
          <svg onClick={toggleClass} className={css.xclose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6274 2.20101L1.41421 23.4142L0 22L21.2132 0.786797L22.6274 2.20101Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.799 23.6274L0.585786 2.41421L2 1L23.2132 22.2132L21.799 23.6274Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div className={isActive ? `${css.openedMenu}` : `${css.closedMenu}`}>
        <Menu />
      </div>
    </header>
  );
};
