import React, { Fragment } from 'react';
import { useMessaging } from './useMessaging';

export const App = ({ history }) => {
    const { value } = useMessaging();

    return <Fragment>
        <h1>Hola Tierra</h1>
        <p>
            mensaje: {value}
        </p>
    </Fragment>
};
