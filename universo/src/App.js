import React from 'react';
import { useMetadataMicroFrontends } from './useMetadataMicroFrontends';
import './app.css';

export const App = () => {
  const { html } = useMetadataMicroFrontends('http://localhost:3000/micro-frontends.json');

  return <div className="shell-container">
    {html}
  </div>;
};
