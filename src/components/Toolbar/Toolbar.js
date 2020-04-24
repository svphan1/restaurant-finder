import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = (props) => (
    <header>
        <div className={classes.Toolbar}></div>
        <Logo />
    </header>
);

export default Toolbar;
