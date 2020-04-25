import React from 'react';
import classes from './SearchBar.module.css';
import StatesDropdown from './FilterDropdowns/StatesDropdown';
import Button from '../UI/Button/Button';

const SearchBar = (props) => (
    <div className={classes.SearchBar}>
        <div className={classes.SearchContainer}>
            <input type="text" placeholder="Enter restaurant name..."></input>
            <input type="text" placeholder="Enter city name..."></input>
            <Button>Search</Button>
        </div>
        <StatesDropdown
            selectedStateHandler={props.selectedStateHandler}
            selectedGenreHandler={props.selectedGenreHandler}
        />
        <hr />
    </div>
);

export default SearchBar;
