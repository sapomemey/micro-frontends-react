import { useState, useEffect } from 'react';

export const useMetadataMicroFrontends = () => {
  const [state, setState] = useState({
    loading: true,
    data: []
  });

  useEffect(() => {
    fetch('http://localhost:3000/micro-frontends.json')
      .then(resp => resp.json())
      .then(resp => {
        setState({
          loading: false,
          data: resp.metadaMicroFrontends
        });
      });
  }, []);

  return state;
};
