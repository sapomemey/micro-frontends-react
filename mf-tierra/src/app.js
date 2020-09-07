import React from 'react';
import { useMessaging } from './useMessaging';
import './app.css';

export const App = ({ history }) => {
    const { value } = useMessaging();

    return <div className="container">
        <h1>Hola Tierra</h1>
        <p>
            mensaje: {value}
        </p>
    </div>
};
