import React from 'react';
import Logo from '@assets/images/logo.png';
import { Container } from './styles';

export interface NavbarI {}

function Navbar() {
  const listMenu: string[] = ['Series', 'Noticias', 'Mi lista'];

  return (
    <Container>
      <div className="content">
        <ul className="menu">
          <li>
            <div className="container-logo">
              <img src={Logo} alt="logo" />
            </div>
          </li>

          {listMenu &&
            listMenu.map((menuItem: string) => (
              <li key={menuItem}>
                <span className="menu-item">{menuItem}</span>
              </li>
            ))}
        </ul>

        <ul>
          <li>Login</li>
        </ul>
      </div>
    </Container>
  );
}

export default Navbar;
