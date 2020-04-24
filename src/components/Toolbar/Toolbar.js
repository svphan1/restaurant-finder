import React from 'react';
import Logo from '../UI/Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = (props) => (
    <header>
        <div className={classes.Toolbar}>
            <Logo />
        </div>
    </header>
);

export default Toolbar;
