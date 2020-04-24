import React from 'react';
import classes from './SearchBar.module.css';
import StatesDropdown from './StatesDropdown/StatesDropdown';

const SearchBar = (props) => (
    <div className={classes.SearchBar}>
        <div className={classes.SearchInput}>
            <input type="text" placeholder="Enter restaurant name..."></input>
            <input type="text" placeholder="Enter city name..."></input>
            <button>Search</button>
        </div>
        <StatesDropdown />
    </div>
);

export default SearchBar;
