import React, { Fragment } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = (props) => (
    <Fragment>
        <Toolbar />
        <main className={classes.Content}>{props.children}</main>
    </Fragment>
);

export default Layout;
