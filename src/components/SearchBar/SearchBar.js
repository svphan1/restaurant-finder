import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => (
    <div className={classes.SearchBar}>
        <div className={classes.SearchInput}>
            <input type="text" placeholder="Enter restaurant name..."></input>
            <input type="text" placeholder="Enter city name..."></input>
            <button>Search</button>
        </div>
    </div>
);

export default SearchBar;
