import React from 'react';
import background from '../../../assets/images/background.jpg';
import SearchBar from '../../SearchBar/SearchBar';
import classes from './Background.module.css';

const Background = (props) => (
    <div className={classes.Background}>
        <SearchBar />
        <img src={background} alt="food background" />
    </div>
);

export default Background;
