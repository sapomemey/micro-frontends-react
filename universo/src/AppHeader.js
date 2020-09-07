import React from 'react';
import { NavLink } from 'react-router-dom';

export const AppHeader = () => (
  <header>
    <nav>
      <ol>
        <li>
          <NavLink to="/marte">Marte</NavLink>
        </li>
        <li>
          <NavLink to="/tierra">Tierra</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);
