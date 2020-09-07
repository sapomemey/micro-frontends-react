import { useState, useEffect } from 'react';

export const useMessaging = () => {
  const [state, setState] = useState({
    value: ''
  });

  useEffect(() => {
    setState({
      value: window.getMsj() || 'default msj'
    });
  }, []);

  return state;
};
