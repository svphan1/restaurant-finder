import React from 'react';
import welpLogo from '../../assets/images/welp.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div>
        <img src={welpLogo} alt="welp logo" />
    </div>
);

export default Logo;
