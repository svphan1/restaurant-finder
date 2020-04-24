import React, { Fragment } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => (
    <Fragment>
        <Toolbar />
        <main>{props.children}</main>
    </Fragment>
);

export default layout;
